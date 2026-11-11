import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { profile } from "../data/profile";

const socials = [
  { icon: FaGithub, label: "GitHub", url: profile.github.url },
  { icon: FaLinkedin, label: "LinkedIn", url: profile.linkedin.url },
  { icon: FaInstagram, label: "Instagram", url: profile.instagram.url },
];

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10 text-center px-5">
      <h2 className="text-2xl font-bold text-white mb-4">Reditya Portfolio</h2>

      <div className="flex justify-center gap-4 mb-5 text-xl">
        {socials.map(({ icon: Icon, label, url }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="p-2.5 rounded-full bg-slate-800 hover:bg-indigo-600 hover:text-white transition"
          >
            <Icon />
          </a>
        ))}
      </div>

      <p className="text-sm">
        © {new Date().getFullYear()} {profile.fullName}. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
