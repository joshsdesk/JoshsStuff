import { motion } from "framer-motion";

const projects = [
  {
    title: "Project 1",
    description: "A cool project built with React.",
    image: "/assets/images/project1.png", // Replace with your image paths
    link: "#",
  },
  {
    title: "Project 2",
    description: "An innovative app designed with CSS and JavaScript.",
    image: "/assets/images/project2.png",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A graphic design project with a modern aesthetic.",
    image: "/assets/images/project3.png",
    link: "#",
  },
];

function Portfolio() {
  return (
    <motion.section
      id="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>My Work</h1>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="portfolio-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image} alt={project.title} />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Portfolio;
