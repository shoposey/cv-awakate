"use client";

import { motion } from "motion/react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

import { Brain, Rocket, Sparkles } from "lucide-react";

export default function AboutMe() {
    return (
        <AnimatedSection id="sobre-mi" className="bg-white py-20 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B3D2E]/5 rounded-full blur-3xl -z-10 opacity-50" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#10B981]/10 rounded-full blur-3xl -z-10 opacity-50" />

            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="text-sm font-bold tracking-[0.2em] text-[#0B3D2E] uppercase mb-4 block opacity-80">
                        Mi Propósito
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-[#0B3D2E] via-[#10B981] to-[#0B3D2E] bg-clip-text text-transparent leading-tight tracking-tight">
                        Visión & Estrategia
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    {/* Image Column */}
                    <motion.div
                        className="md:col-span-4 relative flex justify-center"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Reduced image size, removed frame/rotation/background */}
                        <div className="relative z-10 rounded-2xl overflow-hidden drop-shadow-2xl max-w-xs w-full grayscale transition-all duration-500 hover:grayscale-0">
                            <Image
                                src="/yo_dibujo.png"
                                alt="Juan Carlos Carpio"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content Column */}
                    <div className="md:col-span-8 space-y-8 pl-0 md:pl-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Democratizando el futuro mediante IA práctica y automatización estratégica.
                            </h3>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-[#0B3D2E] to-[#10B981] rounded-full mb-8" />

                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    De la formación científica a la automatización de negocios.
                                    Me dedico a construir sistemas de{" "}
                                    <span className="text-[#D9A441] font-bold inline-flex items-center gap-1">
                                        Inteligencia Artificial <Brain className="w-4 h-4" />
                                    </span>{" "}
                                    que resuelven problemas reales en empresas.
                                </p>

                                <p>
                                    En la formación, mi misión es desmitificar la IA: ni magia negra ni el fin
                                    del mundo. A través de ponencias dinámicas y talleres prácticos, demuestro
                                    cómo esta tecnología ha llegado para darnos{" "}
                                    <span className="text-[#10B981] font-bold inline-flex items-center gap-1">
                                        &ldquo;superpoderes&rdquo; <Rocket className="w-4 h-4" />
                                    </span>{" "}
                                    productivos y creativos.
                                </p>

                                <div className="pt-6 pl-6 border-l-4 border-yellow-400 italic text-gray-600 bg-gray-50/50 rounded-r-xl p-4">
                                    <div className="flex items-center gap-2 text-yellow-600 font-semibold mb-2 not-italic">
                                        <Sparkles className="w-5 h-5" />
                                        <span>Mi Visión</span>
                                    </div>
                                    <p>
                                        &quot;Ayudando tanto a pymes y grandes empresas como a jóvenes talentos
                                        a adaptarse y liderar en esta nueva era digital.&quot;
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
}
