import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

const categories = [
  {
    id: 'poster',
    label: 'Poster',
    count: 6,
    type: 'image',
    aspect: 'aspect-[3/4]',
  },
  {
    id: 'feed',
    label: 'Feed Instagram',
    count: 4,
    type: 'image',
    aspect: 'aspect-square',
  },
  {
    id: 'banner',
    label: 'Banner',
    count: 3,
    type: 'image',
    aspect: 'aspect-[16/7]',
  },
  {
    id: 'dokumentasi',
    label: 'Dokumentasi',
    count: 5,
    type: 'image',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'video',
    label: 'Video',
    count: 3,
    type: 'video',
    aspect: 'aspect-video',
  },
];

function Placeholder({ category, index }) {
  const isVideo = category.type === 'video';

  return (
    <div
      className={`group relative w-full ${category.aspect} bg-[#111111] border border-[#1E1E1E] hover:border-[#CC0000]/40 transition-all duration-300 overflow-hidden`}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-300"
        style={{
          backgroundImage: `linear-gradient(rgba(240,240,240,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(240,240,240,0.8) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        {isVideo ? (
          <div className="w-10 h-10 border border-[#1E1E1E] group-hover:border-[#CC0000]/50 flex items-center justify-center transition-colors duration-300">
            <Play size={14} className="text-[#333333] group-hover:text-[#CC0000] transition-colors duration-300 ml-0.5" />
          </div>
        ) : (
          <div className="w-8 h-8 border border-[#1E1E1E] group-hover:border-[#CC0000]/40 transition-colors duration-300" />
        )}
        <span className="font-mono text-[10px] text-[#2A2A2A] group-hover:text-[#333333] transition-colors duration-300 tracking-widest uppercase">
          {category.label} {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* Corner index */}
      <span className="absolute top-3 right-3 font-mono text-[9px] text-[#1E1E1E] group-hover:text-[#2A2A2A] transition-colors">
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  );
}

function CategoryBlock({ cat, inView, blockIndex }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 + blockIndex * 0.1 }}
      className="mb-14 last:mb-0"
    >
      {/* Category header */}
      <div className="flex items-center gap-4 mb-6">
        <h3 className="font-syne font-bold text-[#F0F0F0] text-base tracking-wide">
          {cat.label}
        </h3>
        <span className="font-mono text-[10px] text-[#333333] px-2 py-1 border border-[#1E1E1E] tracking-widest">
          {cat.count} karya
        </span>
        <span className="flex-1 h-px bg-[#1E1E1E]" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {Array.from({ length: cat.count }).map((_, i) => (
          <Placeholder key={i} category={cat} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function DesignWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="design-works" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#CC0000] tracking-[0.2em] uppercase">
            03 · Karya Desain
          </span>
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
            Karya<br />
            <span className="text-gradient">Desain.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.25 }}
            className="font-dm text-sm text-[#555555] max-w-sm leading-relaxed"
          >
            Kumpulan hasil karya yang saya buat selama menjadi Koordinator
            Publikasi, Dokumentasi, dan Dekorasi (PDD) pada organisasi sekolah.
          </motion.p>
        </div>

        {/* Categories */}
        {categories.map((cat, i) => (
          <CategoryBlock key={cat.id} cat={cat} inView={inView} blockIndex={i} />
        ))}
      </div>
    </section>
  );
}
