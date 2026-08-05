import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../data';

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#CC0000] tracking-[0.2em] uppercase">03 · Skills</span>
          <span className="flex-1 h-px bg-[#1E1E1E] max-w-xs" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="font-syne font-black text-4xl lg:text-5xl text-[#F0F0F0] mb-14 leading-tight"
        >
          Stack &
          <br />
          <span className="text-gradient">Kemampuan.</span>
        </motion.h2>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -3 }}
              className="group p-6 bg-[#111111] border border-[#1E1E1E] hover:border-[#CC0000]/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[#CC0000] text-lg">{skill.icon}</span>
                <h3 className="font-syne font-bold text-[#F0F0F0] text-sm tracking-wide uppercase">
                  {skill.category}
                </h3>
              </div>

              {/* Top separator */}
              <div className="w-full h-px bg-[#1E1E1E] mb-5 group-hover:bg-[#CC0000]/20 transition-colors duration-300" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-xs text-[#888888] px-3 py-1.5 bg-[#0A0A0A] border border-[#1E1E1E] hover:border-[#CC0000]/40 hover:text-[#F0F0F0] transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
