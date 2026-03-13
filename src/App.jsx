import { useState } from "react";
import {
  Users, Building2, Award, Clock,
  Search, Target, BookOpen, Handshake,
  ChevronRight, Menu, X, ArrowRight,
  Check, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin,
} from "lucide-react";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const STATS = [
  { icon: Building2,  label: "Companies Helped", value: "500+" },
  { icon: Users,      label: "Placements Made",  value: "12K+" },
  { icon: Award,      label: "Industry Awards",  value: "34"   },
  { icon: Clock,      label: "Years Experience", value: "15+"  },
];

const SERVICES = [
  { icon: Search,    title: "Talent Acquisition", desc: "End-to-end recruiting from sourcing to onboarding for permanent and contract roles." },
  { icon: Target,    title: "Executive Search",   desc: "Confidential, high-touch search for C-suite and senior leadership positions globally." },
  { icon: BookOpen,  title: "Corporate Programs", desc: "Custom workforce training, graduate programs, and internal mobility initiatives." },
  { icon: Handshake, title: "HR Consulting",      desc: "Strategic HR advisory: org design, compensation benchmarking, and workforce planning." },
];

const BENEFITS = [
  "Dedicated account managers for every client",
  "Pre-vetted candidates in under 48 hours",
  "Replacement guarantee within 90 days",
  "Nationwide talent pool across 50+ industries",
  "Compliance & payroll fully handled",
  "Transparent pricing with no hidden fees",
];

const STAFF = [
  { id: 1, name: "Alexandra Reed", title: "Senior Recruiter",        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { id: 2, name: "Marcus Chen",    title: "Talent Acquisition Lead", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { id: 3, name: "Priya Nair",     title: "HR Business Partner",     image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  { id: 4, name: "Daniel Torres",  title: "Executive Search",        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
];

const BLOGS = [
  { id: 1, title: "How to Build a High-Performance Team in 2025",         date: "March 5, 2025",   category: "Talent Strategy",   image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80" },
  { id: 2, title: "The Future of Remote Hiring: Trends You Need to Know", date: "Feb 18, 2025",    category: "Industry Insights", image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80" },
  { id: 3, title: "Onboarding Done Right: First 90 Days That Matter",     date: "Jan 30, 2025",    category: "HR Tips",           image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80" },
  { id: 4, title: "Diversity Hiring: Beyond the Checkbox",                date: "Jan 12, 2025",    category: "Culture",           image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80" },
];

const SOCIAL_STYLES = {
  facebook:  "bg-blue-600 hover:bg-blue-700",
  twitter:   "bg-sky-400  hover:bg-sky-500",
  instagram: "bg-pink-500 hover:bg-pink-600",
  linkedin:  "bg-blue-800 hover:bg-blue-900",
};

const SOCIAL_ICONS = { facebook: Facebook, twitter: Twitter, instagram: Instagram, linkedin: Linkedin };

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <span className="inline-block bg-[#F2C94C] text-black font-black text-xs uppercase tracking-widest px-3 py-1 mb-4">
      {children}
    </span>
  );
}

function SocialIcon({ platform }) {
  const Icon = SOCIAL_ICONS[platform];
  return (
    <a href="#" className={`${SOCIAL_STYLES[platform]} text-white p-1.5 rounded-sm transition-all duration-200 hover:scale-110 inline-flex items-center justify-center`}>
      <Icon size={13} />
    </a>
  );
}

// ─── 1. NAVBAR ────────────────────────────────────────────────────────────────

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home",     href: "#home"     },
    { label: "About",    href: "#about"    },
    { label: "Services", href: "#services" },
    { label: "Team",     href: "#team"     },
    { label: "Blog",     href: "#blog"     },
    { label: "Contact",  href: "#contact"  },
  ];

  const handleNav = (e, href) => {
    e.preventDefault();
    setOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = document.querySelector("nav").offsetHeight;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F2C94C] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNav(e, "#home")} className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center">
            <span className="text-[#F2C94C] font-black text-xs leading-none">HR</span>
          </div>
          <span className="font-black text-black text-xl tracking-tight">StaffRight</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => handleNav(e, href)}
                className="text-black font-semibold text-sm tracking-wide hover:opacity-60 transition-opacity"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          onClick={(e) => handleNav(e, "#contact")}
          className="hidden md:inline-flex items-center gap-2 bg-black text-[#F2C94C] font-bold text-sm px-5 py-2.5 hover:bg-neutral-800 transition-colors"
        >
          Get Started <ArrowRight size={14} />
        </a>

        <button className="md:hidden text-black" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#F2C94C] border-t border-black/10 px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-3">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className="block text-black font-semibold text-sm"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="mt-4 inline-flex items-center gap-2 bg-black text-[#F2C94C] font-bold text-sm px-5 py-2.5"
          >
            Get Started <ArrowRight size={14} />
          </a>
        </div>
      )}
    </nav>
  );
}

// ─── 2. HERO ──────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[560px] flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&q=80"
        alt="Team at work"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/65" />
      {/* Decorative yellow frames */}
      <div className="absolute left-[7%] top-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border-4 border-[#F2C94C] opacity-60" />
      <div className="absolute left-[9%] top-[calc(50%-1rem)] -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 border-4 border-[#F2C94C] opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <p className="text-[#F2C94C] font-bold tracking-[0.35em] text-xs md:text-sm uppercase mb-4">#1 Staffing Solutions</p>
        <h1 className="text-white font-black text-5xl md:text-7xl lg:text-8xl leading-none uppercase tracking-tight max-w-3xl">
          Let's Work<br /><span className="text-[#F2C94C]">Together</span>
        </h1>
        <p className="text-white/75 mt-6 text-base md:text-lg max-w-md leading-relaxed">
          We connect top talent with forward-thinking companies. Build your dream team or land your perfect role — faster than ever.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#F2C94C] text-black font-black text-sm px-8 py-4 hover:bg-yellow-400 transition-colors uppercase tracking-wider">
            Find Talent <ChevronRight size={16} />
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-sm px-8 py-4 hover:border-[#F2C94C] hover:text-[#F2C94C] transition-colors uppercase tracking-wider">
            Browse Jobs
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── 3. ABOUT ─────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="text-black font-black text-4xl md:text-5xl leading-tight uppercase mb-6">
            Find Staff<br /><span className="text-[#F2C94C]">Right Now</span>
          </h2>
          <p className="text-neutral-600 text-base leading-relaxed mb-6">
            StaffRight is a premier staffing and recruitment firm with over a decade of experience placing exceptional professionals across finance, technology, healthcare, and creative industries.
          </p>
          <p className="text-neutral-600 text-base leading-relaxed mb-8">
            Our deep talent network and rigorous vetting process means you get candidates who are not only qualified — but genuinely ready to contribute from day one.
          </p>
          <a href="#" className="inline-flex items-center gap-2 bg-black text-[#F2C94C] font-bold text-sm px-7 py-3.5 hover:bg-neutral-800 transition-colors uppercase tracking-wider">
            Learn More <ArrowRight size={14} />
          </a>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -right-4 w-full h-full border-4 border-[#F2C94C] z-0" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
            alt="Professional team"
            className="relative z-10 w-full h-80 md:h-[420px] object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}

// ─── 4. STATS BAR ─────────────────────────────────────────────────────────────

function Stats() {
  return (
    <section className="bg-neutral-950 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-neutral-800">
        {STATS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex flex-col items-center justify-center py-10 px-6 text-center group">
            <div className="w-14 h-14 bg-[#F2C94C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Icon size={24} className="text-black" />
            </div>
            <span className="text-white font-black text-3xl md:text-4xl">{value}</span>
            <span className="text-neutral-400 text-xs uppercase tracking-widest mt-1">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── 5. INTRO + BENEFITS ──────────────────────────────────────────────────────

function Intro() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: image with bold overlay */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80"
            alt="Office environment"
            className="w-full h-[420px] object-cover object-center"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/80 px-6 py-5">
            <h2 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight leading-tight border-b-4 border-[#F2C94C] pb-3">
              Find Staff Right Now.
            </h2>
          </div>
        </div>

        {/* Right: benefits */}
        <div>
          <p className="text-[#F2C94C] font-bold text-xs uppercase tracking-widest mb-3">Why Choose Us</p>
          <h3 className="text-[#333] font-black text-3xl md:text-4xl leading-tight mb-4">
            Personal Attention<br /><span className="text-[#F2C94C]">at Every Step.</span>
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-8">
            From the first conversation to the final placement, our team acts as a true extension of yours — driven by results and built on trust.
          </p>
          <ul className="space-y-4">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-5 h-5 bg-[#F2C94C] rounded-full flex items-center justify-center mt-0.5">
                  <Check size={11} strokeWidth={3} className="text-black" />
                </span>
                <span className="text-gray-700 text-sm leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── 6. SERVICES ──────────────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-black font-black text-4xl md:text-5xl uppercase">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border border-neutral-200">
          {SERVICES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="p-8 border-b sm:border-b-0 sm:border-r border-neutral-200 last:border-r-0 group hover:bg-neutral-950 transition-colors duration-300">
              <div className="w-14 h-14 rounded-full bg-[#F2C94C] flex items-center justify-center mb-6 group-hover:scale-105 transition-all">
                <Icon size={22} className="text-black" />
              </div>
              <h3 className="font-black text-black group-hover:text-white text-base uppercase tracking-wide mb-3 transition-colors">{title}</h3>
              <p className="text-neutral-500 group-hover:text-neutral-400 text-sm leading-relaxed transition-colors">{desc}</p>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center gap-1 text-[#F2C94C] font-bold text-xs uppercase tracking-widest hover:gap-2 transition-all">
                  Learn More <ChevronRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 7. TEAM GRID ─────────────────────────────────────────────────────────────

function TeamGrid() {
  return (
    <section id="team" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <SectionLabel>Our Experts</SectionLabel>
          <h2 className="text-[#333] font-black text-4xl uppercase">Meet the Team</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {STAFF.map((person) => (
            <div key={person.id} className="bg-white flex flex-col items-center text-center p-6 shadow-sm hover:shadow-md transition-shadow duration-300 group border border-neutral-100">
              <div className="w-32 h-32 rounded-lg overflow-hidden mb-4 border-2 border-transparent group-hover:border-[#F2C94C] transition-all duration-300">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top" />
              </div>
              <h4 className="text-[#333] font-black text-base mb-1">{person.name}</h4>
              <p className="text-gray-400 italic text-xs mb-5">{person.title}</p>
              <div className="w-10 h-0.5 bg-[#F2C94C] mb-5" />
              <div className="flex items-center gap-1.5">
                {["facebook", "twitter", "instagram", "linkedin"].map((p) => (
                  <SocialIcon key={p} platform={p} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 8. CTA BAR ───────────────────────────────────────────────────────────────

function CTABar() {
  return (
    <section className="bg-[#F2C94C] py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-black font-black text-3xl md:text-4xl uppercase leading-tight mb-3">Looking for Staffing?</h3>
          <p className="text-black/70 text-sm max-w-md leading-relaxed">
            Talk to one of our recruitment specialists today. We'll help you find the right talent — fast, reliable, and tailored to your business needs.
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 flex-shrink-0">
          <a href="tel:1800234567" className="inline-flex items-center gap-3 bg-black text-white font-black text-base px-8 py-4 rounded-full hover:bg-neutral-800 active:scale-95 transition-all duration-200 shadow-lg hover:shadow-xl">
            <Phone size={18} /> Contact Us
          </a>
          <a href="tel:1800234567" className="text-black/80 font-semibold text-sm tracking-widest hover:text-black transition-colors">
            1800 234 567
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── 9. BLOG ──────────────────────────────────────────────────────────────────

function Blog() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <SectionLabel>Latest Posts</SectionLabel>
            <h2 className="text-[#333] font-black text-4xl uppercase leading-tight">
              Read our<br />Blog Articles
            </h2>
          </div>
          <a href="#" className="self-start sm:self-auto inline-flex items-center gap-2 border-2 border-[#333] text-[#333] font-bold text-xs px-5 py-2.5 uppercase tracking-wider hover:bg-[#F2C94C] hover:border-[#F2C94C] transition-colors">
            View All Posts
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {BLOGS.map((post) => (
            <a key={post.id} href="#" className="group relative overflow-hidden block">
              <div className="aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5">
                <span className="inline-block bg-[#F2C94C] text-black text-xs font-black uppercase px-2 py-0.5 mb-2">{post.category}</span>
                <h4 className="text-white font-black text-base leading-snug">{post.title}</h4>
                <p className="text-white/50 text-xs mt-1">{post.date}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 10. FOOTER ───────────────────────────────────────────────────────────────

function Footer() {
  const quickLinks = ["Home", "About Us", "Services", "Meet the Team", "Blog", "Careers"];
  const services   = ["Talent Acquisition", "Executive Search", "Corporate Programs", "HR Consulting", "Contract Staffing", "Payroll Solutions"];

  return (
    <footer id="contact" className="bg-neutral-950 text-white">

      {/* ── Main footer grid ── */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand + about blurb + socials */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#F2C94C] rounded-sm flex items-center justify-center flex-shrink-0">
              <span className="text-black font-black text-xs">HR</span>
            </div>
            <span className="text-white font-black text-lg tracking-tight">StaffRight</span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed mb-6">
            Connecting exceptional talent with forward-thinking companies since 2009. Nationwide coverage, personal service.
          </p>
          {/* Social icons */}
          <div className="flex gap-2">
            {["facebook","twitter","instagram","linkedin"].map((p) => (
              <SocialIcon key={p} platform={p} />
            ))}
          </div>
        </div>

        {/* Col 2 — Quick links */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5 border-b border-neutral-800 pb-3">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l}>
                <a href="#" className="text-neutral-400 text-sm hover:text-[#F2C94C] transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-[#F2C94C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5 border-b border-neutral-800 pb-3">
            Our Services
          </h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s}>
                <a href="#" className="text-neutral-400 text-sm hover:text-[#F2C94C] transition-colors flex items-center gap-2 group">
                  <ChevronRight size={12} className="text-[#F2C94C] opacity-0 group-hover:opacity-100 transition-opacity" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact info */}
        <div>
          <h4 className="text-white font-black text-sm uppercase tracking-widest mb-5 border-b border-neutral-800 pb-3">
            Contact Us
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#F2C94C] flex-shrink-0 mt-0.5" />
              <span className="text-neutral-400 text-sm leading-relaxed">
                Level 12, 333 Collins Street<br />
                Melbourne VIC 3000, Australia
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#F2C94C] flex-shrink-0" />
              <a href="tel:1800234567" className="text-neutral-400 text-sm hover:text-[#F2C94C] transition-colors">
                1800 234 567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-[#F2C94C] flex-shrink-0 opacity-0" />
              <a href="tel:+61396001234" className="text-neutral-400 text-sm hover:text-[#F2C94C] transition-colors">
                +61 3 9600 1234
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-[#F2C94C] flex-shrink-0" />
              <a href="mailto:hello@staffright.com.au" className="text-neutral-400 text-sm hover:text-[#F2C94C] transition-colors">
                hello@staffright.com.au
              </a>
            </li>
          </ul>

          {/* Office hours */}
          <div className="mt-6 bg-neutral-900 rounded-sm px-4 py-3 border-l-2 border-[#F2C94C]">
            <p className="text-white font-bold text-xs uppercase tracking-wider mb-1">Office Hours</p>
            <p className="text-neutral-400 text-xs">Mon – Fri: 8:00 AM – 6:00 PM</p>
            <p className="text-neutral-400 text-xs">Sat: 9:00 AM – 1:00 PM</p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-neutral-500 text-xs">
            © {new Date().getFullYear()} StaffRight Pty Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((l) => (
              <a key={l} href="#" className="text-neutral-500 hover:text-[#F2C94C] text-xs transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}

// ─── APP — full page flow ─────────────────────────────────────────────────────
//
//  Navbar
//  ↓ Hero            — bold first impression, full-viewport
//  ↓ About           — who we are + offset image
//  ↓ Stats           — dark trust bar (numbers)
//  ↓ Intro           — "Find Staff" image + benefits checklist
//  ↓ Services        — what we offer (4 cards)
//  ↓ TeamGrid        — meet the team (4 profiles)
//  ↓ CTABar          — yellow urgency strip + phone CTA
//  ↓ Blog            — 2×2 article grid
//  ↓ Footer

export default function App() {
  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Intro />
      <Services />
      <TeamGrid />
      <CTABar />
      <Blog />
      <Footer />
    </div>
  );
}