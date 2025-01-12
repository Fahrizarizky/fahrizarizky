import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si"; // Ikon WhatsApp
import { FaInstagram } from "react-icons/fa"; // Ikon Instagram

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-r from-teal-500 to-blue-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        <h2 className="text-4xl font-extrabold mb-6">Let's Connect</h2>
        <p className="text-xl text-gray-200 mb-12">
          Saya sangat terbuka untuk peluang baru dan diskusi menarik! Jika Anda
          tertarik untuk bekerja sama, berbagi ide, atau hanya sekedar bertanya,
          jangan ragu untuk menghubungi saya. Saya siap mendengarkan!
        </p>

        {/* Ikon Sosial di tengah halaman */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/fahriza-rizky-a0b007283"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300"
          >
            <FaLinkedin className="text-5xl" />
          </a>
          <a
            href="https://github.com/fahrizarizky"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300"
          >
            <FaGithub className="text-5xl" />
          </a>
          <a
            href="mailto:fahrizarizky6@gmail.com"
            className="text-white hover:text-teal-300 transition duration-300"
          >
            <FaEnvelope className="text-5xl" />
          </a>
          <a
            href="https://wa.me/088271676183" // Ganti dengan nomor WhatsApp Anda
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300"
          >
            <SiWhatsapp className="text-5xl" />
          </a>
          {/* Ikon Instagram */}
          <a
            href="https://www.instagram.com/fahrizarizky123" // Ganti dengan username Instagram Anda
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-300 transition duration-300"
          >
            <FaInstagram className="text-5xl" />
          </a>
        </div>

        {/* Call to Action */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-12">
          <h3 className="text-2xl font-bold mb-4 text-teal-400">
            Have a Question?
          </h3>
          <p className="text-lg text-gray-200 mb-4">
            Jika Anda ingin berdiskusi tentang proyek, ide, atau bahkan hanya
            sekedar bertanya, saya sangat senang bisa berbicara lebih lanjut
            dengan Anda.
          </p>
          <a
            href="mailto:fahrizarizky6@gmail.com"
            className="inline-block py-3 px-8 bg-teal-400 text-white rounded-full hover:bg-teal-500 transition duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
