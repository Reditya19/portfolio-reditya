import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="max-w-7xl mx-auto py-24 px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-16">
        Tentang Saya
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div className="flex justify-center">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-80 rounded-3xl shadow-2xl border-4 border-white"
          />
        </div>

        <div>

          <h3 className="text-3xl font-bold mb-6">
            Halo! 👋
          </h3>

          <p className="text-gray-600 leading-8 mb-6">
            Saya Reditya Nur Karomah, mahasiswa Informatika yang memiliki
            ketertarikan pada bidang UI/UX Design dan Frontend Development.
            Saya senang membuat tampilan website yang modern, mudah digunakan,
            serta memberikan pengalaman terbaik bagi pengguna.
          </p>

          <div className="grid grid-cols-2 gap-5">

            <div className="bg-white shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl p-5">
              <h4 className="font-bold text-indigo-600">
                Pendidikan
              </h4>

              <p className="mt-3">
                S1 Informatika
              </p>
            </div>

            <div className="bg-white shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl p-5">
              <h4 className="font-bold text-indigo-600">
                Pengalaman
              </h4>

              <p className="mt-3">
                PKL & Store Crew
              </p>
            </div>

            <div className="bg-white shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl p-5">
              <h4 className="font-bold text-indigo-600">
                Organisasi
              </h4>

              <p className="mt-3">
                HIMAFORKA
              </p>
            </div>

            <div className="bg-white shadow-xl hover:shadow-2xl transition duration-300 rounded-2xl p-5">
              <h4 className="font-bold text-indigo-600">
                Domisili
              </h4>

              <p className="mt-3">
                Indonesia
              </p>
            </div>

          </div>

        </div>

      </div>

    </motion.section>
  );
}

export default About;