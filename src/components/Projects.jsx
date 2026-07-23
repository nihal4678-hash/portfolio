function Projects() {
  const projects = [
    {
      title: "AI Cybersecurity Threat Monitoring System",
      image: "/projects/cybersecurity.png",
      description:
        "An AI-powered cybersecurity platform that detects toxic comments, phishing attempts, spam, and malicious content using AI models. Includes a real-time admin dashboard and user authentication.",
      technologies: "React • FastAPI • MongoDB • Python",
      github: "https://github.com/nihal4678-hash",
      demo: "#",
    },
    {
      title: "Resumex AI",
      image: "/projects/resumex.png",
      description:
        "An AI-powered resume analysis platform that helps students improve their resumes with ATS scoring, keyword suggestions, and personalized feedback.",
      technologies: "React • Node.js • MongoDB • AI",
      github: "https://github.com/nihal4678-hash",
      demo: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-800 text-white py-20"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <p className="text-sm text-cyan-300 mb-6">
                  {project.technologies}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="border border-cyan-500 hover:bg-cyan-500 px-5 py-2 rounded-lg font-semibold transition"
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