import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaImage } from "react-icons/fa";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/profile";

function ProjectImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="h-52 sm:h-56 w-full bg-gradient-to-br from-indigo-100 to-blue-100 flex items-center justify-center text-indigo-300 text-5xl"
      >
        <FaImage />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-52 sm:h-56 w-full object-cover object-top group-hover:scale-105 transition duration-500"
    />
  );
}

function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionTitle eyebrow="Karya">My Projects</SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="overflow-hidden">
                <ProjectImage src={project.image} alt={project.title} />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h3>

                <p className="text-slate-600 leading-7">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-medium hover:bg-indigo-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
