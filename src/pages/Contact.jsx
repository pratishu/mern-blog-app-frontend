//TODO: add the Other projects section
//TODO: add the pdf of resume: after deploying this application (frontend and backend) in vercel and editing the resume with links in them
import React from "react";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 h-screen pt-32">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="space-y-6 text-center">
        <div className="bg-zinc-100 p-6 rounded-lg  shadow-md">
          <h2 className="text-2xl font-semibold mb-8">Connect with Me</h2>
          <div className="flex w-full h-full items-center justify-center gap-8">
            <a
              href="https://github.com/pratishu?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex h-full gap-2 text-xl font-medium items-center px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="h-full" /> Github
            </a>
            <a
              href="https://github.com/pratishu"
              target="_blank"
              rel="noopener noreferrer"
              className=" flex text-xl font-medium h-full gap-2 items-center px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-rose-400 transition-colors"
            >
              <BsFileEarmarkPdfFill className="h-full" /> Download Resume
            </a>
          </div>
        </div>

        <div className="mt-8 text-gray-600 text-xl">
          <p>Have more questions? Go To Faq Section:</p>
          <p className="mt-2 font-bold cursor-pointer hover:text-blue-500 underline text-4xl duration-150">
            <a href="/Faq">Faq</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
