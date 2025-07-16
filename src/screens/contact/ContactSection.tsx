'use client';
import React, { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Spotlight } from '../../components/ui/Spotlight';
import Navbar from "@/components/ui/resizable-navbar";

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[linear-gradient(60deg,#100f2e,#0f0029)]">
      <Navbar />
      {/* Grid background */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(circle_at_center,rgba(255,255,255,1)_0%,rgba(255,255,255,0.2)_40%,transparent_70%)] [mask-repeat:no-repeat] [mask-size:100%_100%] z-0" />
      {/* Spotlights */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" fillOpacity={0.2} />
      <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" fillOpacity={0.2} />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" fillOpacity={0.2} />
      <div className="relative z-10 flex items-center justify-center w-full">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Contact Me</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-center text-[#cccccc] py-8">Thank you for reaching out!</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[#cccccc] mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#18122B] border border-[#6971a2]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#916be7]"
                  />
                </div>
                <div>
                  <label className="block text-[#cccccc] mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-[#18122B] border border-[#6971a2]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#916be7]"
                  />
                </div>
                <div>
                  <label className="block text-[#cccccc] mb-1">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-[#18122B] border border-[#6971a2]/40 text-white focus:outline-none focus:ring-2 focus:ring-[#916be7]"
                  />
                </div>
                <CardFooter className="justify-end p-0">
                  <Button type="submit" className="px-6 py-2 rounded-[14px] bg-[linear-gradient(90deg,rgba(22,26,49,1)_0%,rgba(6,9,31,1)_100%)] text-white text-base font-medium tracking-[-0.48px] leading-[21.6px] h-auto">
                    Send
                  </Button>
                </CardFooter>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection; 