import React from "react";
import { FaReact, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiBootstrap, SiMysql, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <FaReact className="text-5xl text-teal-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">React</h3>
            <p className="text-gray-400">
              Membangun antarmuka modern dan responsif.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <FaLaravel className="text-5xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Laravel</h3>
            <p className="text-gray-400">Pengembangan backend yang handal.</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <SiNextdotjs className="text-5xl text-gray-100 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Next.js</h3>
            <p className="text-gray-400">
              Optimisasi performa dan SEO dengan framework React.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <SiBootstrap className="text-5xl text-purple-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">Bootstrap</h3>
            <p className="text-gray-400">
              Membuat desain responsif dan modern dengan framework CSS.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <SiMysql className="text-5xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">MySQL</h3>
            <p className="text-gray-400">
              Pengelolaan dan manipulasi database relasional.
            </p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
            <SiMongodb className="text-5xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-2">MongoDB</h3>
            <p className="text-gray-400">
              Pengelolaan data berbasis dokumen NoSQL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
