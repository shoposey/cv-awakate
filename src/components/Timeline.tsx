"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { Briefcase, MapPin, Calendar, Mic, Award, Building2 } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

interface TimelineEntry {
    title: string;
    organization: string;
    date: string;
    description: string;
    logo?: string;
    logoAlt?: string;
    logoBg?: string;
    type: "speaker" | "professional";
    skills?: string[];
    location?: string;
}

const speakerEntries: TimelineEntry[] = [
    {
        title: "III Congreso Talento, Ciencia y Juventud",
        organization: "Diputación de Málaga",
        date: "Febrero 2026",
        description:
            'Ponencia: "IA: ¿Viene a sustituirnos o a darnos superpoderes?" — Análisis del impacto real de la IA en el futuro profesional de los jóvenes.',
        type: "speaker",
        skills: ["Ponencia", "Futuro del Trabajo"],
        location: "Málaga"
    },
    {
        title: "Vivero de Empresas – Alhaurín de la Torre",
        organization: "Vivero de Empresas",
        date: "Noviembre 2025",
        description:
            'Taller: "IA: Cómo usarla en tu negocio" — Formación práctica para empresarios sobre implementación de herramientas generativas en PYMEs.',
        type: "speaker",
        skills: ["Taller Práctico", "PYMEs"],
        location: "Alhaurín de la Torre"
    },
    {
        title: "Máster en Dirección y Gestión de Marketing Digital",
        organization: "Universidad de Málaga (UMA)",
        date: "Octubre 2025",
        description:
            'Taller: "La IA en la Generación de Contenido" — Sesión especializada para postgrado sobre flujos de trabajo creativos asistidos por IA.',
        type: "speaker",
        skills: ["Formación Postgrado", "IA Creativa"],
        location: "Málaga"
    },
    {
        title: "Mesa por el Empleo",
        organization: "La Noria (Centro de Innovación Social)",
        date: "Mayo 2025",
        description:
            'Ponencia: "IA aplicada al empleo" — Estrategias para mejorar la empleabilidad mediante herramientas de IA.',
        type: "speaker",
        skills: ["Empleabilidad", "Impacto Social"],
        location: "Málaga"
    },
    {
        title: "II Congreso Talento, Ciencia y Juventud",
        organization: "Diputación de Málaga",
        date: "Diciembre 2024",
        description:
            'Ponencia: "¿Ha venido la IA a dominar el mundo o solo a ayudarte con tus deberes?" — Charla divulgativa sobre el uso ético y productivo de la tecnología.',
        type: "speaker",
        skills: ["Divulgación", "Ética IA"],
        location: "Málaga"
    },
];

const professionalEntries: TimelineEntry[] = [
    {
        title: "Founder",
        organization: "Awakate | Agencia de IA",
        date: "Sep 2025 – Actualidad",
        description:
            "Consultoría estratégica de IA. Lidero la transformación digital de negocios mediante la automatización de procesos y el despliegue de agentes inteligentes.",
        logo: "/isologo_awakate.png",
        logoAlt: "Awakate",
        type: "professional",
        skills: ["Estrategia IA", "Automatización", "Dirección"],
        location: "Remoto / Híbrido"
    },
    {
        title: "Co-Founder",
        organization: "MDMarketing | Agencia de Marketing Digital",
        date: "Sep 2025 – Actualidad",
        description:
            "Agencia de Marketing Digital. Desarrollo de estrategias integrales potenciadas por tecnología para maximizar el ROI de clientes.",
        logo: "/logo_mdmarketing.png",
        logoBg: "bg-black",
        logoAlt: "MDMarketing",
        type: "professional",
        skills: ["Marketing Digital", "Growth", "Gestión"],
        location: "Remoto"
    },
    {
        title: "IA Specialist",
        organization: "WOM Marketing",
        date: "Mar 2025 – Dic 2025",
        description:
            "Optimización de flujos de trabajo internos mediante la implementación de herramientas de IA generativa y automátización.",
        logo: "/wom.png",
        logoAlt: "WOM Marketing",
        type: "professional",
        skills: ["Implementación IA", "Optimización de Procesos"],
        location: "Málaga"
    },
    {
        title: "Prácticas & Apoyo Digital",
        organization: "YoPongoElHielo",
        date: "Ene 2024 – Feb 2025",
        description:
            "Gestión operativa de ecommerce, soporte en estrategias de marketing digital y análisis de datos.",
        logo: "/yopongoelhielo.png",
        logoAlt: "YoPongoElHielo",
        type: "professional",
        skills: ["Ecommerce", "Analítica"],
        location: "Málaga"
    },
];



function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
    const isProfessional = entry.type === "professional";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0 mb-12 last:mb-0 group"
        >
            {/* Mobile Timeline Line (Hidden on desktop for split view, but we are keeping split view logic simple) */}
            <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#0B3D2E]/20 to-[#10B981]/20 md:hidden" />

            {/* Dot */}
            <div className={`absolute left-[3px] top-6 w-3 h-3 rounded-full border-2 border-white shadow-sm z-10 md:hidden ${isProfessional ? 'bg-[#0B3D2E]' : 'bg-[#10B981]'}`} />

            <GlassCard>
                <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex justify-between items-start gap-4">
                        <div className="flex gap-4 items-center">
                            {entry.logo ? (
                                <div className={`w-16 h-16 rounded-xl ${entry.logoBg || 'bg-white'} shadow-sm border border-gray-100 p-1 flex items-center justify-center shrink-0`}>
                                    <Image
                                        src={entry.logo}
                                        alt={entry.logoAlt || entry.organization}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            ) : (
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isProfessional ? 'bg-[#0B3D2E]/10 text-[#0B3D2E]' : 'bg-[#10B981]/10 text-[#059669]'}`}>
                                    {isProfessional ? <Briefcase className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                                </div>
                            )}
                            <div>
                                <h4 className="font-bold text-lg text-gray-900 leading-tight">
                                    {entry.title}
                                </h4>
                                <div className="flex items-center gap-2 text-sm text-gray-600 mt-1 font-medium">
                                    <Building2 className="w-3.5 h-3.5" />
                                    {entry.organization}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-gray-500 uppercase tracking-wide">
                        <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                            <Calendar className="w-3.5 h-3.5 text-gray-400" />
                            {entry.date}
                        </div>
                        {entry.location && (
                            <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-1 rounded-md border border-gray-100">
                                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                {entry.location}
                            </div>
                        )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {entry.description}
                    </p>

                    {/* Skills Badges */}
                    {entry.skills && (
                        <div className="flex flex-wrap gap-2 pt-2">
                            {entry.skills.map(skill => (
                                <span
                                    key={skill}
                                    className={`text-xs px-2.5 py-1 rounded-full font-medium border ${isProfessional
                                        ? 'bg-[#0B3D2E]/5 text-[#0B3D2E] border-[#0B3D2E]/10'
                                        : 'bg-[#10B981]/5 text-[#047857] border-[#10B981]/20'
                                        }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </GlassCard>
        </motion.div>
    );
}

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="experiencia" className="relative py-24 bg-gray-50/50" ref={containerRef}>
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#0B3D2E]/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 relative">
                <motion.div
                    style={{ opacity }}
                    className="text-center mb-16"
                >
                    <span className="text-sm font-bold tracking-[0.2em] text-[#0B3D2E] uppercase mb-4 block opacity-80">
                        Experiencia Profesional
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-[#0B3D2E] via-[#10B981] to-[#0B3D2E] bg-clip-text text-transparent leading-tight tracking-tight">
                        Trayectoria & Impacto
                    </h2>
                    <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium leading-relaxed">
                        Transformando negocios mediante <span className="text-[#0B3D2E] font-bold">IA estratégica</span> y automatización de procesos.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 relative">
                    {/* Center Line for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2">
                        <motion.div
                            style={{ scaleY, transformOrigin: "top" }}
                            className="w-full h-full bg-gradient-to-b from-[#0B3D2E] via-[#10B981] to-[#0B3D2E]"
                        />
                    </div>

                    {/* Speaker Column */}
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-10 lg:justify-end lg:pr-12">
                            <div className="p-2 bg-[#10B981]/10 rounded-lg text-[#059669]">
                                <Award className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Ponente y Formador
                            </h3>
                        </div>
                        <div className="space-y-8 lg:pr-12">
                            {speakerEntries.map((entry, i) => (
                                <TimelineItem key={i} entry={entry} index={i} />
                            ))}
                        </div>
                    </div>

                    {/* Professional Column */}
                    <div className="relative">
                        <div className="flex items-center gap-3 mb-10 lg:pl-12">
                            <div className="p-2 bg-[#0B3D2E]/10 rounded-lg text-[#0B3D2E]">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">
                                Experiencia Profesional
                            </h3>
                        </div>
                        <div className="space-y-8 lg:pl-12">
                            {professionalEntries.map((entry, i) => (
                                <TimelineItem key={i} entry={entry} index={i + 10} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
