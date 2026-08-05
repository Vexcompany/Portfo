import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { portfolioItems } from '../data';
import Footer from '../components/Footer';

const categoryColors = {
  'Web Development': '#CC0000',
  'Full Stack App': '#C9A84C',
  'AI Engineering': '#4C6CC9',
  'Branding': '#C9A84C',
};

export default function PortfolioDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = portfolioItems.find(p => p.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="font-mono text-xs text-[#CC0000] mb-4">404</p>
          <h1 className="font-syne font-black text-3xl text-[#F0F0F0] mb-6">Portfolio tidak ditemukan.</h1>
          <button onClick={() => navigate('/')} className="font-syne text-sm text-[#888888] hover:text-white underline">
            Kembali ke Home
          </button>
        </div>
      </div>
    );
  }

  const color = categoryColors[item.category] || '#CC0000';

  return (
    <>
      <main className="min-h-screen pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
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

          {/* Hero area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Category badge */}
            <span
              className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border inline-block mb-6"
              style={{ color, borderColor: `${color}33`, background: `${color}11` }}
            >
              {item.category}
            </span>

            <h1 className="font-syne font-black text-4xl lg:text-6xl text-[#F0F0F0] leading-tight mb-6">
              {item.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 mb-10 pb-10 border-b border-[#1E1E1E]">
              <div>
                <p className="font-mono text-[10px] text-[#333333] uppercase tracking-widest mb-1">Year</p>
                <p className="font-dm text-sm text-[#888888]">{item.year}</p>
              </div>
              <div className="w-px h-8 bg-[#1E1E1E]" />
              <div>
                <p className="font-mono text-[10px] text-[#333333] uppercase tracking-widest mb-1">Category</p>
                <p className="font-dm text-sm text-[#888888]">{item.category}</p>
              </div>
              <div className="w-px h-8 bg-[#1E1E1E]" />
              <div>
                <p className="font-mono text-[10px] text-[#333333] uppercase tracking-widest mb-1">Stack</p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.tags.map(tag => (
                    <span key={tag} className="font-mono text-xs text-[#555555] bg-[#111111] border border-[#1E1E1E] px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual placeholder — colored banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`w-full h-64 lg:h-96 mb-10 bg-gradient-to-br ${item.gradient} border border-[#1E1E1E] flex items-center justify-center relative overflow-hidden`}
          >
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(rgba(240,240,240,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(240,240,240,0.8) 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative text-center">
              <p className="font-syne font-black text-6xl lg:text-8xl opacity-10 text-white select-none">
                {item.title.split(' ')[0].toUpperCase()}
              </p>
            </div>
            {/* Corner label */}
            <div className="absolute bottom-4 right-4">
              <span className="font-mono text-xs text-[#555555]">{item.year} · {item.category}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-syne font-bold text-[#CC0000] text-xs tracking-widest uppercase mb-4">Overview</h2>
              <p className="font-dm text-[#888888] leading-relaxed text-base">{item.description}</p>
            </div>

            <div className="h-px bg-[#1E1E1E]" />

            <div>
              <h2 className="font-syne font-bold text-[#CC0000] text-xs tracking-widest uppercase mb-4">Detail</h2>
              <p className="font-dm text-[#888888] leading-relaxed text-base">{item.longDescription}</p>
            </div>

            {/* Tags cloud */}
            <div className="h-px bg-[#1E1E1E]" />
            <div>
              <h2 className="font-syne font-bold text-[#CC0000] text-xs tracking-widest uppercase mb-4">Teknologi</h2>
              <div className="flex flex-wrap gap-3">
                {item.tags.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-xs px-4 py-2 border text-[#888888] border-[#1E1E1E] bg-[#111111] hover:border-[#CC0000]/40 hover:text-[#F0F0F0] transition-all duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation between items */}
          <div className="mt-16 pt-8 border-t border-[#1E1E1E]">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate('/#portfolio')}
                className="font-syne text-xs text-[#555555] hover:text-[#F0F0F0] transition-colors uppercase tracking-wider flex items-center gap-2"
              >
                <ArrowLeft size={12} />
                Semua Portfolio
              </button>
              <button
                onClick={() => navigate('/#contact')}
                className="group font-syne font-semibold text-xs px-6 py-3 bg-[#CC0000] hover:bg-[#E50000] text-white transition-all duration-300 tracking-wider uppercase flex items-center gap-2"
              >
                Hubungi Saya
                <ExternalLink size={12} />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
