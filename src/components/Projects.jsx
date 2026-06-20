import React from "react";
import ShinyText from "../Reactbits/ShinyText";

export default function Projects() {
  const projects = [
    {
      title: "Portfolio",
      desc: "Modern portfolio with React",
      link: "#",
      code: "#",
      tech: ["React", "Tailwind"],
    },
    {
      title: "cartCraft",
      desc: "Game built using HTML, CSS, JS",
      link: "https://rahul75-bit.github.io/cartCraft/",
      code: "https://github.com/Rahul75-bit/cartCraft.git",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "NexTime Website",
      desc: "Responsive UI using Bootstrap",
      link: "https://rahul75-bit.github.io/nextime/",
      code: "https://github.com/Rahul75-bit/nextime.git",
      tech: ["HTML", "CSS", "Bootstrap"],
    },
    {
      title: "Quiz Master",
      desc: "Quiz app with React",
      link: "https://rahul75-bit.github.io/quizmaster/",
      code: "https://github.com/Rahul75-bit/quizmaster.git",
      tech: ["React","Tailwind"],
    },
  ];

  return (
    <div
      id="projects"
      className="min-h-screen bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-20"
    >
      <section className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <ShinyText text="My " />
          <span>
            <ShinyText text="Projects" color="#dc2626" />
          </span>
        </h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group rounded-2xl overflow-hidden 
              bg-white/5 backdrop-blur-xl border border-white/10
              hover:scale-[1.03] hover:-translate-y-3 
              transition-all duration-500"
            >
              <div className="absolute -inset-px bg-linear-to-r from-blue-500 via-purple-500 to-red-500 opacity-0 group-hover:opacity-100 blur-md transition"></div>

              <div className="relative p-6 bg-gray-900/90 rounded-2xl h-full flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-semibold mb-2 group-hover:text-red-400 transition">
                    {project.title}
                  </h4>

                  <p className="text-gray-400 text-sm mb-4">
                    {project.desc}
                  </p>

                  {/* ✅ Dynamic Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-gray-800 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm rounded-lg 
                    border border-gray-600 bg-linear-to-r from-gray-400 
                    hover:bg-gray-800 transition-all"
                  >
                    🚀 Live
                  </a>

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center px-4 py-2 text-sm rounded-lg             
                    bg-linear-to-r from-red-500 
                    hover:shadow-lg hover:shadow-blue-500/30 
                    transition-all"
                  >
                    💻 Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}