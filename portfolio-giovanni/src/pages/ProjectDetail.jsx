import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Clock, Circle, Zap, Target, User, Layers } from 'lucide-react';
import { techStack, roadmap, personalProjects } from '../data';
import Footer from '../components/Footer';

const statusConfig = {
  done: { icon: CheckCircle2, color: '#C9A84C', label: 'Selesai', bg: 'bg-[#6B5A2A]/20 border-[#C9A84C]/20' },
  active: { icon: Clock, color: '#CC0000', label: 'Aktif', bg: 'bg-[#3D0000]/30 border-[#CC0000]/30' },
  planned: { icon: Circle, color: '#333333', label: 'Planned', bg: 'bg-transparent border-[#1E1E1E]' },
};

const modules = [
  { name: 'PAGASKA Website', desc: 'Website resmi organisasi. React + Vite + TailwindCSS. Deployed di Vercel.', status: 'live' },
  { name: 'Zephyrus Music', desc: 'Platform streaming musik internal. Supabase + Cloudflare R2 + PWA support.', status: 'live' },
  { name: 'Taksaka AI', desc: 'Sistem AI multi-provider. OpenRouter integration + health tracking + cooldown management.', status: 'live' },
  { name: 'Vero Git Manager', desc: 'Telegram bot untuk manajemen Git repository via mobile. Node.js + Pterodactyl.', status: 'live' },
  { name: 'PAGASKA REST API', desc: 'API modular dengan auto-loading architecture, Telegram rate-limit notif, dan AI auto-repair engine.', status: 'live' },
  { name: 'Verolyz Marketplace', desc: 'Digital marketplace produksi dengan Next.js 15, Better Auth, Neon PostgreSQL.', status: 'dev' },
];

const statusBadge = {
  live: { text: 'Live', color: '#C9A84C' },
  active: { text: 'Active Dev', color: '#CC0000' },
  dev: { text: 'In Dev', color: '#4C6CC9' },
};

export default function ProjectDetail() {
  const navigate = useNavigate();

  return (
    <>
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          {/* Back */}
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 font-mono text-xs text-[#555555] hover:text-[#F0F0F0] mb-12 transition-colors"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Kembali
          </motion.button>

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
              <span className="font-mono text-xs text-[#CC0000] tracking-widest uppercase">Live Project · 2025–2026</span>
            </div>

            <h1 className="font-syne font-black leading-[0.9] text-[#F0F0F0] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)' }}
            >
              PAGASKA<br />
              <span className="text-gradient">Digital</span><br />
              Ecosystem
            </h1>

            <p className="font-dm text-[#888888] text-lg leading-relaxed max-w-2xl">
              Ekosistem digital lengkap yang dibangun dari nol untuk organisasi PAGASKA.
              Satu visi, banyak platform, satu arsitek.
            </p>
          </motion.div>

          {/* Banner visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full h-56 lg:h-72 mb-16 border border-[#1E1E1E] bg-[#0C0C0C] relative overflow-hidden"
          >
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(rgba(204,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(204,0,0,0.5) 1px, transparent 1px)`,
                backgroundSize: '48px 48px',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#3D0000]/40 via-transparent to-transparent" />
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center">
                <p className="font-syne font-black text-[#CC0000]/10 select-none" style={{ fontSize: 'clamp(4rem, 15vw, 10rem)' }}>
                  PGAS
                </p>
              </div>
            </div>
            <div className="absolute top-4 left-4">
              <span className="font-mono text-[10px] text-[#CC0000]/40 tracking-widest">PAGASKA.DIGITAL.ECOSYSTEM</span>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="font-mono text-xs text-[#333333]">v0.4.0-beta</span>
            </div>
          </motion.div>

          {/* Info grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
          >
            {[
              { icon: User, label: 'Role', value: 'Sole Developer & Lead Architect' },
              { icon: Target, label: 'Client', value: 'PAGASKA — SMK N 5 Madiun' },
              { icon: Zap, label: 'Status', value: 'Active Development' },
              { icon: Layers, label: 'Modules', value: `${modules.length} Platform Aktif` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="p-5 border border-[#1E1E1E] bg-[#111111]">
                <Icon size={14} className="text-[#CC0000] mb-3" />
                <p className="font-mono text-[10px] text-[#333333] uppercase tracking-widest mb-1">{label}</p>
                <p className="font-dm text-sm text-[#888888] leading-snug">{value}</p>
              </div>
            ))}
          </motion.div>

          {/* Overview */}
          <Section title="Overview">
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-4 font-dm text-[#888888] leading-relaxed text-sm">
                <p>
                  PAGASKA Digital Ecosystem adalah inisiatif jangka panjang saya untuk mentransformasi
                  seluruh kehadiran digital organisasi PAGASKA — dari website statis, menuju ekosistem
                  digital yang terpadu, modern, dan berkelanjutan.
                </p>
                <p>
                  Proyek ini mencakup lebih dari sekadar website. Saya membangun infrastruktur yang
                  memungkinkan komunitas berkomunikasi, berkolaborasi, menikmati konten, dan berinteraksi
                  dengan AI dalam satu kesatuan ekosistem.
                </p>
              </div>
              <div className="space-y-4 font-dm text-[#888888] leading-relaxed text-sm">
                <p>
                  Setiap platform dalam ekosistem ini dirancang dengan filosofi yang sama: desain yang
                  bersih, performa tinggi, dan pengalaman pengguna yang premium tanpa kompleksitas yang
                  tidak perlu.
                </p>
                <p>
                  Sebagai satu-satunya developer dan arsitek, saya bertanggung jawab atas seluruh
                  keputusan teknis — dari pemilihan stack, arsitektur database, hingga deployment strategy.
                </p>
              </div>
            </div>
          </Section>

          {/* Goal */}
          <Section title="Goal">
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { num: '01', title: 'Digitalisasi Penuh', desc: 'Memindahkan seluruh operasional dan komunikasi organisasi ke platform digital yang terstruktur.' },
                { num: '02', title: 'Warisan Teknologi', desc: 'Meninggalkan infrastruktur yang bisa dilanjutkan oleh generasi berikutnya tanpa kehilangan konteks.' },
                { num: '03', title: 'Standard Premium', desc: 'Membuktikan bahwa organisasi sekolah pun bisa memiliki produk digital sekelas startup profesional.' },
              ].map(g => (
                <div key={g.num} className="p-6 border border-[#1E1E1E] bg-[#111111]">
                  <span className="font-mono text-xs text-[#CC0000] mb-4 block">{g.num}</span>
                  <h4 className="font-syne font-bold text-[#F0F0F0] text-sm mb-2">{g.title}</h4>
                  <p className="font-dm text-xs text-[#555555] leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Modules */}
          <Section title="Platform & Modules">
            <div className="grid sm:grid-cols-2 gap-4">
              {modules.map((mod, i) => {
                const badge = statusBadge[mod.status];
                return (
                  <motion.div
                    key={mod.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="p-5 border border-[#1E1E1E] bg-[#111111] hover:border-[#CC0000]/30 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-syne font-bold text-[#F0F0F0] text-sm">{mod.name}</h4>
                      <span
                        className="font-mono text-[9px] px-2 py-1 border tracking-widest"
                        style={{ color: badge.color, borderColor: `${badge.color}33`, background: `${badge.color}11` }}
                      >
                        {badge.text}
                      </span>
                    </div>
                    <p className="font-dm text-xs text-[#555555] leading-relaxed">{mod.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </Section>

          {/* Tech Stack */}
          <Section title="Tech Stack">
            <div className="space-y-4">
              {Object.entries(techStack).map(([cat, items]) => (
                <div key={cat} className="flex items-start gap-6 py-4 border-b border-[#1E1E1E] last:border-0">
                  <span className="font-mono text-xs text-[#333333] uppercase tracking-widest w-20 flex-shrink-0 pt-1">{cat}</span>
                  <div className="flex flex-wrap gap-2">
                    {items.map(item => (
                      <span key={item} className="font-mono text-xs px-3 py-1.5 bg-[#111111] border border-[#1E1E1E] text-[#888888] hover:border-[#CC0000]/40 hover:text-[#F0F0F0] transition-all duration-200">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Roadmap */}
          <Section title="Roadmap">
            <div className="space-y-4">
              {roadmap.map((phase, i) => {
                const cfg = statusConfig[phase.status];
                const Icon = cfg.icon;
                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex items-start gap-5 p-5 border ${cfg.bg} transition-all duration-300`}
                  >
                    <Icon size={16} className="flex-shrink-0 mt-0.5" style={{ color: cfg.color }} />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-[10px] text-[#333333] uppercase tracking-widest">{phase.phase}</span>
                        <span className="font-syne font-bold text-sm" style={{ color: cfg.color }}>{phase.title}</span>
                        <span className="ml-auto font-mono text-[10px]" style={{ color: cfg.color }}>{cfg.label}</span>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {phase.items.map(item => (
                          <span key={item} className="font-dm text-xs text-[#555555] flex items-center gap-1">
                            <span className="w-1 h-1 rounded-full bg-[#333333]" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </Section>

          {/* Personal Projects */}
          <Section title="Project Pribadi">
            <div className="grid sm:grid-cols-2 gap-4">
              {personalProjects.map((proj, i) => (
                <motion.div
                  key={proj.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-5 border border-[#1E1E1E] bg-[#111111] hover:border-[#CC0000]/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-syne font-bold text-[#F0F0F0] text-sm">{proj.name}</h4>
                    <span
                      className="font-mono text-[9px] px-2 py-1 border tracking-widest flex-shrink-0 ml-2"
                      style={{
                        color: proj.status === 'Under Development' ? '#4C6CC9' : '#C9A84C',
                        borderColor: proj.status === 'Under Development' ? '#4C6CC933' : '#C9A84C33',
                        background: proj.status === 'Under Development' ? '#4C6CC911' : '#C9A84C11',
                      }}
                    >
                      {proj.status}
                    </span>
                  </div>
                  <p className="font-dm text-xs text-[#555555] leading-relaxed">{proj.desc}</p>
                </motion.div>
              ))}
            </div>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Section({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4 mb-8">
        <h2 className="font-syne font-bold text-[#CC0000] text-xs tracking-[0.2em] uppercase">{title}</h2>
        <span className="flex-1 h-px bg-[#1E1E1E]" />
      </div>
      {children}
    </motion.section>
  );
}
