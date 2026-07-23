import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-cyan-400">
          Jinna Nihal Reddy
        </h2>

        <p className="text-gray-400 mt-3">
          Computer Science Student | Full Stack Developer
        </p>

        <div className="flex justify-center gap-6 text-3xl mt-6">
          <a
            href="https://github.com/nihal4678-hash"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/nihalreddy-jinna-24087a333/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-gray-500 mt-8">
          © {new Date().getFullYear()} Jinna Nihal Reddy. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;