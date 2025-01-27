function Contact() {
    return (
      <section id="contact" className="page-section">
        <h1>Contact Me</h1>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
  
  export default Contact;
  