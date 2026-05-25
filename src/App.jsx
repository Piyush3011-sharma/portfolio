import { motion } from "framer-motion";

export default function PortfolioWebsite() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Python",
    "Java (Basic)",
    "DSA (Ongoing)",
  ];

  const projects = [
    {
      title: "Hospital Management System",
      tech: "Python",
      desc: "CRUD-based system to manage patients, doctors, and records.",
      
    },
    {
      title: "Quiz Web App",
      tech: "HTML, CSS, JavaScript",
      desc: "Interactive quiz platform with scoring system.",
    },
    {
      title: "Zomato Clone",
      tech: "HTML, CSS",
      desc: "Frontend clone focusing on layout accuracy.",
    },
    {
      title: "Spotify Clone",
      tech: "HTML, CSS, JavaScript",
      desc: "Music UI clone with modern layout and interactions.",
    },
  ];

  const education = [
    {
      title: "B.Tech Computer Science",
      place: "Accurate Institute Of Management And Technology (AKTU)",
      year: "2023 - 2026",
    },
    {
      title: "Higher Secondary (12th)",
      place: "Ram-Eesh International School",
      year: "Completed",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* NAV */}
<div className="flex justify-between items-center px-8 py-5 border-b border-gray-800">
  <h1 className="text-xl font-bold">Piyush.dev</h1>

  <div className="flex gap-6 text-sm text-gray-300 items-center">
    {["about", "skills", "projects", "contact"].map((item) => (
      <a
        key={item}
        href={`#${item}`}
        className="hover:text-white transition"
      >
        {item.toUpperCase()}
      </a>
    ))}

    {/* RESUME BUTTON */}
    <a
      href="/ResumePiyush.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-1 border border-white rounded-full hover:bg-white hover:text-black transition"
    >
      RESUME
    </a>
  </div>
</div>

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-center py-24 px-6"
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-[0_0_15px_white]">
          Piyush Sharma
        </h1>

        <p className="text-gray-400 max-w-xl mx-auto">
          Aspiring Full Stack Developer | React.js | Python | DSA Learner | JAVA
        </p>

        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#contact"
            className="px-6 py-2 bg-white text-black rounded-full 
            hover:scale-110 hover:shadow-[0_0_20px_white] transition duration-300"
          >
            Contact Me
          </a>

          <a
            href="#projects"
            className="px-6 py-2 border border-gray-600 rounded-full 
            hover:scale-110 hover:shadow-[0_0_15px_gray] transition duration-300"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      {/* ABOUT */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-10"
      >
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 leading-relaxed">
          I’m a Computer Science student passionate about web development, problem solving, and building clean user experiences. I enjoy turning ideas into responsive and functional projects while continuously learning modern technologies and improving my skills. Currently focused on Full Stack development, Java, DSA, React, and creating projects that combine creativity with practical functionality.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        id="skills"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-10"
      >
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-900 border border-gray-800 rounded-full 
              hover:scale-110 hover:shadow-[0_0_10px_white] transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 py-10"
      >
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-2xl border border-gray-800 
              hover:scale-105 hover:shadow-[0_0_25px_white] transition duration-300"
            >
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-gray-400">{p.tech}</p>
              <p className="text-gray-300 text-sm mt-2">{p.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-6 py-10"
      >
        <h2 className="text-2xl font-semibold mb-6">Education</h2>

        <div className="space-y-4">
          {education.map((e, i) => (
            <div
              key={i}
              className="p-4 bg-gray-900 border border-gray-800 rounded-xl 
              hover:scale-[1.03] transition"
            >
              <h3 className="font-semibold">{e.title}</h3>
              <p className="text-gray-400 text-sm">{e.place}</p>
              <p className="text-gray-500 text-sm">{e.year}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center py-16 border-t border-gray-800"
      >
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>

        <p className="text-gray-400 mb-6">
          Let's connect and build something great together.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          
          <a
  href= "mailto:piyushsharma1357924680@gmail.com?subject=Portfolio%20Contact&body=Hi%20Piyush,%20I%20visited%20your%20portfolio"
  className="px-6 py-2 bg-white text-black rounded-full 
  hover:scale-110 hover:shadow-[0_0_20px_white] transition duration-300"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/piyush-sharma-444049299/"
            target="_blank"
            className="px-6 py-2 border border-gray-600 rounded-full 
            hover:scale-110 hover:shadow-[0_0_15px_white] transition duration-300"
          >
            LinkedIn
          </a>

        </div>
      </motion.section>

      {/* FOOTER */}
      <div className="text-center py-6 text-gray-500 border-t border-gray-800">
        © 2026 Piyush Sharma.
      </div>

    </div>
  );
}