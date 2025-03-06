import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ArticleForm = ({ isEdit = false }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: "",
  });
  const [loading, setLoading] = useState(isEdit);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isEdit) return;

    const fetchArticle = async () => {
      try {
        const response = await fetch(
          `http://localhost:3002/article/getSingleArticle/${id}`
        );
        const data = await response.json();
        // console.log(data.singlearticle); // #debugging
        setFormData(data.singlearticle); // we are doing data.singlearticle instead of data coz its coming like this from json
        setLoading(false);
      } catch (error) {
        console.error("Error fetching article:", error);
        setLoading(false);
      }
    };
    fetchArticle();
  }, [id, isEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = isEdit
      ? `http://localhost:3002/article/updateArticle/${id}`
      : "http://localhost:3002/article/createArticle";
    const method = isEdit ? "PATCH" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        navigate("/articles");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleCancel = () => {
    navigate("/articles");
  };

  if (loading) return <div>Loading form...</div>;

  return (
    <div className="container mx-auto p-4 max-w-6xl pt-32 h-screen">
      <h2 className="text-6xl font-bold mb-4">
        {isEdit ? "Edit Article" : "New Article"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-500 mb-4 font-monstt font-bold text-2xl">
            Title
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded text-xl focus:outline-blue-400"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-4 text-2xl font-bold font-monstt">
            Content
          </label>
          <textarea
            className="w-full p-2 border rounded h-48 text-lg focus:outline-blue-400"
            value={formData.body}
            onChange={(e) => setFormData({ ...formData, body: e.target.value })}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-500 mb-4 text-2xl font-bold font-monstt">
            Author
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:outline-blue-400"
            value={formData.author}
            onChange={(e) =>
              setFormData({ ...formData, author: e.target.value })
            }
            required
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            {isEdit ? "Update" : "Create"}
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ArticleForm;
