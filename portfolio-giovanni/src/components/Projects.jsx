import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Clock, Circle } from 'lucide-react';
import { roadmap, techStack } from '../data';

const statusConfig = {
  done: { icon: CheckCircle2, color: '#C9A84C', label: 'Selesai' },
  active: { icon: Clock, color: '#CC0000', label: 'Aktif' },
  planned: { icon: Circle, color: '#333333', label: 'Planned' },
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#CC0000] tracking-[0.2em] uppercase">05 · Projects</span>
          <span className="flex-1 h-px bg-[#1E1E1E] max-w-xs" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-syne font-black text-4xl lg:text-5xl text-[#F0F0F0] mb-14 leading-tight"
        >
          Project<br />
          <span className="text-gradient">Unggulan.</span>
        </motion.h2>

        {/* Main project card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border border-[#1E1E1E] bg-[#0C0C0C] overflow-hidden mb-4"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-8 py-4 border-b border-[#1E1E1E] bg-[#111111]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#CC0000]/60" />
                <span className="w-3 h-3 rounded-full bg-[#C9A84C]/60" />
                <span className="w-3 h-3 rounded-full bg-[#1E1E1E]" />
              </div>
              <span className="font-mono text-xs text-[#333333] ml-2">pagaska-digital-ecosystem</span>
            </div>
            <button
              onClick={() => navigate('/project/pagaska-ecosystem')}
              className="group flex items-center gap-2 font-mono text-xs text-[#888888] hover:text-[#CC0000] transition-colors"
            >
              View Detail
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: overview */}
            <div className="p-8 lg:border-r border-[#1E1E1E]">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
                <span className="font-mono text-xs text-[#CC0000] tracking-widest uppercase">Live Project</span>
              </div>

              <h3 className="font-syne font-black text-3xl lg:text-4xl text-[#F0F0F0] leading-tight mb-4">
                PAGASKA<br />Digital<br />Ecosystem
              </h3>

              <p className="font-dm text-sm text-[#888888] leading-relaxed mb-6">
                Ekosistem digital lengkap yang saya bangun untuk organisasi PAGASKA SMK Negeri 5
                Kota Madiun — mencakup website resmi, platform musik streaming, sistem AI internal,
                dan infrastruktur teknologi yang saling terkoneksi.
              </p>

              <div className="space-y-3">
                {[
                  { label: 'Role', value: 'Sole Developer & Lead Architect' },
                  { label: 'Client', value: 'PAGASKA — SMK N 5 Madiun' },
                  { label: 'Status', value: 'Active Development' },
                  { label: 'Since', value: '2024 — Present' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <span className="font-mono text-xs text-[#333333] w-16 flex-shrink-0">{label}</span>
                    <span className="w-px h-3 bg-[#1E1E1E]" />
                    <span className="font-dm text-xs text-[#888888]">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: tech stack + roadmap */}
            <div className="p-8 space-y-8">
              {/* Tech stack */}
              <div>
                <p className="font-mono text-xs text-[#CC0000] tracking-widest uppercase mb-4">Tech Stack</p>
                <div className="space-y-3">
                  {Object.entries(techStack).map(([cat, items]) => (
                    <div key={cat} className="flex items-start gap-3">
                      <span className="font-mono text-[10px] text-[#333333] uppercase w-16 flex-shrink-0 pt-1">{cat}</span>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map(item => (
                          <span key={item} className="font-mono text-[10px] px-2 py-1 bg-[#111111] border border-[#1E1E1E] text-[#555555]">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Roadmap */}
              <div>
                <p className="font-mono text-xs text-[#CC0000] tracking-widest uppercase mb-4">Roadmap</p>
                <div className="space-y-3">
                  {roadmap.map((phase) => {
                    const cfg = statusConfig[phase.status];
                    const Icon = cfg.icon;
                    return (
                      <div key={phase.phase} className="flex items-start gap-3">
                        <Icon size={14} className="flex-shrink-0 mt-0.5" style={{ color: cfg.color }} />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono text-[10px] text-[#333333]">{phase.phase}</span>
                            <span className="font-syne font-semibold text-xs" style={{ color: cfg.color }}>
                              {phase.title}
                            </span>
                            <span className="font-mono text-[9px] text-[#222222] ml-auto">{cfg.label}</span>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {phase.items.map(item => (
                              <span key={item} className="font-mono text-[9px] text-[#333333]">{item} ·</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <button
            onClick={() => navigate('/project/pagaska-ecosystem')}
            className="group font-syne font-semibold text-sm px-8 py-4 border border-[#1E1E1E] text-[#888888] hover:border-[#CC0000] hover:text-[#F0F0F0] transition-all duration-300 tracking-wider uppercase flex items-center gap-3"
          >
            Lihat Detail Project
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
