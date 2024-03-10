import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import About from "./pages/About.jsx";
import Articles from "./pages/Articles.jsx";
import Contact from "./pages/Contact.jsx";
import Profile from "./pages/Profile.jsx";
import Home from "./pages/Home.jsx";
import Faq from "./pages/Faq.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="articles" element={<Articles />} />
      <Route path="contact" element={<Contact />} />
      <Route path="profile" element={<Profile />} />
      <Route path="faq" element={<Faq />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
