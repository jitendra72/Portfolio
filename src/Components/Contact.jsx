const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 text-center">
      <h2 className="text-5xl font-bold mb-10">Contact Me</h2>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full max-w-xl bg-zinc-900 p-4 rounded-xl mb-5"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full max-w-xl bg-zinc-900 p-4 rounded-xl mb-5"
      />

      <textarea
        rows="5"
        placeholder="Message"
        className="w-full max-w-xl bg-zinc-900 p-4 rounded-xl"
      ></textarea>

      <br />

      <button className="bg-red-600 px-10 py-4 rounded-full mt-6">
        Send Message
      </button>
    </section>
  );
};

export default Contact;
