import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, GitBranch, AtSign, Send, MapPin } from 'lucide-react';

const socials = [
  { icon: Mail, label: 'Email', value: 'giovanni@vex.web.id', href: 'mailto:giovanni@vex.web.id' },
  { icon: GitBranch, label: 'GitHub', value: 'github.com/Vexcompany', href: 'https://github.com/Vexcompany' },
  { icon: AtSign, label: 'Instagram', value: '@giovanni.adhi', href: '#' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate send
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-6 lg:px-12" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="font-mono text-xs text-[#CC0000] tracking-[0.2em] uppercase">06 · Contact</span>
          <span className="flex-1 h-px bg-[#1E1E1E] max-w-xs" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="font-syne font-black text-4xl lg:text-6xl text-[#F0F0F0] leading-tight mb-6"
            >
              Mari
              <br />
              <span className="text-gradient-red">Berkolaborasi.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-dm text-[#888888] leading-relaxed mb-10 max-w-sm"
            >
              Saya terbuka untuk peluang kerja, kolaborasi project, atau sekadar
              berdiskusi tentang teknologi dan desain.
            </motion.p>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8 text-[#555555]"
            >
              <MapPin size={14} className="text-[#CC0000]" />
              <span className="font-mono text-xs">Madiun, Jawa Timur, Indonesia</span>
            </motion.div>

            {/* Socials */}
            <div className="space-y-3">
              {socials.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                    className="group flex items-center gap-4 p-4 border border-[#1E1E1E] hover:border-[#CC0000]/40 bg-[#111111] hover:bg-[#0F0000] transition-all duration-300"
                  >
                    <div className="w-8 h-8 flex items-center justify-center border border-[#1E1E1E] group-hover:border-[#CC0000]/40 transition-colors">
                      <Icon size={14} className="text-[#888888] group-hover:text-[#CC0000] transition-colors" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-[#333333] uppercase tracking-widest">{s.label}</p>
                      <p className="font-dm text-sm text-[#888888] group-hover:text-[#F0F0F0] transition-colors">{s.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="border border-[#1E1E1E] p-8 bg-[#111111]"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <div className="w-12 h-12 bg-[#CC0000]/10 border border-[#CC0000]/30 flex items-center justify-center mb-4">
                  <Send size={20} className="text-[#CC0000]" />
                </div>
                <h3 className="font-syne font-bold text-[#F0F0F0] text-xl mb-2">Pesan Terkirim!</h3>
                <p className="font-dm text-sm text-[#888888]">Terima kasih. Saya akan segera merespons.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="font-mono text-[10px] text-[#333333] uppercase tracking-widest block mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                    className="w-full bg-[#0A0A0A] border border-[#1E1E1E] text-[#F0F0F0] font-dm text-sm px-4 py-3 focus:outline-none focus:border-[#CC0000]/50 transition-colors placeholder-[#333333]"
                    placeholder="Nama lengkap Anda"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-[#333333] uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                    className="w-full bg-[#0A0A0A] border border-[#1E1E1E] text-[#F0F0F0] font-dm text-sm px-4 py-3 focus:outline-none focus:border-[#CC0000]/50 transition-colors placeholder-[#333333]"
                    placeholder="email@anda.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] text-[#333333] uppercase tracking-widest block mb-2">
                    Pesan
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-[#0A0A0A] border border-[#1E1E1E] text-[#F0F0F0] font-dm text-sm px-4 py-3 focus:outline-none focus:border-[#CC0000]/50 transition-colors placeholder-[#333333] resize-none"
                    placeholder="Halo Giovanni, saya ingin..."
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full font-syne font-semibold text-sm py-4 bg-[#CC0000] hover:bg-[#E50000] text-white transition-all duration-300 tracking-wider uppercase flex items-center justify-center gap-3"
                >
                  Kirim Pesan
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
