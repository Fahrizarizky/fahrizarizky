import React from "react";

const Certifications = () => {
  const certifications = [
    {
      title: "React Developer Certification",
      issuer: "Udemy",
      year: "2023",
      description:
        "Menyelesaikan kursus lengkap pengembangan aplikasi menggunakan React, meliputi hooks, state management, dan optimasi performa.",
    },
    {
      title: "Laravel Advanced",
      issuer: "Coursera",
      year: "2024",
      description:
        "Kursus tingkat lanjut dalam pengembangan aplikasi menggunakan Laravel, termasuk sistem autentikasi dan API RESTful.",
    },
    {
      title: "Next.js Mastery",
      issuer: "Pluralsight",
      year: "2023",
      description:
        "Pelatihan intensif tentang Next.js, mencakup server-side rendering, dynamic routing, dan optimisasi SEO.",
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-extrabold mb-8 text-center">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-400">{cert.issuer}</p>
              <p className="text-teal-400">{cert.year}</p>
              <p className="text-gray-300 mt-2">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
