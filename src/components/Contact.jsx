import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { profile } from "../data/profile";

const inputClass =
  "w-full border border-slate-200 bg-slate-50 p-3 rounded-xl focus:bg-white focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // Tanpa backend: membuka aplikasi email dengan pesan yang sudah terisi.
  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Pesan dari ${form.name} (portfolio)`;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const items = [
    { icon: FaEnvelope, color: "text-indigo-600", text: profile.email, href: `mailto:${profile.email}` },
    { icon: FaWhatsapp, color: "text-green-600", text: profile.whatsapp, href: profile.whatsappLink },
    { icon: FaGithub, color: "text-slate-800", text: profile.github.label, href: profile.github.url },
    { icon: FaLinkedin, color: "text-blue-600", text: profile.linkedin.label, href: profile.linkedin.url },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-slate-100">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionTitle eyebrow="Kontak">Contact Me</SectionTitle>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {/* Informasi */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-5">Mari Terhubung 👋</h3>

            <p className="text-slate-600 leading-8 mb-8">
              Terima kasih telah mengunjungi portfolio saya. Jika ingin bekerja sama
              atau memiliki pertanyaan, silakan hubungi saya melalui kontak berikut.
            </p>

            <ul className="space-y-4">
              {items.map(({ icon: Icon, color, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm hover:shadow-md transition"
                  >
                    <Icon className={`${color} text-2xl shrink-0`} />
                    <span className="break-all text-slate-700">{text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="bg-white p-6 sm:p-8 rounded-3xl shadow-lg border border-slate-100"
          >
            <label className="block mb-5">
              <span className="block text-sm font-semibold mb-2">Nama</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={onChange}
                placeholder="Nama"
                autoComplete="name"
                className={inputClass}
              />
            </label>

            <label className="block mb-5">
              <span className="block text-sm font-semibold mb-2">Email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={onChange}
                placeholder="Email"
                autoComplete="email"
                className={inputClass}
              />
            </label>

            <label className="block mb-6">
              <span className="block text-sm font-semibold mb-2">Pesan</span>
              <textarea
                name="message"
                required
                rows="5"
                value={form.message}
                onChange={onChange}
                placeholder="Pesan"
                className={inputClass}
              />
            </label>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white py-3.5 rounded-xl font-semibold hover:bg-indigo-700 transition"
            >
              <FaPaperPlane />
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
