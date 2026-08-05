export const portfolioItems = [
  {
    id: 'pagaska-website',
    title: 'PAGASKA Official Website',
    category: 'Web Development',
    tags: ['React', 'Vite', 'TailwindCSS'],
    description:
      'Website resmi organisasi PAGASKA SMK Negeri 5 Kota Madiun. Dibangun dari nol dengan React + Vite, menggantikan sistem multi-file HTML lama. Menampilkan profil organisasi, galeri kegiatan, dan portal anggota.',
    longDescription:
      'Proyek ini merupakan migrasi penuh dari website statis multi-file HTML ke arsitektur modern berbasis React. Saya memimpin seluruh proses desain dan development, mulai dari pemilihan stack, design tokens, hingga deployment di Vercel dengan HashRouter pattern.',
    year: '2025',
    color: '#CC0000',
    gradient: 'from-red-900/40 to-black',
    featured: true,
  },
  {
    id: 'pagaska-music',
    title: 'Pagaska Music — Zephyrus',
    category: 'Full Stack App',
    tags: ['Supabase', 'Cloudflare R2', 'Node.js'],
    description:
      'Platform streaming musik internal komunitas dengan desain dark navy/liquid gold. Fitur lengkap: lyrics mode, party queue, media session lock screen, PWA offline, dan cross-device sync.',
    longDescription:
      'Zephyrus Music adalah iterasi ketiga dari platform streaming internal PAGASKA. Dibangun dengan Supabase sebagai backend, Cloudflare R2 untuk audio storage, dan Node.js/Express sebagai proxy layer. Saya mengimplementasikan sistem autentikasi Google OAuth, Cinematic Lyrics Mode dengan Web Audio API, dan PWA dengan Service Worker.',
    year: '2025',
    color: '#C9A84C',
    gradient: 'from-yellow-900/40 to-black',
    featured: true,
  },
  {
    id: 'taksaka-ai',
    title: 'Taksaka AI',
    category: 'AI Engineering',
    tags: ['OpenRouter', 'Node.js', 'Express'],
    description:
      'Sistem AI internal untuk komunitas PAGASKA dengan multi-provider architecture, model classification, auto-discovery, cooldown management, dan health tracking.',
    longDescription:
      'Taksaka AI v0.4.0 merupakan refactor besar dari Gemini backend ke OpenRouter dengan arsitektur multi-provider. Saya membangun ConversationDirector, PromptBuilder, Brain system, Memory layer, dan HTTP API dengan dark-mode chat frontend.',
    year: '2025',
    color: '#4C6CC9',
    gradient: 'from-blue-900/40 to-black',
    featured: false,
  },
  {
    id: 'pagaska-brand',
    title: 'PAGASKA Brand System',
    category: 'Branding',
    tags: ['Design', 'Identity', 'Visual System'],
    description:
      'Sistem identitas visual lengkap untuk organisasi PAGASKA. Mencakup logo guidelines, color palette, typography, dan design tokens yang digunakan di seluruh ekosistem digital.',
    longDescription:
      'Mengembangkan brand system yang konsisten untuk seluruh produk digital PAGASKA. Sistem ini menjadi acuan desain untuk website, musik app, AI interface, dan seluruh material komunikasi organisasi.',
    year: '2025',
    color: '#C9A84C',
    gradient: 'from-amber-900/40 to-black',
    featured: false,
  },
];

export const skills = [
  {
    category: 'Design',
    icon: '✦',
    items: ['Figma', 'UI/UX Design', 'Design Systems', 'Brand Identity', 'Motion Design', 'Typography'],
  },
  {
    category: 'Frontend',
    icon: '◈',
    items: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'JavaScript (ES6+)', 'React Router'],
  },
  {
    category: 'Backend',
    icon: '⬡',
    items: ['Node.js', 'Express.js', 'REST API', 'Hono', 'Cloudflare Workers'],
  },
  {
    category: 'Database',
    icon: '◆',
    items: ['PostgreSQL', 'Supabase', 'Neon DB', 'Prisma ORM', 'Drizzle ORM'],
  },
  {
    category: 'AI',
    icon: '◎',
    items: ['OpenRouter', 'Gemini API', 'Prompt Engineering', 'AI System Design', 'Multi-provider Architecture'],
  },
  {
    category: 'Tools',
    icon: '⊞',
    items: ['Git & GitHub', 'Vercel', 'Cloudflare', 'Pterodactyl', 'VS Code', 'Telegram Bot API'],
  },
];

export const experiences = [
  {
    year: '2025–2026',
    title: 'Koordinator Infokom',
    org: 'PAGASKA',
    orgFull: 'Paskibra Gala Taksaka — SMK Negeri 5 Kota Madiun',
    desc: 'Memimpin divisi Informasi dan Komunikasi organisasi flag-raising. Bertanggung jawab atas seluruh ekosistem digital PAGASKA: website, platform musik, sistem AI, dan infrastruktur teknologi.',
    highlight: true,
  },
  {
    year: '2025–2026',
    title: 'Koordinator Seksi Bidang Telekomunikasi',
    org: 'OSIS',
    orgFull: 'Organisasi Siswa Intra Sekolah — SMK Negeri 5 Kota Madiun',
    desc: 'Mengkoordinasikan bidang telekomunikasi OSIS, mengelola komunikasi digital sekolah, dan mendukung kegiatan organisasi dengan solusi teknologi.',
    highlight: false,
  },
];

export const techStack = {
  frontend: ['React 19', 'Vite', 'TailwindCSS', 'Framer Motion', 'React Router v6'],
  backend: ['Node.js', 'Express.js', 'Cloudflare Workers', 'Hono'],
  database: ['Neon PostgreSQL', 'Supabase', 'Prisma ORM'],
  ai: ['OpenRouter', 'Multi-provider Architecture', 'Gemini API'],
  infra: ['Vercel', 'Cloudflare R2', 'Pterodactyl', 'GitHub'],
};

export const roadmap = [
  { phase: 'Phase 1', title: 'Foundation', status: 'done', items: ['Website resmi', 'Brand system', 'Design tokens'] },
  { phase: 'Phase 2', title: 'Platform', status: 'done', items: ['Zephyrus Music', 'PWA support', 'Supabase auth'] },
  { phase: 'Phase 3', title: 'Intelligence', status: 'done', items: ['Taksaka AI v0.4', 'OpenRouter integration', 'Multi-provider system'] },
  { phase: 'Phase 4', title: 'Expansion', status: 'active', items: ['Veronime', 'Verosatsu', 'MangaVoid', 'Veromove'] },
  { phase: 'Phase 5', title: 'Marketplace', status: 'planned', items: ['Verolyz platform', 'Better Auth', 'Cloudflare R2 storage'] },
];

export const personalProjects = [
  { name: 'Veronime', desc: 'Platform streaming anime personal.', status: '2025 – Sekarang' },
  { name: 'Verosatsu', desc: 'Layanan digital berbasis konten visual.', status: '2025 – Sekarang' },
  { name: 'MangaVoid', desc: 'Platform baca manga dengan UI modern.', status: '2025 – Sekarang' },
  { name: 'Veromove', desc: 'Platform streaming film dan series.', status: 'Under Development' },
];
