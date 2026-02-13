"use client";

import { motion } from "motion/react";
import { Linkedin, Github, Twitter, ArrowUp } from "lucide-react";

const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#formacion", label: "Formación" },
    { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#f5f1e8] py-20 overflow-hidden">
            {/* Soft decorative background element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0B3D2E]/10 to-transparent" />

            <div className="max-w-[var(--container-max)] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-5 space-y-6">
                        <a
                            href="#hero"
                            className="text-2xl font-black tracking-[0.2em] text-[#0B3D2E] uppercase inline-block"
                        >
                            JCCarpio
                        </a>
                        <p className="text-gray-500 max-w-sm text-sm leading-relaxed">
                            Impulsando la competitividad empresarial a través de la inteligencia artificial estratégica y la automatización avanzada.
                        </p>
                        <div className="flex items-center gap-4 pt-2">
                            <a
                                href="https://www.linkedin.com/in/jotacecarpio/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                aria-label="LinkedIn"
                                className="p-3 rounded-xl bg-white border border-gray-100 text-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <Linkedin size={20} />
                            </a>
                            {/* Potential social placeholders - keeping it focused on what we have */}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-4 grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0B3D2E] mb-6 opacity-40">
                                Navegación
                            </h4>
                            <ul className="space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="text-sm font-bold text-gray-400 hover:text-[#0B3D2E] transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Back to top */}
                    <div className="md:col-span-3 flex md:justify-end">
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#0B3D2E] opacity-60 hover:opacity-100 transition-opacity"
                        >
                            <span>Volver arriba</span>
                            <div className="p-3 rounded-full border border-[#0B3D2E]/20 group-hover:bg-[#0B3D2E]/5 transition-all">
                                <ArrowUp size={16} />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-[#0B3D2E]/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">
                        © {new Date().getFullYear()} Juan Carlos Carpio Cámara — Made with passion & AI
                    </p>
                    <div className="flex gap-8">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">Málaga, España</span>
                        {/* More links can go here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
