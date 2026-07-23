function About() {
  return (
    <section
  id="about"
  className="bg-slate-800 text-white py-20"
  data-aos="fade-up"
>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Who Am I?
            </h3>

            <p className="text-gray-300 leading-8">
              I'm Jinna Nihal Reddy, a Computer Science & Engineering student
              at Vignan University. I enjoy building modern web applications,
              exploring AI technologies, and creating software that solves
              real-world problems.
            </p>

            <p className="text-gray-300 leading-8 mt-4">
              I'm passionate about Full Stack Development, Artificial
              Intelligence, and continuously learning new technologies to
              improve my skills.
            </p>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-cyan-400 text-xl font-bold">Education</h3>
              <p className="mt-2">B.Tech CSE</p>
              <p>Vignan University</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-cyan-400 text-xl font-bold">Projects</h3>
              <p className="mt-2">3+</p>
              <p>Completed</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-cyan-400 text-xl font-bold">Skills</h3>
              <p className="mt-2">React</p>
              <p>FastAPI</p>
              <p>Python</p>
            </div>

            <div className="bg-slate-900 p-6 rounded-xl">
              <h3 className="text-cyan-400 text-xl font-bold">Goal</h3>
              <p className="mt-2">
                Software Engineer
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;