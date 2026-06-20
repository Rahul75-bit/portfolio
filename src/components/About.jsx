import React from "react";
import resume from "../assets/RahulMourya.pdf";
import ShinyText from "../Reactbits/ShinyText";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - TEXT */}
        <div>
          <h1 className="text-4xl font-bold text-start mb-4">
            <ShinyText text="About " />
            <span>
              {" "}
              <ShinyText text=" Me" color="#dc2626" />
            </span>
          </h1>

          <p className="text-gray-400 mb-6 leading-relaxed">
            Hi, I'm{" "}
            <span className="text-red-500 font-semibold">Rahul Mourya</span> 👋
            A passionate <span className="text-red-500">web developer</span> who
            loves building modern, responsive and user-friendly web
            applications.
          </p>

          <p className="text-gray-400 mb-6 leading-relaxed">
            I specialize in creating smooth UI experiences using{" "}
            <span className="text-red-500">React, JavaScript</span> and{" "}
            <span className="text-red-500">morden tools</span>. I enjoy turning
            complex problems into simple, beautiful and intuitive designs.
          </p>

          <p className="text-gray-400 leading-relaxed">
            Currently, I'm improving my skills in{" "}
            <span className="text-red-500">Next.js & TypeScript</span> and
            exploring advanced frontend animations.
          </p>

          {/* BUTTON */}
          <a href={resume} download="Rahul_Mourya_Resume.pdf">
            <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 transition rounded-lg font-medium">
              Download Resume
            </button>
          </a>
        </div>

        {/* RIGHT SIDE - CARD */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700">
          <h3 className="text-xl font-semibold mb-6 text-red-500">
            Quick Info
          </h3>

          <div className="space-y-4 text-gray-300">
            <p>
              <span className="text-white font-medium">Name:</span> Rahul Mourya
            </p>
            <p>
              <span className="text-white font-medium">Role:</span> Web
              Developer
            </p>
            <p>
              <span className="text-white font-medium">Experience:</span>{" "}
              Fresher
            </p>
            <p>
              <span className="text-white font-medium">Location:</span> India
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 mt-8 text-center">
            <div>
              <h4 className="text-2xl font-bold text-red-500">10+</h4>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-red-500">3+</h4>
              <p className="text-gray-400 text-sm">Years Learning</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-red-500">100%</h4>
              <p className="text-gray-400 text-sm">Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
