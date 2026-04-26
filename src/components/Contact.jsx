

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import ShinyText from "../Reactbits/ShinyText";

export default function Contact() {
  const [state, handleSubmit] = useForm("xzdyjkll");

  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black text-white px-4">
        <div className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl text-center max-w-md w-full border border-gray-700">
          <div className="text-5xl mb-4 animate-bounce">✅</div>
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-gray-400">Message Sent</span> <span className="text-red-500">Successfully!</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Thank you for <span className="text-red-500">reaching out</span>. I’ll get back to you soon.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 from-red-500 hover:bg-red-700   rounded-lg"
          >
            <span className="text-gray-400 hover:text-white">Send Another Message</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      id="contact"
      className="min-h-screen bg-linear-to-b bg-gray-900 text-white py-20"
    >
      {/* 🔥 Top Banner */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <ShinyText text="Let's " />
          <span>
            {" "}
            <ShinyText text="Connect" color="#dc2626" />
          </span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          I’m always open to{" "}
          <span className="text-red-500">discussing new projects</span>,
          creative ideas or opportunities to be{" "}
          <span className="text-red-500">part of your vision</span>.
        </p>
      </div>

      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        {/* 🔥 Left Side */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">Get in <span className="text-red-500">Touch</span></h2>
            <p className="text-gray-400">
              Feel free to <span className="text-red-500">reach out for collaborations</span> and  freelance work.
              a friendly chat 👇
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <p>
              📧 <span className="text-gray-300">rahuldev2208@proton.me</span>
            </p>
            <p>
              📍 <span className="text-gray-300">Mumbai, India</span>
            </p>
            <p>
              💼 <span className="text-gray-300">Web Developer</span>
            </p>
          </div>

          {/* 🔥 Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-800 p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-red-500">10+</h3>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-red-500">3+</h3>
              <p className="text-xs text-gray-400">Years Learning</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl text-center">
              <h3 className="text-xl font-bold text-red-500">5+</h3>
              <p className="text-xs text-gray-400">Technologies</p>
            </div>
          </div>

          <div className="flex gap-5 mt-6">
            {/* GitHub */}
            <a
              href="https://github.com/Rahul75-bit"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-800 rounded-xl hover:bg-gray-700 
              hover:scale-110 transition-all duration-300 shadow-md hover:shadow-white/20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white "
                
              >
                <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 5.1 3.3 9.42 7.88 10.95.58.1.79-.25.79-.55v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.74 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.27-5.23-5.65 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.18 1.17a10.96 10.96 0 012.9-.39c.98 0 1.97.13 2.9.39 2.2-1.48 3.17-1.17 3.17-1.17.63 1.57.24 2.73.12 3.02.73.8 1.17 1.82 1.17 3.07 0 4.39-2.69 5.36-5.25 5.64.41.36.77 1.08.77 2.18v3.23c0 .3.21.66.8.55 4.57-1.53 7.87-5.85 7.87-10.95C23.25 5.48 18.27.5 12 .5z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rahul-mourya08/"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-gray-800 rounded-xl hover:bg-red-700 
              hover:scale-110 transition-all duration-300 shadow-md hover:shadow-blue-500/30"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                
              >
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.05c.53-1 1.82-2.2 3.75-2.2 4 0 4.75 2.63 4.75 6.05V24h-4v-7.6c0-1.8-.03-4.1-2.5-4.1-2.5 0-2.88 1.95-2.88 3.97V24h-4V8z" />
              </svg>
            </a>
          </div>
        </div>

        {/* 🔥 Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-xl border border-white/10 
          p-8 rounded-2xl shadow-lg space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-linear-to-r from-red-500  
            py-3 rounded-lg font-medium hover:scale-105 transition-all"
          >
            {state.submitting ? "Sending..." : "Send Message 🚀"}
          </button>
        </form>
      </section>
    </div>
  );
}
