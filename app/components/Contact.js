"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Error occurred. Try again later.");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold text-gray-900">Contact Info</h2>
          <p className="text-gray-600">
            Feel free to reach out to me using the info below or send a message
            using the form.
          </p>

          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <MapPin /> Address: Muktijodha Sarani, Azampur, Uttara, Dhaka,
              Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <Mail /> Email: jibananando.pramanik@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <Phone /> Phone: +880 1764 637730
            </p>
          </div>

          <div className="flex items-center gap-4 mt-4 text-gray-700">
            <a
              href="https://linkedin.com/in/jibananando"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} className="hover:text-blue-600 transition" />
            </a>
            <a
              href="https://github.com/jibananando"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} className="hover:text-gray-900 transition" />
            </a>
            <a
              href="https://twitter.com/jibananando"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter size={24} className="hover:text-blue-400 transition" />
            </a>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            {status && <p className="mt-2 text-gray-600">{status}</p>}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
