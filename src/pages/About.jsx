import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 pt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About My Website
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A modern full-stack application built with cutting-edge technologies
            to deliver seamless user experiences
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Platform Highlights
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Modern Frontend</h3>
                  <p className="text-gray-600">
                    Responsive UI with dynamic routing and interactive
                    components
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <span className="text-2xl">🔐</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Secure Backend</h3>
                  <p className="text-gray-600">
                    Robust API endpoints with proper CORS configuration
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <span className="text-2xl">💾</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Database Management</h3>
                  <p className="text-gray-600">
                    Efficient data handling with MongoDB and Mongoose ODM
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-yellow-100 rounded-lg">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Performance</h3>
                  <p className="text-gray-600">
                    Optimized workflows and fast content delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Frontend Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaReact className="text-blue-500 mr-3" />
              Frontend Tech
            </h3>
            <div className="space-y-4">
              <TechItem
                icon={<SiTailwindcss className="w-6 h-6 text-cyan-500" />}
                name="Tailwind CSS"
                desc="Utility-first CSS framework for rapid UI development"
              />
              <TechItem
                icon={<FaReact className="w-6 h-6 text-blue-500" />}
                name="React.js"
                desc="Component-based architecture for interactive UIs"
              />
              <TechItem
                icon="🚀"
                name="React Ecosystem"
                desc="React Router, React Icons, and modern hooks pattern"
              />
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FaNodeJs className="text-green-500 mr-3" />
              Backend Tech
            </h3>
            <div className="space-y-4">
              <TechItem
                icon={<SiExpress className="w-6 h-6 text-gray-800" />}
                name="Express.js"
                desc="Minimalist web framework for Node.js"
              />
              <TechItem
                icon={<SiMongodb className="w-6 h-6 text-green-500" />}
                name="MongoDB"
                desc="NoSQL database for flexible data management"
              />
              <TechItem
                icon={<TbBrandMongodb className="w-6 h-6 text-red-500" />}
                name="Mongoose"
                desc="Elegant MongoDB object modeling"
              />
              <TechItem
                icon="🔐"
                name="CORS"
                desc="Secure cross-origin resource sharing"
              />
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 max-w-3xl mx-auto">
          <p className="text-lg">
            This Website combines the power of modern web technologies to
            deliver a seamless full-stack experience. Built with performance and
            scalability in mind, it showcases the potential of the MERN stack
            architecture enhanced with modern development tools and practices.
          </p>
        </div>
      </div>
    </div>
  );
};

const TechItem = ({ icon, name, desc }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 mt-1">{icon}</div>
    <div>
      <h4 className="font-semibold text-gray-900">{name}</h4>
      <p className="text-gray-600 text-sm">{desc}</p>
    </div>
  </div>
);

export default About;
