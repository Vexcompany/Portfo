import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E1E] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-syne font-bold text-lg text-[#F0F0F0]">GIO</span>
            <span className="text-[#CC0000] font-bold">.</span>
            <span className="font-mono text-xs text-[#333333]">Giovanni Adhi Pratama</span>
          </div>

          <p className="font-mono text-xs text-[#333333] text-center">
            Designed & Built with{' '}
            <span className="text-[#CC0000]">♥</span>
            {' '}in Madiun, 2025
          </p>

          <p className="font-mono text-xs text-[#222222]">
            v1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
}
