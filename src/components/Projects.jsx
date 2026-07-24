function Projects() {
  const projects = [
    {
      title: "AI Cybersecurity Threat Monitoring System",
      image: "/cybersecurity.png",
      description:
        "An AI-powered cybersecurity platform that detects toxic comments, phishing attempts, spam, and malicious content using AI models. Includes a real-time admin dashboard, user authentication, and AI-based moderation.",
      technologies: "React • FastAPI • MongoDB • Python",
      github: "https://github.com/nihal4678-hash",
      demo: "#",
    },
    {
      title: "Resumex AI",
      image: "/resumex.png",
      description:
        "An AI-powered resume analysis platform that helps students improve their resumes with ATS scoring, keyword suggestions, resume feedback, and placement preparation.",
      technologies: "React • Node.js • MongoDB • AI",
      github: "https://github.com/nihal4678-hash",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-800 text-white py-24"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-cyan-400">My</span>{" "}
          <span className="text-white">Projects</span>
        </h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 hover:-translate-y-3 transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-8 mb-6">
                  {project.description}
                </p>

                <p className="text-cyan-300 font-semibold mb-8">
                  {project.technologies}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 flex-wrap">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Live Demo
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;