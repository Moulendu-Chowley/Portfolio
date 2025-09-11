"use client";

import { Button } from "@/components/shared/Button";
import Navbar from "@/components/ui/resizable-navbar";
import { sendEmail } from "@/lib/emailService";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Form data:", form);

      // Send email using EmailJS
      await sendEmail(form);

      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error("Email error:", err);

      let errorMessage =
        "Failed to send message. Please try again or email me directly at moulendu25@gmail.com";

      if (err instanceof Error) {
        console.error("Error details:", err.message);
        if (err.message.includes("configuration is incomplete")) {
          errorMessage =
            "Email service is not configured properly. Please contact me directly at moulendu25@gmail.com";
        } else if (err.message.includes("EmailJS")) {
          errorMessage = `Email service error: ${err.message}`;
        }
      }

      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/moulendu-chowley",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    },
    {
      name: "GitHub",
      url: "https://github.com/Moulendu-Chowley",
      icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000319] text-white relative overflow-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4F46E5]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#4F46E5]/5 to-[#7C3AED]/5 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 pt-24 px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#A5B4FC] to-[#C4B5FD] bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-[#bcb9d1] max-w-2xl mx-auto leading-relaxed">
              Have a project in mind or just want to chat? I&apos;d love to hear
              from you. Send me a message and I&apos;ll get back to you as soon
              as possible.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-[#0A0A2A]/30 border border-[#1A1A3A] rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6">Send me a message</h2>

                {success && (
                  <motion.div
                    className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    ✅ Message sent successfully! I&apos;ll get back to you
                    soon.
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    ❌ {error}
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#A5B4FC] mb-2 text-sm font-medium">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#1A1A3A]/50 border border-[#2A2A5A] text-white placeholder-[#666] focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A5B4FC] mb-2 text-sm font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-[#1A1A3A]/50 border border-[#2A2A5A] text-white placeholder-[#666] focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#A5B4FC] mb-2 text-sm font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-[#1A1A3A]/50 border border-[#2A2A5A] text-white placeholder-[#666] focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-[#A5B4FC] mb-2 text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-[#1A1A3A]/50 border border-[#2A2A5A] text-white placeholder-[#666] focus:outline-none focus:border-[#4F46E5] focus:ring-1 focus:ring-[#4F46E5] transition-all duration-300 resize-none"
                      placeholder="Tell me about your project or just say hi..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 text-lg bg-[#4F46E5] hover:bg-[#4338CA] border-[#4F46E5] hover:border-[#4338CA] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {loading ? (
                      <div className="flex items-center justify-center gap-3">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              className="order-1 lg:order-2 space-y-8"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Contact Info */}
              <div className="bg-[#0A0A2A]/30 border border-[#1A1A3A] rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Let&apos;s connect!</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#4F46E5]/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#A5B4FC]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#A5B4FC] font-medium">Email</p>
                      <p className="text-[#bcb9d1]">moulendu25@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#4F46E5]/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#A5B4FC]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#A5B4FC] font-medium">Location</p>
                      <p className="text-[#bcb9d1]">Available Worldwide</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#4F46E5]/20 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-[#A5B4FC]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#A5B4FC] font-medium">
                        Response Time
                      </p>
                      <p className="text-[#bcb9d1]">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-[#0A0A2A]/30 border border-[#1A1A3A] rounded-2xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6">Follow me</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-[#1A1A3A]/50 border border-[#2A2A5A] rounded-lg hover:border-[#4F46E5] hover:bg-[#4F46E5]/10 transition-all duration-300 group"
                    >
                      <svg
                        className="w-5 h-5 text-[#A5B4FC] group-hover:text-[#4F46E5] transition-colors duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d={social.icon} />
                      </svg>
                      <span className="text-[#bcb9d1] group-hover:text-white transition-colors duration-300 font-medium">
                        {social.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
