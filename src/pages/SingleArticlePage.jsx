// src/components/SingleArticle.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleArticlePage = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/article/getSingleArticle/${id}`
        );
        const data = await response.json();
        setArticle(data.singlearticle); // data.singlearticle instead or data coz of nature of json return
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id]);

  if (loading) return <div>Loading article...</div>;
  if (!article) return <div>Article not found</div>;

  return (
    <div className="h-screen flex justify-center items-start">
      <div className="container mx-auto p-4 max-w-8xl mt-32 bg-zinc-100 border-2 rounded-2xl shadow-lg outline-none py-8">
        <h1 className="text-6xl w-full font-bold font-monstt capitalize mb-4 text-center">
          {article.title}
        </h1>

        <p className="text-gray-500 w-full text-center text-sm mb-8 font-poppins font-medium leading-loose">
          By {article.author}
        </p>
        <p className="font-roboto text-center leading-relaxed text-xl text-gray-600 mb-4">
          {article.body}
        </p>
      </div>
    </div>
  );
};

export default SingleArticlePage;
