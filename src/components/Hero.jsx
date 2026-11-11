import { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";
import { profile } from "../data/profile";

const socials = [
  { icon: FaGithub, label: "GitHub", ...profile.github, hover: "hover:text-slate-900" },
  { icon: FaLinkedin, label: "LinkedIn", ...profile.linkedin, hover: "hover:text-blue-600" },
  { icon: FaInstagram, label: "Instagram", ...profile.instagram, hover: "hover:text-pink-500" },
];

function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section
      id="home"
      className="min-h-[100svh] pt-24 pb-16 bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center relative overflow-hidden"
    >
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-indigo-300 rounded-full blur-3xl opacity-30 -top-24 -left-24" />
      <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-blue-300 rounded-full blur-3xl opacity-30 bottom-0 right-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full grid lg:grid-cols-2 items-center gap-12 relative z-10">
        {/* Kiri */}
        <motion.div
          className="order-2 lg:order-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="inline-block rounded-full bg-white/80 border border-indigo-100 px-4 py-1.5 text-sm sm:text-base text-indigo-600 font-semibold shadow-sm">
            Halo, Saya 👋
          </p>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold mt-5 leading-tight tracking-tight">
            {profile.firstName}
            <span className="block sm:inline text-indigo-600"> {profile.lastName}</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl mt-4 font-semibold text-slate-700 min-h-[2.25rem]">
            <Typewriter
              words={profile.roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-8 max-w-xl mx-auto lg:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="#projects"
              className="bg-indigo-600 text-white px-8 py-3.5 rounded-full font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:-translate-y-0.5 transition duration-300"
            >
              Lihat Project
            </a>

            <a
              href={profile.cv}
              download
              className="inline-flex items-center justify-center gap-2 border-2 border-indigo-600 text-indigo-600 px-8 py-3.5 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition duration-300"
            >
              <FaDownload className="text-sm" />
              Download CV
            </a>
          </div>

          <div className="flex justify-center lg:justify-start gap-5 mt-10 text-2xl text-slate-600">
            {socials.map(({ icon: Icon, label, url, hover }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className={`p-3 rounded-full bg-white shadow-sm border border-slate-100 transition hover:-translate-y-0.5 ${hover}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Kanan */}
        <div className="order-1 lg:order-2 flex justify-center relative">
          <div className="absolute w-64 h-64 sm:w-80 sm:h-80 bg-indigo-400 rounded-full blur-3xl opacity-30" />

          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="relative"
          >
            {photoError ? (
              <div
                role="img"
                aria-label={profile.fullName}
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] rounded-full border-8 border-white shadow-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center text-white text-6xl sm:text-7xl lg:text-8xl font-extrabold"
              >
                RN
              </div>
            ) : (
              <img
                src={profile.photo}
                alt={profile.fullName}
                onError={() => setPhotoError(true)}
                className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[400px] lg:h-[400px] object-cover rounded-full border-8 border-white shadow-2xl"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
