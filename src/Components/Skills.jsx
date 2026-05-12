import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React JS",
    "Tailwind CSS",
  ];

  return (
    <section
      id="skills"
      className="py-28 bg-black overflow-hidden"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-center mb-20"
      >
        Skills
      </motion.h2>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-8 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -80 : 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#18181b",
              borderColor: "#ef4444",
            }}
            className="relative px-10 py-5 rounded-xl border border-zinc-700 bg-zinc-900 overflow-hidden cursor-pointer"
          >
            {/* Left Accent Line */}
            <motion.div
              whileHover={{
                height: "100%",
              }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 w-1 h-0 bg-red-500"
            />

            <span className="text-lg font-medium relative z-10">
              {skill}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;