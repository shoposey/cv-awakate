"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#experiencia", label: "Experiencia" },
    { href: "#formacion", label: "Formación" },
    { href: "#contacto", label: "Contacto" },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = navLinks.map((link) =>
            document.querySelector(link.href.replace("#", "#"))
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    const handleNavClick = (
        e: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 block ${isScrolled
                    ? "bg-[#f5f1e8]/80 backdrop-blur-xl py-3 shadow-lg shadow-[#0B3D2E]/5"
                    : "bg-transparent py-6"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Gradient Border Bottom - visible only on scroll */}
                <div
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0B3D2E]/10 to-transparent transition-opacity duration-500 ${isScrolled ? "opacity-100" : "opacity-0"
                        }`}
                />

                <nav className="max-w-[var(--container-max)] mx-auto flex items-center justify-between px-6 md:px-10">
                    {/* Logo area */}
                    <a
                        href="#hero"
                        onClick={(e) => handleNavClick(e, "#hero")}
                        className="group relative z-50 text-2xl font-black tracking-[0.2em] text-[#0B3D2E] uppercase flex flex-col leading-none"
                    >
                        <span className="relative">
                            JCCarpio
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0B3D2E] to-[#10B981] transition-all duration-300 group-hover:w-full"></span>
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-10">
                        {navLinks.slice(1).map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`relative text-xs font-black uppercase tracking-[0.2em] transition-all py-2 group ${activeSection === link.href.replace("#", "")
                                        ? "text-[#0B3D2E]"
                                        : "text-gray-400 hover:text-[#0B3D2E]"
                                        }`}
                                >
                                    {link.label}
                                    {activeSection === link.href.replace("#", "") && (
                                        <motion.div
                                            layoutId="nav-indicator"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B3D2E] to-[#10B981] shadow-sm shadow-[#10B981]/50"
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button (Desktop) */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="#contacto"
                            onClick={(e) => handleNavClick(e, "#contacto")}
                            className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-[#0B3D2E] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full overflow-hidden transition-all hover:shadow-2xl hover:shadow-[#0B3D2E]/30 active:scale-95"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Contactar
                                <ArrowRight
                                    size={14}
                                    className="transition-transform group-hover:translate-x-1"
                                />
                            </span>

                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D2E] via-[#10B981] to-[#0B3D2E] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out opacity-20" />
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative z-50 p-2 text-black hover:bg-black/5 rounded-full transition-colors"
                        aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <AnimatePresence mode="wait">
                            {isMobileMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </nav>
            </motion.header>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-[#f5f1e8] flex flex-col items-center justify-center p-6"
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <nav className="flex flex-col items-center gap-8 w-full">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`text-3xl font-black tracking-[0.2em] uppercase transition-all duration-300 ${activeSection === link.href.replace("#", "")
                                        ? "text-[#0B3D2E] scale-110"
                                        : "text-gray-300 hover:text-[#0B3D2E]"
                                        }`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.2 + i * 0.1,
                                        duration: 0.5,
                                    }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contacto"
                                onClick={(e) => handleNavClick(e, "#contacto")}
                                className="mt-12 w-full max-w-xs py-5 bg-[#0B3D2E] text-white text-xs font-black uppercase tracking-[0.3em] rounded-full flex items-center justify-center gap-3 shadow-2xl shadow-[#0B3D2E]/20"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    delay: 0.2 + navLinks.length * 0.1,
                                    duration: 0.4,
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Contactar
                                <ArrowRight size={16} />
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

