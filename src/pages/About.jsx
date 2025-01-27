import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      className="page-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Hi, I’m Josh! I’m a passionate developer with experience in web
        development, React, and more. I love building modern, interactive, and
        user-friendly web experiences.
      </motion.p>
      <motion.img
        src="/assets/images/profile.png" // Use your profile image from the old portfolio
        alt="Profile"
        className="profile-img"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 50 }}
      />
    </motion.section>
  );
}

export default About;
