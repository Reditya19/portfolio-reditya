import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/profile";

function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionTitle eyebrow="Perjalanan">Experience</SectionTitle>

        <ol className="relative border-l-2 border-indigo-100 ml-3 space-y-8">
          {experiences.map((item) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative pl-6 sm:pl-8"
            >
              <span className="absolute -left-[9px] top-7 h-4 w-4 rounded-full bg-indigo-600 ring-4 ring-white" />

              <div className="bg-slate-50 border border-slate-100 p-6 sm:p-7 rounded-2xl hover:shadow-lg hover:bg-white transition">
                <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-600">
                  {item.year}
                </span>

                <h3 className="text-lg sm:text-xl font-bold mt-3">{item.title}</h3>

                <p className="text-slate-600 mt-3 leading-7">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
