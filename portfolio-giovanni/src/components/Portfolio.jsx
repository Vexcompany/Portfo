import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { portfolioItems } from '../data';

const categoryColors = {
  'Web Development': '#CC0000',
  'Full Stack App': '#C9A84C',
  'AI Engineering': '#4C6CC9',
  'Branding': '#C9A84C',
};

export default function Portfolio() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const navigate = useNavigate();

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#CC0000] tracking-[0.2em] uppercase">04 · Portfolio</span>
          <span className="flex-1 h-px bg-[#1E1E1E] max-w-xs" />
        </motion.div>

        {/* Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="font-syne font-black text-4xl lg:text-5xl text-[#F0F0F0] leading-tight"
          >
            Karya &<br />
            <span className="text-gradient">Hasil Kerja.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="font-dm text-[#555555] text-sm max-w-xs leading-relaxed"
          >
            Klik setiap karya untuk melihat detail lengkap, proses, dan teknologi yang digunakan.
          </motion.p>
        </div>

        {/* Featured 2 top */}
        <div className="grid lg:grid-cols-2 gap-4 mb-4">
          {portfolioItems.filter(p => p.featured).map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} inView={inView} navigate={navigate} large />
          ))}
        </div>

        {/* Remaining bottom */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {portfolioItems.filter(p => !p.featured).map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i + 2} inView={inView} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({ item, index, inView, navigate, large }) {
  const color = categoryColors[item.category] || '#CC0000';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onClick={() => navigate(`/portfolio/${item.id}`)}
      className="group relative overflow-hidden bg-[#111111] border border-[#1E1E1E] hover:border-[#CC0000]/40 transition-all duration-500 cursor-pointer"
      style={{ minHeight: large ? '320px' : '240px' }}
    >
      {/* BG gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(rgba(240,240,240,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(240,240,240,0.8) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      />

      {/* Color accent top */}
      <div
        className="absolute top-0 left-0 right-0 h-px transition-all duration-300"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />

      <div className="relative p-8 h-full flex flex-col justify-between">
        {/* Top row */}
        <div className="flex items-start justify-between">
          <div>
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 border"
              style={{ color, borderColor: `${color}33`, background: `${color}11` }}
            >
              {item.category}
            </span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 border border-[#1E1E1E] group-hover:border-[#CC0000] flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ArrowUpRight size={14} className="text-[#CC0000]" />
          </motion.div>
        </div>

        {/* Bottom row */}
        <div>
          <p className="font-mono text-xs text-[#333333] mb-2">{item.year}</p>
          <h3 className="font-syne font-black text-[#F0F0F0] text-xl lg:text-2xl leading-tight mb-3 group-hover:text-white transition-colors">
            {item.title}
          </h3>
          <p className="font-dm text-sm text-[#555555] leading-relaxed group-hover:text-[#888888] transition-colors line-clamp-2">
            {item.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map(tag => (
              <span key={tag} className="font-mono text-[10px] text-[#333333] group-hover:text-[#555555] transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
