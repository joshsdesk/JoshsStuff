import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Contact Me</h1>
      <motion.form
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.input
          type="text"
          placeholder="Your Name"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          whileFocus={{ scale: 1.05 }}
        />
        <motion.textarea
          placeholder="Your Message"
          rows="5"
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
      <motion.div
        className="social-links"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <a href="https://github.com/josh" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/josh" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="mailto:joshsdesk@gmail.com" target="_blank" rel="noreferrer">
          Email
        </a>
      </motion.div>
    </motion.section>
  );
}

export default Contact; 
