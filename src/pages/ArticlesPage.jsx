import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArticleCard from "../components/ArticleCard";

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // loading is true : coz dafault state when loading articles with json req.
  const [error, setError] = useState(null);

  // useEffect to fetch artilces and filling articles using setArticles
  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true); // in case loading is not true already
      setError(null); // in case they are not null already
      try {
        const response = await fetch(
          "http://localhost:3002/article/getAllArticles"
        );
        if (!response) throw new Error("Json request doesnt work");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        setError(error.message); // err have err.message property , we cant see beforehand coz we are not using TS
      } finally {
        setLoading(false); // we are doing in finally coz: we had to repeat setloading(false) in both try and catch block in case any one fulfilled.
      }
    };
    fetchArticles();
  }, []); // only running it once currently the component mounts IE: page loads
  return (
    <div className="min-h-screen">
      {loading && (
        <div className="flex flex-col items-center justify-center text-8xl h-full ">
          Articles are loading...{" "}
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center text-8xl h-full">
          Error Loading page: {error}
        </div>
      )}
      {!error && !loading && (
        <div className="flex flex-col gap-8 pt-20 ">
          {/* this is button to add articles */}

          <Link
            to="/articles/new"
            className="bg-blue-500/80 hover:bg-blue-700/80 text-white font-bold py-2 px-4 rounded w-48 mx-auto text-center hover:scale-110 duration-150"
          >
            Add New Article
          </Link>

          {/* // artilces card DIV */}
          <div className="flex flex-wrap gap-6 px-16 justify-center">
            {/* flex wrap: for cards to wrap to next line, justify-center: card to show in center, looks good, px16: to have padding instead of margin. */}
            {/* we are doing link coz we want a new page to open when user click on cards */}

            {articles.map((article) => (
              <Link
                to={`/articles/${article._id}`} // _id is coming from API instead of id
                key={article._id} // _id is comeing from api instead of id
                className="group w-[400px] transition-transform duration-200 hover:scale-105" // #phind this later about the "group" thing and why this works as intended
              >
                <ArticleCard article={article} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ArticlesPage;
