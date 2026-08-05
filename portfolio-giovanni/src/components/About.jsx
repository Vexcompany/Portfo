import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const focuses = [
  { label: 'Design', desc: 'Visual identity dan sistem desain yang konsisten', icon: '✦' },
  { label: 'Web Dev', desc: 'Frontend modern dengan React dan tooling terkini', icon: '◈' },
  { label: 'Branding', desc: 'Membangun identitas digital yang kuat dan berkarakter', icon: '◆' },
  { label: 'AI Engineering', desc: 'Sistem AI multi-provider untuk kebutuhan komunitas', icon: '◎' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#CC0000] tracking-[0.2em] uppercase">01 · About</span>
          <span className="flex-1 h-px bg-[#1E1E1E] max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-syne font-black text-4xl lg:text-5xl leading-tight text-[#F0F0F0] mb-8"
            >
              Membangun
              <br />
              <span className="text-gradient">digital masa depan</span>
              <br />
              untuk generasi
              <br />
              berikutnya.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-4 font-dm text-[#888888] leading-relaxed text-base"
            >
              <p>
                Saya <span className="text-[#F0F0F0] font-medium">Giovanni Adhi Pratama</span>, siswa
                SMK Negeri 5 Kota Madiun jurusan Teknik Komputer dan Jaringan (TKJ).
              </p>
              <p>
                Saya percaya bahwa teknologi bukan sekadar alat, melainkan jembatan yang menghubungkan
                organisasi dengan audiensnya. Itulah mengapa saya membangun{' '}
                <span className="text-[#F0F0F0] font-medium">ekosistem digital</span> — bukan sekadar
                website tunggal.
              </p>
              <p>
                Tujuan saya sederhana: membantu komunitas dan generasi berikutnya memasuki era digital
                melalui desain yang bermakna dan teknologi yang berkelanjutan.
              </p>
            </motion.div>

            {/* Gold accent line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              style={{ transformOrigin: 'left' }}
              className="mt-8 h-px bg-gradient-to-r from-[#C9A84C] to-transparent"
            />

            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 pl-4 border-l-2 border-[#C9A84C] font-syne font-medium text-[#C9A84C] text-sm italic"
            >
              "Desain bukan tentang bagaimana sesuatu terlihat. Ini tentang bagaimana sesuatu bekerja."
            </motion.blockquote>
          </div>

          {/* Right: focus cards */}
          <div className="grid grid-cols-2 gap-4">
            {focuses.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
                whileHover={{ y: -4, borderColor: 'rgba(204,0,0,0.4)' }}
                className="group p-6 bg-[#111111] border border-[#1E1E1E] transition-all duration-300"
              >
                <span className="block text-[#CC0000] text-xl mb-4 group-hover:scale-110 transition-transform duration-200 origin-left">
                  {f.icon}
                </span>
                <h3 className="font-syne font-bold text-[#F0F0F0] text-base mb-2">{f.label}</h3>
                <p className="font-dm text-xs text-[#555555] leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}

            {/* SMK badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="col-span-2 p-6 border border-[#1E1E1E] bg-gradient-to-br from-[#0F0F0F] to-[#111111]"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#CC0000] flex items-center justify-center flex-shrink-0">
                  <span className="font-syne font-black text-white text-sm">SMK</span>
                </div>
                <div>
                  <p className="font-syne font-semibold text-[#F0F0F0] text-sm">SMK Negeri 5 Kota Madiun</p>
                  <p className="font-mono text-xs text-[#555555] mt-1">Teknik Komputer & Jaringan (TKJ)</p>
                  <p className="font-mono text-xs text-[#CC0000] mt-1">Class of 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
