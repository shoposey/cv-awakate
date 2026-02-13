"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";

const sections = [
    { id: "hero", label: "Inicio" },
    { id: "sobre-mi", label: "Sobre Mí" },
    { id: "experiencia", label: "Experiencia" },
    { id: "formacion", label: "Formación" },
    { id: "contacto", label: "Contacto" },
];

export default function SideNav() {
    const [activeSection, setActiveSection] = useState("hero");

    useEffect(() => {
        const sectionElements = sections.map((s) =>
            document.getElementById(s.id)
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

        sectionElements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const handleClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav
            className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3"
            aria-label="Navegación por secciones"
        >
            {sections.map((section) => (
                <button
                    key={section.id}
                    onClick={() => handleClick(section.id)}
                    className="group relative flex items-center"
                    aria-label={`Ir a ${section.label}`}
                >
                    {/* Tooltip */}
                    <span className="absolute right-8 px-2.5 py-1 bg-black text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {section.label}
                    </span>

                    <motion.span
                        className={`block rounded-full transition-all duration-500 ${activeSection === section.id
                            ? "bg-[#0B3D2E] shadow-lg shadow-[#0B3D2E]/20"
                            : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        animate={{
                            width: activeSection === section.id ? 14 : 8,
                            height: activeSection === section.id ? 2 : 8,
                            borderRadius: activeSection === section.id ? 2 : 999,
                        }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                    />
                </button>
            ))}
        </nav>
    );
}
