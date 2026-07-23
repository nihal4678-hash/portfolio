import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
  id="contact"
  className="bg-slate-900 text-white py-20"
  data-aos="fade-up"
>
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Left */}
          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>241fa04678@vignan.ac.in</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+91 8520991199</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p>Guntur, Andhra Pradesh, India</p>
              </div>
            </div>

          </div>

          {/* Right */}
          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-800 outline-none"
            ></textarea>

            <button
              className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;