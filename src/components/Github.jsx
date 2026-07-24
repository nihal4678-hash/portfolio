function Github() {
  return (
    <section
      id="github"
      className="bg-slate-900 text-white py-24"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          <span className="text-cyan-400">GitHub</span> Statistics
        </h2>

        <div className="flex flex-col items-center gap-10">

          <img
            src="https://github-readme-stats.vercel.app/api?username=nihal4678-hash&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
            className="rounded-xl shadow-xl"
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nihal4678-hash&layout=compact&theme=tokyonight&hide_border=true"
            alt="Top Languages"
            className="rounded-xl shadow-xl"
          />
          <img
  src="https://github-readme-activity-graph.vercel.app/graph?username=nihal4678-hash&theme=tokyo-night"
  alt="GitHub Activity"
  className="rounded-xl shadow-xl w-full"
/>

        </div>

      </div>
    </section>
  );
}

export default Github;