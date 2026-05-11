import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl top-0 left-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="text-center z-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-2xl"
        >
          Hello I'm
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-7xl md:text-9xl font-extrabold mt-4"
        >
          JITENDRA
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 text-xl mt-6"
        >
          Frontend Developer • React Developer • UI Designer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-10"
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px #ef4444",
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-red-600 px-8 py-4 rounded-full font-semibold"
          >
            Hire Me
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              borderColor: "#ef4444",
            }}
            className="border border-gray-500 px-8 py-4 rounded-full"
          >
            Download CV
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="flex justify-center gap-6 mt-12 text-3xl"
        >
          <motion.a whileHover={{ scale: 1.3, color: "#ef4444" }}>
            <FaGithub />
          </motion.a>

          <motion.a whileHover={{ scale: 1.3, color: "#ef4444" }}>
            <FaLinkedin />
          </motion.a>

          <motion.a whileHover={{ scale: 1.3, color: "#ef4444" }}>
            <FaInstagram />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
