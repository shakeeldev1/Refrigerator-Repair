import React from 'react';
import { motion } from 'framer-motion';
import {
  TbPhone,
  TbMail,
  TbMapPin,
  TbBrandFacebook,
  TbBrandTwitter,
  TbBrandInstagram,
  TbBrandWhatsapp
} from 'react-icons/tb';

export default function ContactFormSection() {
  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10">

       
       {/* BOTTOM ROW: Form & Map/Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT: Get In Touch Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#142A51] p-6 rounded-3xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-3">Get In Touch !</h3>
            <p className="text-slate-300 font-light text-sm mb-8">
              Fill out the form below to request a service callback or ask a question about your appliance.
            </p>

            <form className="flex flex-col gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-transparent border border-slate-500/50 text-white placeholder-slate-400 px-5 py-3.5 rounded-xl outline-none focus:border-[#FFBB00] transition-colors"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border border-slate-500/50 text-white placeholder-slate-400 px-5 py-3.5 rounded-xl outline-none focus:border-[#FFBB00] transition-colors"
                  required
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full bg-transparent border border-slate-500/50 text-white placeholder-slate-400 px-5 py-3.5 rounded-xl outline-none focus:border-[#FFBB00] transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="self-start mt-2 px-4 py-2.5 bg-[#FFBB00] text-[#142A51]  cursor-pointer text-sm rounded-xl hover:bg-white transition-colors duration-300 shadow-md"
              >
                Submit Request
              </button>
            </form>
          </motion.div>

          {/* RIGHT: Map & Social Media */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h3 className="text-2xl font-bold text-[#142A51] mb-3">Our Location</h3>
            <p className="text-slate-500 font-light text-sm mb-6">
              We operate across central and northern Dubai. View our primary service hub on the map below.
            </p>

            {/* Map Frame */}
            <div className="w-full h-[250px] md:h-[300px] rounded-2xl overflow-hidden border border-slate-200 mb-8 shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.63936996918!2d55.19163016462712!3d25.263590488661796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dubai Map Location"
              ></iframe>
            </div>

            {/* Social Media */}
            <h3 className="text-xl font-bold text-[#142A51] mb-4">Social Media</h3>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#142A51] text-white flex items-center justify-center hover:bg-[#0195FF] transition-colors">
                <TbBrandFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#142A51] text-white flex items-center justify-center hover:bg-[#0195FF] transition-colors">
                <TbBrandTwitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#142A51] text-white flex items-center justify-center hover:bg-[#0195FF] transition-colors">
                <TbBrandInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition-colors shadow-md">
                <TbBrandWhatsapp size={20} />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}