import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TbCalendar, 
  TbClock, 
  TbUser, 
  TbChevronLeft, 
  TbBrandFacebook, 
  TbBrandTwitter, 
  TbBrandWhatsapp,
  TbCheck
} from 'react-icons/tb';
import { blogArray } from './BlogArray';

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogArray.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#142A51] mb-4">Article Not Found</h2>
        <p className="text-slate-500 mb-8 max-w-md">We couldn't find the article you were looking for.</p>
        <Link to="/blogs" className="px-6 py-3 bg-[#0195FF] text-white rounded-xl font-bold hover:bg-[#142A51] transition-colors shadow-lg">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="bg-slate-50 min-h-screen">
      
      {/* 1. Sleek Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] min-h-[350px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#142A51] via-[#142A51]/80 to-transparent mix-blend-multiply" />
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 md:px-8 relative z-10 pb-8 md:pb-12 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFBB00] text-[#142A51] font-bold text-xs uppercase tracking-wider mb-4">
              {blog.category}
            </span>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              {blog.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300 text-xs md:text-sm">
              <span className="flex items-center gap-1.5"><TbUser className="text-[#0195FF]" /> {blog.author}</span>
              <span className="hidden sm:block text-slate-500">•</span>
              <span className="flex items-center gap-1.5"><TbCalendar className="text-[#0195FF]" /> {blog.date}</span>
              <span className="hidden sm:block text-slate-500">•</span>
              <span className="flex items-center gap-1.5"><TbClock className="text-[#0195FF]" /> {blog.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Content Container (Tighter margins, sleek overlap) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 relative z-20 -mt-6 sm:-mt-8 pb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl md:rounded-3xl shadow-xl shadow-slate-200/50 p-6 sm:p-8 md:p-12 border border-slate-100"
        >
          
          {/* Top Bar: Back Link & Socials */}
          <div className="flex flex-col sm:flex-row justify-between items-center pb-6 mb-8 border-b border-slate-100 gap-4">
            <Link to="/blogs" className="flex items-center gap-2 text-slate-500 hover:text-[#0195FF] font-semibold text-sm transition-colors self-start sm:self-auto">
              <TbChevronLeft size={18} /> Back to blogs
            </Link>

            <div className="flex items-center gap-3 self-start sm:self-auto">
              <span className="text-slate-400 text-xs font-medium uppercase tracking-wider mr-2">Share:</span>
              <button className="w-8 h-8 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-[#0195FF] hover:text-white transition-colors">
                <TbBrandFacebook size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-[#0195FF] hover:text-white transition-colors">
                <TbBrandTwitter size={16} />
              </button>
              <button className="w-8 h-8 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <TbBrandWhatsapp size={16} />
              </button>
            </div>
          </div>

          {/* Article Body */}
          <div className="text-slate-600 font-light leading-relaxed text-base md:text-lg space-y-6">
            
            <p className="text-lg md:text-xl text-[#142A51] font-semibold leading-snug">
              {blog.excerpt}
            </p>

            <p>
              When your refrigerator stops working, it’s not just an inconvenience—it’s a race against time to save your groceries from spoiling. In Dubai’s climate, having a fully functional cooling system is absolutely essential for both residential homes and commercial businesses.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#142A51] mt-10 mb-4">Understanding the Core Problem</h2>
            <p>
              Many cooling issues stem from a lack of routine maintenance. Dust accumulation on condenser coils, blocked ventilation, or worn-out door seals force your compressor to work twice as hard. This not only spikes your electricity bill but significantly reduces the lifespan of the appliance.
            </p>

            {/* Blockquote Style */}
            <div className="border-l-4 border-[#0195FF] pl-6 my-8">
              <p className="text-lg md:text-xl italic text-[#142A51] font-medium m-0">
                "Regular maintenance is the key to extending the life of your commercial and residential cooling systems. Never ignore a warning sign."
              </p>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#142A51] mt-10 mb-4">Actionable Maintenance Steps</h2>
            <p>
              Before calling a professional, there are a few simple checks you can perform to ensure your refrigerator isn't just suffering from user error:
            </p>
            
            <ul className="space-y-4 my-6">
              <li className="flex items-start gap-3">
                <TbCheck className="text-[#0195FF] shrink-0 mt-1" size={20} />
                <span><strong>Check the thermostat:</strong> Ensure it hasn't been accidentally bumped to a warmer setting.</span>
              </li>
              <li className="flex items-start gap-3">
                <TbCheck className="text-[#0195FF] shrink-0 mt-1" size={20} />
                <span><strong>Clean the coils:</strong> Locate the condenser coils and gently vacuum any dust.</span>
              </li>
              <li className="flex items-start gap-3">
                <TbCheck className="text-[#0195FF] shrink-0 mt-1" size={20} />
                <span><strong>Inspect door seals:</strong> Place a piece of paper in the door. If it pulls out easily, your seals are leaking cold air.</span>
              </li>
            </ul>

            <h2 className="text-2xl md:text-3xl font-bold text-[#142A51] mt-10 mb-4">When to Call the Experts</h2>
            <p>
              If you suspect a refrigerant gas leak, hear loud mechanical clicking, or notice the compressor is hot to the touch and not running, unplug the machine immediately. These are complex issues that require certified technicians.
            </p>
          </div>

          {/* CTA Banner */}
          <div className="mt-12 bg-gradient-to-r from-[#142A51] to-[#1a3668] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
             <div>
               <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Need Professional Help?</h3>
               <p className="text-slate-300 text-sm md:text-base font-light">
                 Our Dubai-based team is ready to resolve your cooling issues fast.
               </p>
             </div>
             <Link to="/contact" className="w-full md:w-auto shrink-0">
               <button className="w-full md:w-auto px-6 py-3 bg-[#FFBB00] text-[#142A51] font-bold rounded-xl hover:bg-white transition-colors duration-300 shadow-md">
                 Contact Technicians
               </button>
             </Link>
          </div>

        </motion.div>
      </section>

    </article>
  );
}