import { motion } from "framer-motion";

const Projects = () => {
  const projects = [1, 2, 3];

  return (
    <section id="projects" className="py-28 px-8">
      <h2 className="text-5xl font-bold text-center mb-20">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((item) => (
          <motion.div
            key={item}
            whileHover={{ y: -15 }}
            className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800"
          >
            <div className="h-60 bg-zinc-800"></div>

            <div className="p-6">
              <h3 className="text-2xl font-bold">Ecommerce Website</h3>

              <p className="text-gray-400 mt-4">
                Modern React & Tailwind project with responsive design.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
