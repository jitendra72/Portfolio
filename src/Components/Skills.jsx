const Skills = () => {
  const skills = ["HTML", "CSS", "JavaScript", "React JS", "Tailwind CSS"];

  return (
    <section id="skills" className="py-28">
      <h2 className="text-5xl font-bold text-center mb-16">Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-zinc-900 px-8 py-4 rounded-full border border-zinc-700 hover:border-red-500 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
