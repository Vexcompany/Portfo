import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '../data';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding relative">
      {/* Subtle bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0C0A0A] to-[#0A0A0A] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#CC0000] tracking-[0.2em] uppercase">02 · Experience</span>
          <span className="flex-1 h-px bg-[#1E1E1E] max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-syne font-black text-4xl lg:text-5xl leading-tight text-[#F0F0F0] mb-6">
              Peran &
              <br />
              <span className="text-[#CC0000]">Tanggung</span>
              <br />
              Jawab.
            </h2>
            <p className="font-dm text-[#888888] leading-relaxed text-base max-w-xs">
              Pengalaman organisasi yang membentuk cara saya memimpin,
              berkomunikasi, dan membangun solusi teknologi.
            </p>

            {/* Year badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-10 inline-flex items-center gap-3 border border-[#1E1E1E] px-5 py-3"
            >
              <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
              <span className="font-mono text-xs text-[#888888] tracking-widest">ACTIVE — 2025</span>
            </motion.div>
          </motion.div>

          {/* Right: timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ transformOrigin: 'top' }}
              className="absolute left-5 top-3 bottom-3 w-px bg-gradient-to-b from-[#CC0000] via-[#1E1E1E] to-transparent"
            />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                  className="relative pl-14"
                >
                  {/* Node */}
                  <div className={`absolute left-0 top-3 w-10 h-10 flex items-center justify-center border ${
                    exp.highlight
                      ? 'bg-[#CC0000] border-[#CC0000]'
                      : 'bg-[#111111] border-[#1E1E1E]'
                  }`}>
                    <span className="font-syne font-black text-[10px] text-white">
                      {exp.year.slice(2, 4)}
                    </span>
                  </div>

                  {/* Card */}
                  <div className={`p-6 border transition-all duration-300 hover:border-[#CC0000]/40 ${
                    exp.highlight
                      ? 'bg-[#110000] border-[#CC0000]/30'
                      : 'bg-[#111111] border-[#1E1E1E]'
                  }`}>
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="font-mono text-xs text-[#CC0000] tracking-widest uppercase">
                          {exp.year} · {exp.org}
                        </span>
                        <h3 className="font-syne font-bold text-[#F0F0F0] text-lg mt-1">
                          {exp.title}
                        </h3>
                      </div>
                      {exp.highlight && (
                        <span className="flex-shrink-0 font-mono text-[10px] px-2 py-1 bg-[#CC0000]/10 text-[#CC0000] border border-[#CC0000]/20 tracking-widest">
                          LEAD
                        </span>
                      )}
                    </div>
                    <p className="font-mono text-xs text-[#555555] mb-3">{exp.orgFull}</p>
                    <p className="font-dm text-sm text-[#888888] leading-relaxed">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
