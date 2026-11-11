import { useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { profile, aboutCards } from "../data/profile";

function About() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <motion.section
      id="about"
      className="max-w-7xl mx-auto py-20 md:py-28 px-5 sm:px-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.15 }}
    >
      <SectionTitle eyebrow="Profil">Tentang Saya</SectionTitle>

      <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="flex justify-center">
          {photoError ? (
            <div
              role="img"
              aria-label={profile.fullName}
              className="w-64 h-72 sm:w-72 sm:h-80 rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-500 border-4 border-white shadow-2xl flex items-center justify-center text-white text-7xl font-extrabold"
            >
              RN
            </div>
          ) : (
            <img
              src={profile.photo}
              alt={profile.fullName}
              onError={() => setPhotoError(true)}
              className="w-64 h-72 sm:w-72 sm:h-80 object-cover rounded-3xl shadow-2xl border-4 border-white"
            />
          )}
        </div>

        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-5">Halo! 👋</h3>

          <p className="text-slate-600 leading-8 mb-8">{profile.about}</p>

          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4">
            {aboutCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 rounded-2xl p-5"
              >
                <h4 className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                  {card.title}
                </h4>
                <p className="mt-2 font-semibold text-slate-800">{card.value}</p>
                {card.note && (
                  <p className="text-sm text-slate-500 mt-0.5">{card.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
