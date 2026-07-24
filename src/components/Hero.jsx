import { FaGithub, FaLinkedin, FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-900 text-white flex items-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div data-aos="fade-right">
          <p className="text-cyan-400 text-xl mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-5 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Jinna Nihal Reddy
          </h1>

          <div className="text-2xl font-semibold text-cyan-400 mb-6">
            <TypeAnimation
              sequence={[
                "Computer Science Student",
                1500,
                "Full Stack Developer",
                1500,
                "React Developer",
                1500,
                "AI/ML Enthusiast",
                1500,
                "Open Source Learner",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="text-gray-300 text-lg leading-8 mb-8">
            Passionate about building modern web applications,
            AI-powered solutions, and solving real-world problems
            using React, FastAPI, Python, and MongoDB.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href="/resume.pdf"
              download
              className="bg-cyan-500 hover:bg-cyan-600 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg font-semibold shadow-lg"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="border border-cyan-500 hover:bg-cyan-500 hover:text-white hover:scale-105 transition-all duration-300 px-6 py-3 rounded-lg font-semibold"
            >
              Contact Me
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-8 text-3xl">
            <a
              href="https://github.com/nihal4678-hash"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nihalreddy-jinna-24087a333/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/PKCELYkncO/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://www.hackerrank.com/profile/vu_cse_241fa0468"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 hover:scale-125 transition-all duration-300"
            >
              <FaHackerrank />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div
          className="flex justify-center"
          data-aos="fade-left"
        >
          <img
            src="/profile.jpg"
            alt="Jinna Nihal Reddy"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl shadow-cyan-500/40 hover:scale-105 transition-all duration-500"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;