

// import { motion } from "framer-motion";

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
//           <li className="hover:text-red-500 cursor-pointer">Home</li>
//           <li className="hover:text-red-500 cursor-pointer">About</li>
//           <li className="hover:text-red-500 cursor-pointer">Skills</li>
//           <li className="hover:text-red-500 cursor-pointer">Projects</li>
//           <li className="hover:text-red-500 cursor-pointer">Contact</li>
//         </ul>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/30 backdrop-blur-lg"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">
        
        <h1 className="text-3xl font-bold text-red-500">
          Portfolio
        </h1>

        <ul className="hidden md:flex gap-10 text-lg">

          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Home
          </Link>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            About
          </Link>

          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Skills
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-red-500"
          >
            Contact
          </Link>

        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;