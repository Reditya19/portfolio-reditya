import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <motion.section
      id="home"
      className="min-h-screen pt-24 bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center relative overflow-hidden"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-20 -top-24 -left-24"></div>
      <div className="absolute w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 bottom-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 items-center gap-10 relative z-10">

        {/* Kiri */}
        <div>
          <h3 className="text-xl text-indigo-600 font-semibold">
            Halo, Saya 👋
          </h3>

          <h1 className="text-5xl md:text-6xl font-bold mt-3 leading-tight">
            Reditya
            <span className="text-indigo-600"> Nur Karomah</span>
          </h1>

          <h2 className="text-3xl mt-4 font-semibold text-gray-700">
            <Typewriter
              words={[
                "UI/UX Designer",
                "Frontend Developer",
                "Web Designer",
                "Creative Thinker",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8 max-w-xl">
            Saya fokus pada pembuatan website modern, responsif, dan mudah
            digunakan. Saya senang mengubah ide menjadi tampilan yang menarik
            dan fungsional.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-8 py-4 rounded-full shadow-xl hover:bg-indigo-700 hover:scale-105 transition duration-300"
            >
              Lihat Project
            </a>

            <a
              href="/cv.pdf"
              download
              className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              Download CV
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-3xl text-gray-700">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-indigo-600 transition cursor-pointer" />
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-600 transition cursor-pointer" />
            </a>

            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram className="hover:text-pink-500 transition cursor-pointer" />
            </a>
          </div>
        </div>

        {/* Kanan */}
        <div className="flex justify-center relative">

          <div className="absolute w-80 h-80 bg-indigo-400 rounded-full blur-3xl opacity-30"></div>

          <motion.img
            src="/profile.png"
            alt="Profile"
            animate={{ y: [0, -15, 0] }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="relative w-[350px] md:w-[420px] rounded-full border-8 border-white shadow-2xl"
          />

        </div>

      </div>
    </motion.section>
  );
}

export default Hero;