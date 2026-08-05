import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(240,240,240,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(240,240,240,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red gradient blob */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#CC0000] rounded-full blur-[180px] opacity-[0.06] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-[#C9A84C] rounded-full blur-[140px] opacity-[0.04] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <motion.div variants={container} initial="hidden" animate="show">

          {/* Eyebrow */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="block w-6 h-px bg-[#CC0000]" />
            <span className="font-mono text-xs text-[#888888] tracking-[0.2em] uppercase">
              Available for work · 2025
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="font-syne font-black leading-[0.95] tracking-tight mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
          >
            <span className="block text-[#F0F0F0]">GIOVANNI</span>
            <span className="block text-[#F0F0F0]">
              ADHI{' '}
              <span className="text-gradient">
                PRATAMA
              </span>
            </span>
          </motion.h1>

          {/* Role line */}
          <motion.div variants={item} className="flex items-center gap-4 mb-4">
            <div className="w-1.5 h-8 bg-[#CC0000]" />
            <p className="font-syne font-semibold text-xl lg:text-2xl text-[#888888] tracking-wide">
              Content Creator & Web Developer
            </p>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="font-dm text-base lg:text-lg text-[#555555] max-w-xl leading-relaxed mb-12 ml-5"
          >
            Siswa SMK jurusan TKJ yang membangun ekosistem digital
            untuk komunitas — dari desain brand hingga platform AI.
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('portfolio')}
              className="group font-syne font-semibold text-sm px-8 py-4 bg-[#F0F0F0] text-[#0A0A0A] hover:bg-[#CC0000] hover:text-white transition-all duration-300 tracking-wider uppercase"
            >
              View Portfolio
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="font-syne font-semibold text-sm px-8 py-4 border border-[#1E1E1E] text-[#888888] hover:border-[#CC0000] hover:text-[#F0F0F0] transition-all duration-300 tracking-wider uppercase"
            >
              Contact Me
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={item}
            className="mt-20 pt-10 border-t border-[#1E1E1E] flex flex-wrap gap-12"
          >
            {[
              { num: '4+', label: 'Digital Projects' },
              { num: '2', label: 'Org Roles' },
              { num: '6+', label: 'Tech Stacks' },
              { num: '1', label: 'Active Ecosystem' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p className="font-syne font-black text-3xl lg:text-4xl text-[#F0F0F0]">{num}</p>
                <p className="font-dm text-xs text-[#555555] mt-1 tracking-wide">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-transparent to-[#CC0000]"
        />
        <span className="font-mono text-[10px] text-[#333333] tracking-widest uppercase">scroll</span>
      </motion.div>
    </section>
  );
}
