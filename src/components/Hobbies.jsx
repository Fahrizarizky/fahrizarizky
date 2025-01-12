import React from "react";
import { FaMusic, FaCode, FaGamepad } from "react-icons/fa";

const Hobbies = () => {
  const hobbies = [
    {
      icon: <FaMusic className="text-5xl text-teal-400 mb-4" />,
      title: "Music",
      description:
        "Saya menyukai mendengarkan musik dari berbagai genre, terutama jazz dan lo-fi. Musik membantu saya tetap fokus saat bekerja atau belajar.",
    },
    {
      icon: <FaCode className="text-5xl text-teal-400 mb-4" />,
      title: "Coding",
      description:
        "Menulis kode adalah hobi sekaligus pekerjaan saya. Saya suka mengeksplorasi teknologi baru dan membuat proyek kecil yang berguna.",
    },
    {
      icon: <FaGamepad className="text-5xl text-teal-400 mb-4" />,
      title: "Gaming",
      description:
        "Bermain game adalah cara saya bersantai. Saya menikmati game strategi dan game multiplayer bersama teman-teman.",
    },
  ];

  return (
    <section id="hobbies" className="py-24 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-8">My Hobbies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {hobbies.map((hobby, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
            >
              {hobby.icon}
              <h3 className="text-2xl font-semibold mb-2">{hobby.title}</h3>
              <p className="text-gray-400">{hobby.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
