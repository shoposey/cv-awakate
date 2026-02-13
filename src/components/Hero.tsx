"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Bot, Presentation, MapPin } from "lucide-react";
import Marquee from "react-fast-marquee";

const checklistItems = [
    { text: "IA & Automatización", icon: Bot },
    { text: "Formador", icon: Presentation },
    { text: "Málaga, España", icon: MapPin },
];

import { SiOpenai, SiAnthropic, SiStripe, SiMeta, SiSlack, SiPerplexity, SiGooglegemini, SiN8N, SiNotion, SiMake, SiSupabase, SiElevenlabs, SiCalendly } from "react-icons/si";

const marqueeSkills = [
    { name: "OPENAI", icon: SiOpenai, color: "text-green-600" },
    { name: "ANTHROPIC", icon: SiAnthropic, color: "text-stone-800" },
    { name: "STRIPE", icon: SiStripe, color: "text-indigo-500" },
    { name: "META", icon: SiMeta, color: "text-blue-600" },
    { name: "SLACK", icon: SiSlack, color: "text-purple-500" },
    { name: "PERPLEXITY", icon: SiPerplexity, color: "text-cyan-600" },
    { name: "GEMINI", icon: SiGooglegemini, color: "text-blue-500" },
    { name: "N8N", icon: SiN8N, color: "text-red-500" },
    { name: "NOTION", icon: SiNotion, color: "text-black" },
    { name: "MAKE", icon: SiMake, color: "text-purple-600" },
    { name: "SUPABASE", icon: SiSupabase, color: "text-green-500" },
    { name: "ELEVENLABS", icon: SiElevenlabs, color: "text-gray-800" },
    { name: "CALENDLY", icon: SiCalendly, color: "text-blue-500" },
];

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-cream"
        >
            {/* 3D Scene Background - Absolute to cover/integrate properly */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 flex-grow flex flex-col justify-center pt-20 pb-24 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-end h-full">

                    {/* Left Column: Text Content */}
                    <div className="lg:col-span-7 space-y-6 pt-10 lg:pt-0 self-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-4xl animate-wave origin-bottom-right inline-block">👋</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 leading-[1.1] mb-4 font-normal">
                                <span className="font-thin block">Hola!</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-bold block whitespace-nowrap">
                                    Soy Juan Carlos
                                </span>
                            </h1>

                            <div className="flex items-center gap-4 text-gray-600">
                                <div className="h-px w-16 bg-gray-400"></div>
                                <h2 className="text-2xl md:text-3xl font-medium flex items-center gap-2">
                                    Especialista en IA <Sparkles className="text-[#D9A441] w-6 h-6 animate-pulse" />
                                </h2>
                            </div>
                        </motion.div>

                        <motion.p
                            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg backdrop-blur-sm bg-cream/30 p-2 rounded-lg -ml-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            Transformo negocios mediante <strong>Inteligencia Artificial</strong> y automatización de procesos. Desarrollo soluciones avanzadas con Agentes IA para el mundo real.
                        </motion.p>

                        {/* Checklist */}
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {checklistItems.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full border border-gray-200/50 shadow-sm backdrop-blur-md">
                                    <item.icon className="text-accent w-4 h-4 flex-shrink-0" strokeWidth={2} />
                                    <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-wrap items-center gap-4 pt-4 relative z-30"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <a
                                href="mailto:jotacecarpio@gmail.com"
                                className="group relative px-8 py-4 bg-[#0B3D2E] text-white rounded-full font-semibold overflow-hidden shadow-lg shadow-[#0B3D2E]/20 hover:shadow-xl hover:shadow-[#0B3D2E]/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#0B3D2E] to-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <span className="relative flex items-center gap-2">
                                    Hablemos
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </a>

                        </motion.div>
                    </div>

                    {/* Right Column: Image - Adjusted for full visibility */}
                    <motion.div
                        className="lg:col-span-5 relative h-[50dvh] lg:h-[90vh] w-full flex items-end justify-center lg:justify-end pointer-events-none"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        {/* Image Container with improved sizing and positioning */}
                        <div className="relative w-full max-w-[650px] h-full z-10 flex items-end justify-center">
                            <div className="relative w-full h-full flex items-end">
                                <Image
                                    src="/green_shirt.png"
                                    alt="Juan Carlos Carpio Cámara"
                                    fill
                                    className="object-contain object-bottom drop-shadow-xl"
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Marquee Footer */}
            <motion.div
                className="absolute bottom-0 left-0 w-full bg-white/80 backdrop-blur-md py-4 z-20 border-t border-gray-200/50"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <Marquee gradient={true} gradientColor="#faf9f6" speed={40} className="text-gray-800 overflow-hidden py-1">
                    {marqueeSkills.map((skill, index) => (
                        <div key={index} className="flex items-center mx-8 md:mx-12 group cursor-default">
                            <skill.icon size={24} className={`${skill.color} mr-3 group-hover:scale-110 transition-transform duration-300`} />
                            <span className="text-sm md:text-base font-bold tracking-[0.1em] uppercase text-gray-400 group-hover:text-gray-900 transition-colors duration-300">{skill.name}</span>
                        </div>
                    ))}
                </Marquee>
            </motion.div>
        </section>
    );
}

