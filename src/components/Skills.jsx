function Skills() {
  const skills = {
    Languages: ["C", "Java", "Python", "JavaScript"],
    Frontend: ["HTML", "CSS", "React",],
    Backend: ["FastAPI", "Node.js", "Express.js"],
    Database: ["MongoDB", "MySQL"],
    Tools: ["GitHub", "VS Code", "Postman"],
  };

  return (
    <section
  id="skills"
  className="bg-slate-900 text-white py-20"
  data-aos="zoom-in"
>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-500/20 transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-5">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-500 text-white px-4 py-2 rounded-full font-medium hover:bg-cyan-600 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;