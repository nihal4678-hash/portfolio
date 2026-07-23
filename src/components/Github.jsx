function Github() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          GitHub Stats
        </h2>

        <div className="flex flex-col items-center gap-8">

          <img
            src="https://github-readme-stats.vercel.app/api?username=nihal4678-hash&show_icons=true&theme=tokyonight"
            alt="GitHub Stats"
            className="rounded-xl"
          />

          <img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=nihal4678-hash&layout=compact&theme=tokyonight"
            alt="Top Languages"
            className="rounded-xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Github;