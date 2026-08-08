import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Restaurant Management",
    image: "/restaurant.png",
    description:
      "Website untuk mengelola menu, pesanan, dan pelanggan menggunakan PHP Native dan MySQL.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "#",
    demo: "#",
  },
  {
    title: "Camping Management",
    image: "/camping.png",
    description:
      "Website CRUD alat camping dengan pencarian dan manajemen stok.",
    tech: ["PHP", "MySQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "Mobile Banking UI",
    image: "/mobilebanking.png",
    description:
      "Desain aplikasi Mobile Banking menggunakan Figma.",
    tech: ["Figma"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-16">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex gap-4 mt-6">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-xl"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="flex items-center gap-2 border border-indigo-600 text-indigo-600 px-4 py-2 rounded-xl"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;