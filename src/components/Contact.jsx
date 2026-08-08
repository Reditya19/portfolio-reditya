import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-100">
      <div className="max-w-6xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-14">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Informasi */}
          <div>

            <h3 className="text-3xl font-bold mb-6">
              Mari Terhubung 👋
            </h3>

            <p className="text-gray-600 leading-8 mb-8">
              Terima kasih telah mengunjungi portfolio saya.
              Jika ingin bekerja sama atau memiliki pertanyaan,
              silakan hubungi saya melalui kontak berikut.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-indigo-600 text-2xl"/>
                <span>redityakaromah53@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <FaWhatsapp className="text-green-600 text-2xl"/>
                <span>081952730968</span>
              </div>

              <div className="flex items-center gap-4">
                <FaGithub className="text-2xl"/>
                <span>github.com/username</span>
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-blue-600 text-2xl"/>
                <span>linkedin.com/in/username</span>
              </div>

            </div>

          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">

            <form>

              <input
                type="text"
                placeholder="Nama"
                className="w-full border p-3 rounded-lg mb-5"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-3 rounded-lg mb-5"
              />

              <textarea
                rows="5"
                placeholder="Pesan"
                className="w-full border p-3 rounded-lg mb-5"
              ></textarea>

              <button
                className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
              >
                Kirim Pesan
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;