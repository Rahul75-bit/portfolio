import React from "react";
import TextType from "../Reactbits/TextType";
import TrueFocus from "../Reactbits/TrueFocus";
import ProfileCard from "../Reactbits/ProfileCard";

export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-start md:items-center justify-center px-4 sm:px-6 md:px-10 pt-4 md:pt-8">
      <div
        id="hero"
        className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left space-y-4 overflow-visible">
          <p className="text-red-600 text-sm tracking-widest uppercase">
            Web Developer
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-normal">
            Hi, I'm
          </h1>

          <div className="py-3 md:py-5 overflow-visible">
            <TrueFocus
              sentence="Rahul Mourya"
              manualMode={false}
              blurAmount={5}
              borderColor="#5227FF"
              animationDuration={0}
              pauseBetweenAnimations={1}
            />
          </div>
          <TextType
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            text={[
              " I create modern, responsive and high-performance web applications using React, Tailwind and latest technologies.",
            ]}
            deletingSpeed={50}
            variableSpeed={{ min: 60, max: 120 }}
            cursorBlinkDuration={0.5}
          />

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="projects"
              className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-xl font-medium transition text-center"
            >
              🚀 View Projects
            </a>

            <a
              href="contact"
              className="px-6 py-3 border border-gray-600 hover:border-white rounded-xl font-medium transition text-center"
            >
              📩 Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end w-full">
          <div className="w-full max-w-70 sm:max-w-85 md:max-w-90 lg:max-w-100 min-h-80">
            <ProfileCard
              avatarUrl="/rahul.jpeg"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowColor="rgba(220, 38, 38, 0.35)"
              behindGlowEnabled
              innerGradient="linear-gradient(145deg,#0f172a 0%,#1f2937 50%,#0f172a 100%)"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
