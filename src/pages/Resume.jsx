import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Resume</h1>
      <motion.a
        href="/assets/pdfs/resume.pdf" // Adjust the path based on your folder structure
        download="Josh_Resume"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          display: "inline-block",
          padding: "1rem 2rem",
          margin: "1rem 0",
          fontSize: "1rem",
          fontWeight: "bold",
          textDecoration: "none",
          color: "#fff",
          backgroundColor: "#646cff",
          borderRadius: "5px",
          transition: "transform 0.3s ease",
        }}
      >
        Download Resume
      </motion.a>
      <h2>Proficiencies</h2>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          listStyle: "none",
          padding: 0,
          margin: "1rem 0",
          textAlign: "left",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {["HTML", "CSS", "JavaScript", "React", "Git"].map((skill, index) => (
          <motion.li
            key={index}
            whileHover={{ scale: 1.1 }}
            style={{
              padding: "0.5rem 0",
              fontSize: "1.2rem",
              color: "#fff",
              backgroundColor: "#1a1a1a",
              borderRadius: "5px",
              marginBottom: "0.5rem",
              textAlign: "center",
            }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

export default Resume;
