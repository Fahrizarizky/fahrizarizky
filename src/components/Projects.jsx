import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Platform Pendataan Tapak Suci",
      description:
        "Sistem pendataan yang mempermudah pengelolaan data anggota dan kegiatan organisasi Tapak Suci.",
      technologies: ["Laravel", "Bootstrap", "Mysql", "Jquery"],
      image: "tapaksuciapp.png",
    },
    {
      title: "Sistem Pakar Analisa Stres",
      description:
        "Aplikasi untuk membantu menganalisa tingkat stres siswa SMK secara efisien menggunakan metode sistem pakar.",
      technologies: ["Laravel", "Bootstrap", "Mysql"],
      image: "sistempakar.png",
    },
    {
      title: "Online Barbershop Booking",
      description:
        "Website untuk memesan jadwal potong rambut secara online dengan fitur pilihan layanan dan waktu.",
      technologies: ["Laravel", "Bootstrap", "Mysql"],
      image: "rdbarbershop.png",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-4xl font-extrabold mb-12 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="relative rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              style={{
                height: "350px", // Tinggi diperbesar
              }}
            >
              {/* Background Image with Diagonal Gradient */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="text-sm text-gray-400">
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
