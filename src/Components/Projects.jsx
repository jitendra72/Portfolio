import { motion } from "framer-motion";
import hero from "../Image/hero.jpg";
import swiggy from "../Image/swiggy.jpg";
import world from "../Image/world.jpg";
import bigrock from "../Image/bigrock.jpg";
import bgimg from "../Image/bg-img.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MechShop",
      image: hero,
      description: "Modern HTML project with responsive layout.",
      link: "https://mech-shop-tawny.vercel.app/",
    },
    {
      id: 2,
      title: "Swiggy Clone",
      image: swiggy,
      description: "Creative CSS animations and styling project.",
      link: "https://swigy-clone-gamma.vercel.app/",
    },
    {
      id: 3,
      title: "World Atlas",
      image: world,
      description: "Interactive JavaScript web application.",
      link: "https://world-atlas-beryl-theta.vercel.app/",
    },
    {
      id: 4,
      title: "Foody Zone",
      image: bgimg,
      description: "React based responsive frontend project.",
      link: "https://foody-zone-sigma.vercel.app/",
    },
    {
      id: 5,
      title: "BigRock",
      image: bigrock,
      description: "Tailwind CSS modern UI design project.",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-28 px-8 bg-black">
      <h2 className="text-5xl font-bold text-center mb-20">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((item) => (
          <motion.a
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              y: -15,
              scale: 1.03,
            }}
            transition={{ duration: 0.3 }}
            className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 block cursor-pointer"
          >
            {/* Image */}
            <div className="h-60 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-gray-400 mt-4">{item.description}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
