import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '../hooks/useScrolled';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const scrolled = useScrolled(60);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleNav = (href) => {
    setMenuOpen(false);
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      if (location.pathname !== '/') {
        window.location.href = href;
        return;
      }
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => handleNav('/#home')}
              className="font-syne font-bold text-lg tracking-tight group"
            >
              <span className="text-white">GIO</span>
              <span className="text-[#CC0000] group-hover:text-[#C9A84C] transition-colors duration-300">.</span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-dm text-sm text-[#888888] hover:text-[#F0F0F0] transition-colors duration-200 tracking-wide"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => handleNav('/#contact')}
                className="font-syne text-xs font-semibold px-5 py-2.5 bg-[#CC0000] hover:bg-[#E50000] text-white transition-all duration-200 tracking-wider uppercase"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-[#888888] hover:text-white transition-colors"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 glass border-t border-[#1E1E1E]"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link.href)}
                  className="font-dm text-left text-[#888888] hover:text-white transition-colors py-1 text-sm"
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => handleNav('/#contact')}
                className="font-syne text-xs font-semibold px-5 py-3 bg-[#CC0000] text-white tracking-wider uppercase text-center mt-2"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
