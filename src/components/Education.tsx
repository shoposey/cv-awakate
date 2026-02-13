"use client";

import { motion, useReducedMotion } from "motion/react";
import { GraduationCap, FlaskConical, BookOpen } from "lucide-react";
import { staggerContainer, staggerItem, viewportConfig } from "@/lib/animations";
import { GlassCard } from "@/components/ui/GlassCard";

const educationData = [
    {
        title: "Formación Autodidacta Especializada en IA",
        institution: "Aprendizaje Continuo",
        icon: BookOpen,
        description:
            "Investigación y desarrollo constante en tecnologías de vanguardia. Especialización en el ecosistema de IA generativa y automatización de procesos de negocio.",
        skills: ["LLMs & Prompt Engineering", "Automatización", "Agentes IA"]
    },
    {
        title: "Grado Superior en Marketing y Publicidad",
        institution: "CESUR (Formación Dual)",
        icon: GraduationCap,
        description:
            "Formación profesional especializada en marketing digital, estrategias de comunicación y análisis de mercado. Enfoque práctico con proyectos reales.",
        skills: ["Estrategia Digital", "SEO/SEM", "Analítica Web", "Gestión de Campañas"]
    },
    {
        title: "Estudios universitarios en Física",
        institution: "Universidad de Córdoba (UCO) - Inacabada",
        icon: FlaskConical,
        description:
            "Formación científica que me aportó una sólida base lógico-matemática. Desarrollé capacidades críticas para el análisis de datos complejos y la resolución sistemática de problemas.",
        skills: ["Lógica Matemática", "Análisis de Datos", "Resolución de Problemas", "Pensamiento Crítico"]
    },
];

export default function Education() {
    const shouldReduceMotion = useReducedMotion();

    return (
        <section id="formacion" className="section bg-white relative overflow-hidden">
            {/* Decorative background elements similar to Timeline but distinct */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0B3D2E]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#10B981]/5 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />

            <div className="section-content relative z-10">
                <motion.div
                    className="flex flex-col items-center text-center mb-16"
                    initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewportConfig}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-sm font-bold tracking-[0.2em] text-[#0B3D2E] uppercase mb-4 block opacity-80">
                        Formación & Conocimiento
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-[#0B3D2E] via-[#10B981] to-[#0B3D2E] bg-clip-text text-transparent leading-tight tracking-tight">
                        Aprendizaje & Evolución
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        Forjando una <span className="text-[#0B3D2E] font-bold">mentalidad analítica</span> impulsada por la innovación constante y el rigor científico.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                    variants={staggerContainer}
                    initial={shouldReduceMotion ? {} : "hidden"}
                    whileInView="visible"
                    viewport={viewportConfig}
                >
                    {educationData.map((item) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                variants={shouldReduceMotion ? {} : staggerItem}
                                className="h-full"
                            >
                                <GlassCard className="h-full flex flex-col hover:border-[#0B3D2E]/20 transition-colors duration-300">
                                    {/* Icon & Date Header */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-[#0B3D2E]/5 flex items-center justify-center text-[#0B3D2E] group-hover:bg-[#0B3D2E]/10 transition-colors">
                                            <Icon size={24} strokeWidth={1.5} />
                                        </div>

                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight group-hover:text-[#0B3D2E] transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm font-semibold text-[#10B981] mb-4 uppercase tracking-wide">
                                            {item.institution}
                                        </p>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                            {item.description}
                                        </p>
                                    </div>

                                    {/* Skills Footer */}
                                    <div className="mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex flex-wrap gap-2">
                                            {item.skills.map(skill => (
                                                <span
                                                    key={skill}
                                                    className="inline-flex items-center text-[10px] uppercase font-bold px-2 py-1 rounded-md bg-gray-50 text-gray-500 border border-gray-100"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
