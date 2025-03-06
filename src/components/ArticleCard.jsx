// src/components/ArticleCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="bg-zinc-100 border rounded-lg shadow-lg hover:outline hover:outline-2 hover:outline-zinc-300 overflow-hidden h-[340px] flex flex-col justify-between">
      <div className="p-6">
        <h3 className="text-xl font-semibold font-monstt mb-2">
          {article.title}
        </h3>
        <p className="text-gray-500 font-poppins text-lg mb-4">
          By: {article.author}
        </p>
        <p className="text-gray-600 line-clamp-4 font-roboto text-lg">
          {article.body}
        </p>
      </div>
      <div className="px-4">
        <div className="flex justify-end py-2">
          <Link
            to={`/articles/${article.id}/edit`}
            className="px-4 py-2 text-gray-700 font-medium bg-blue-400 rounded-lg hover:bg-slate-300 hover:text-blue-500 outline-none hover:outline-4 hover:outline-blue-400 transition-colors"
          >
            Edit Article
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
