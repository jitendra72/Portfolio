
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className="fixed w-full z-50 bg-black/30 backdrop-blur-lg"
//     >
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        
//         <h1 className="text-3xl font-bold text-red-500">
//           Portfolio
//         </h1>

//         <ul className="hidden md:flex gap-10 text-lg">

//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer hover:text-red-500"
//           >
//             Home
//           </Link>

//           <Link
//             to="about"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer hover:text-red-500"
//           >
//             About
//           </Link>

//           <Link
//             to="skills"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer hover:text-red-500"
//           >
//             Skills
//           </Link>

//           <Link
//             to="projects"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer hover:text-red-500"
//           >
//             Projects
//           </Link>

//           <Link
//             to="contact"
//             smooth={true}
//             duration={500}
//             className="cursor-pointer hover:text-red-500"
//           >
//             Contact
//           </Link>

//         </ul>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/30 backdrop-blur-lg text-white"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-5">
        
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-red-500">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500 transition"
          >
            Contact
          </Link>
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-lg flex flex-col items-center gap-6 py-6 text-lg"
        >
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-red-500"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-red-500"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-red-500"
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-red-500"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="cursor-pointer hover:text-red-500"
          >
            Contact
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;