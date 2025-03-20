import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ArticleForm from "./components/ArticlesForm.jsx";
import "./index.css";
import About from "./pages/About.jsx";
import ArticlesPage from "./pages/ArticlesPage.jsx";
import Contact from "./pages/Contact.jsx";
import Faq from "./pages/Faq.jsx";
import Home from "./pages/Home.jsx";
import Layout from "./pages/Layout.jsx";
import SingleArticlePage from "./pages/SingleArticlePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="articles" element={<ArticlesPage />} />
      <Route path="articles/:id" element={<SingleArticlePage />} />
      <Route
        path="/articles/:id/edit"
        element={<ArticleForm isEdit={true} />}
      />

      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} />
      <Route path="/articles/new" element={<ArticleForm />} />

      {/* Commenting those routes which are not required for now */}
      {/* <Route path="profile" element={<Profile />} /> */}
      {/* <Route path="register" element={<Register />} /> */}
      {/* <Route path="Login" element={<Login />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
