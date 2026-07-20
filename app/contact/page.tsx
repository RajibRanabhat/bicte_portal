"use client";

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=abcampus@gmail.com&su=${encodeURIComponent(
    form.subject || "Website Enquiry"
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;
  window.open(gmailCompose, "_blank");
};

  const inputClass =
    "mt-1 w-full rounded-md border border-stone/20 bg-white px-4 py-2 text-sm text-stone outline-none focus:border-primary";

  return (
    <>
      <PageHeader
      image="/campus.jpg"
      title="Contact Us"
      subtitle="Get in touch with the BICTE department at Aadikavi Bhanubhakta Campus"
    />

      {/* Contact Info Cards */}
      <section className="bg-white py-16">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-lg border border-stone/10 bg-gray-50 p-6 text-center">
                <MapPin className="mx-auto h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-navy">Address</h3>
                <p className="mt-1 text-sm text-stone">
                  Vyas-1, Damauli, Tanahun, Gandaki Province, Nepal
                </p>
              </div>
              <div className="rounded-lg border border-stone/10 bg-gray-50 p-6 text-center">
                <Mail className="mx-auto h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-navy">Email</h3>
                <p className="mt-1 text-sm text-stone">abcampus@gmail.com</p>
              </div>
              <div className="rounded-lg border border-stone/10 bg-gray-50 p-6 text-center">
                <Phone className="mx-auto h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold text-navy">Phone</h3>
                <p className="mt-1 text-sm text-stone">065-590096</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Form + Map */}
      <section className="bg-gray-50 py-16">
        <Reveal>
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* Form */}
              <div>
                <h2 className="text-2xl font-bold text-navy">
                  Send a Message
                </h2>
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-stone">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone">
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <button
                    type="submit"
                    className="cursor-pointer rounded-md bg-crimson px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-crimson-dark"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Map */}
              <div className="h-80 w-full overflow-hidden rounded-lg shadow-md md:h-full">
                <iframe
                  title="Aadikavi Bhanubhakta Campus Location"
                  src="https://www.google.com/maps?q=Aadikavi+Bhanubhakta+Campus,+Damauli,+Tanahun&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}