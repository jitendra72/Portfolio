import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Heading Animation */}
      <motion.h2
        initial={{
          opacity: 0,
          y: -60,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: true }}
        className="text-5xl font-bold mb-10 text-center"
      >
        About Me
      </motion.h2>

      {/* Paragraph Animation */}
      <motion.p
        initial={{
          opacity: 0,
          y: 80,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.2,
        }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.02,
        }}
        className="text-gray-400 text-lg leading-9 text-center bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-red-500 transition-all duration-300"
      >
        I'm a passionate Frontend Developer specializing in React JS,
        Tailwind CSS and modern UI animations. I create responsive and
        professional websites with smooth user experience.
      </motion.p>
    </section>
  );
};

export default About;