import React from "react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Bagian Foto */}
        <div className="flex justify-center">
          <img
            src="myphoto.jpeg" // Ganti dengan path foto Anda
            alt="My Profile"
            className="w-80 h-80 object-cover rounded-full shadow-2xl border-8 border-teal-500 transform transition-all duration-500 hover:scale-105"
          />
        </div>

        {/* Bagian Deskripsi */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 text-teal-500 animate__animated animate__fadeInUp">
            Tentang Saya
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Saya adalah seorang fresh graduate yang memiliki kecintaan mendalam
            terhadap dunia web programming. Selama masa kuliah, saya telah
            mengasah keterampilan dalam pengembangan web, terutama menggunakan
            teknologi terbaru seperti React, Laravel, dan Next.js. Saya tidak
            hanya memahami dasar-dasar pengembangan web, tetapi juga berfokus
            pada pembuatan aplikasi yang responsif dan user-friendly.
          </p>
          <p className="text-gray-300 text-lg mb-6">
            Selain itu, saya selalu bersemangat untuk belajar dan mengembangkan
            diri. Saya aktif mengikuti perkembangan tren teknologi dan berusaha
            mengimplementasikan praktik terbaik dalam setiap proyek yang saya
            kerjakan. Melalui berbagai proyek pribadi, saya telah memperoleh
            pengalaman yang mendalam tentang pengembangan web modern, serta
            penerapan framework dan tools yang relevan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
