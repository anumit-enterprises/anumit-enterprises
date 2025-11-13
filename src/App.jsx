import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Mail, Phone, MapPin,
  Github, Linkedin, Instagram, Star,
} from "lucide-react";
import { CONTACT, BRANDS, CATEGORIES } from "./data/catalog";

const RotatingWords = ({ words }) => {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % words.length), 1800);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span className="inline-block min-w-[12ch]">
      <motion.span key={i} initial={{opacity:0,y:6}} animate={{opacity:1,y:0}}
        transition={{duration:.25}} className="text-green-600">
        {words[i]}
      </motion.span>
    </span>
  );
};

const Stat = ({ value, label }) => (
  <div className="text-center p-6 rounded-2xl bg-white/60 shadow-sm border border-zinc-100">
    <div className="text-3xl font-semibold">{value}</div>
    <div className="text-sm text-zinc-500 mt-1">{label}</div>
  </div>
);

const Card = ({ tag, title, image }) => (
  <div className="rounded-2xl overflow-hidden border border-zinc-100 bg-white shadow-sm hover:shadow-md transition">
    <div className="aspect-video overflow-hidden">
      <img src={image} alt={title} className="object-cover w-full h-full" />
    </div>
    <div className="p-4">
      <div className="text-xs uppercase tracking-wide text-green-600">{tag}</div>
      <div className="font-semibold mt-1">{title}</div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={`${import.meta.env.BASE_URL}logo.jpeg`}
              alt="Anumit Enterprises"
              className="h-10 w-auto object-contain"
            />
            <div className="font-bold text-lg sm:text-xl text-green-700"></div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-green-600">About</a>
            <a href="#products" className="hover:text-green-600">Products</a>
            <a href="#brands" className="hover:text-green-600">Brands</a>
            <a href="#faq" className="hover:text-green-600">FAQ</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-xl bg-green-600 text-white">
            Get Quote <ArrowRight size={16}/>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="about">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-widest text-xs text-zinc-500 mb-3">
              Korba, Chhattisgarh • Pan-India Supply & Service
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Empowering Industry with{" "}
              <RotatingWords words={["Switchgear","Industrial Solutions","Safety Systems"]} />
            </h1>
            <p className="mt-4 text-lg text-zinc-600">
              Industrial-grade electricals, safety, instrumentation, lifting solutions,
              compressors & more—reliable supply with quick support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#products" className="px-5 py-3 rounded-xl bg-green-600 text-white inline-flex items-center gap-2">
                View Products <ArrowRight size={16}/>
              </a>
              <a href="#contact" className="px-5 py-3 rounded-xl border border-zinc-200">Contact Us</a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <Stat value="10+" label="Years in Business"/>
              <Stat value="150+" label="Clients"/>
              <Stat value="98%" label="On-time Delivery"/>
            </div>
          </div>
          <div className="relative">
          {/* Gradient background */}
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-100 to-green-50 overflow-hidden flex items-center justify-center">
            <img
              src={`${import.meta.env.BASE_URL}imagebase.png`}
              alt="Anumit Enterprises Base"
              className="object-contain h-full w-full"
            />
          </div>
        </div>
        </div>
      </section>

      {/* Products (Canvas-style grid) */}
      <section id="products" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold">Featured Products & Solutions</h2>
              <p className="text-sm text-zinc-500">Quick look at key categories.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map(cat => (
              <Card
                key={cat.tag}
                tag={cat.tag}
                title={cat.items[0]}
                image={cat.image}
              />
            ))}
          </div>


          {/* Simple grouped list below cards */}
          <div className="mt-10 grid md:grid-cols-2 gap-8">
            {CATEGORIES.map(cat => (
              <div key={cat.tag} className="rounded-2xl border border-zinc-100 p-5 bg-white">
                <div className="font-semibold">{cat.tag}</div>
                <ul className="mt-3 list-disc pl-5 text-sm text-zinc-600 space-y-1">
                  {cat.items.map((it, i) => <li key={i}>{it}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands strip */}
      <section id="brands" className="py-12 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-sm uppercase tracking-wider text-zinc-500 mb-6">Trusted brands</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {BRANDS.map(b => (
              <div key={b} className="h-12 rounded-md grid place-content-center border border-zinc-200 bg-white text-xs text-zinc-600">{b}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">What our customers say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ["Plant Head","Steel Manufacturer","Quick turnaround on critical spares and excellent support."],
              ["Maintenance Lead","Power Utility","Reliable delivery and fair pricing—our go-to supplier."],
              ["Projects Manager","Cement Plant","Helped us standardize switchgear across lines."]
            ].map(([name, role, quote]) => (
              <div key={name} className="p-6 rounded-2xl bg-white shadow-sm border border-zinc-100">
                <div className="flex gap-1 mb-3">{Array.from({length:5}).map((_,i)=><Star key={i} size={16} className="fill-current text-green-600"/>)}</div>
                <p className="text-sm leading-6 text-zinc-600">“{quote}”</p>
                <div className="mt-4"><div className="font-medium">{name}</div><div className="text-xs text-zinc-500">{role}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">FAQs</h2>
          <div className="space-y-4">
            {[
              {q:"Quotations & lead time", a:"Share make/model/qty. We reply with price, availability & lead time same day whenever possible."},
              {q:"Brands & warranties", a:"We supply reputed OEMs (e.g., Schneider, BCH). OEM warranties apply; we assist with claims."},
              {q:"Shipping & installation", a:"Pan-India shipping. On-site installation/commissioning available on request."},
              {q:"Payments", a:"Bank transfer/UPI. Standard milestone terms for project orders."}
            ].map((item,idx)=>(
              <details key={idx} className="group rounded-xl border border-zinc-200 p-4">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                  <span className="font-medium">{item.q}</span>
                  <CheckCircle2 size={18} className="opacity-60 group-open:rotate-180 transition"/>
                </summary>
                <p className="mt-3 text-sm text-zinc-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold">Need a quote or a site visit?</h2>
              <p className="text-sm text-zinc-600 mt-2">
                Share requirement (make • model • quantity). We’ll confirm availability, pricing & lead time.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3"><Mail size={16}/> {CONTACT.emails[0]}</div>
                <div className="flex items-center gap-3"><Mail size={16}/> {CONTACT.emails[1]}</div>
                <div className="flex items-center gap-3"><Phone size={16}/> {CONTACT.phones.join(" / ")}</div>
                <div className="flex items-center gap-3"><MapPin size={16}/> {CONTACT.address}</div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#" aria-label="GitHub" className="p-2 rounded-lg border border-zinc-200"><Github/></a>
                <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg border border-zinc-200"><Linkedin/></a>
                <a href="#" aria-label="Instagram" className="p-2 rounded-lg border border-zinc-200"><Instagram/></a>
              </div>
            </div>
            <form className="p-6 rounded-2xl bg-white border border-zinc-100 shadow-sm">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm">Your Name</label>
                  <input className="w-full mt-1 rounded-xl border border-zinc-200 bg-transparent px-3 py-2" placeholder="Jane Doe"/>
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input className="w-full mt-1 rounded-xl border border-zinc-200 bg-transparent px-3 py-2" placeholder="you@example.com"/>
                </div>
                <div>
                  <label className="text-sm">Requirement</label>
                  <textarea rows={4} className="w-full mt-1 rounded-xl border border-zinc-200 bg-transparent px-3 py-2" placeholder="Make • Model • Quantity • Location"/>
                </div>
                <button type="button" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white">
                  Send Message <ArrowRight size={16}/>
                </button>
                <p className="text-xs text-zinc-500">By sending, you agree to the processing of personal data.</p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 py-10 text-sm">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="opacity-70">© {new Date().getFullYear()} Anumit Enterprises. All rights reserved.</div>
          <div className="flex items-center gap-4 opacity-80">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
