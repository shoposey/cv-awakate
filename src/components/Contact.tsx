"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
    Mail,
    Linkedin,
    Phone,
    Copy,
    Check,
    ArrowUpRight,
    MapPin,
} from "lucide-react";
import { viewportConfig } from "@/lib/animations";

export default function Contact() {
    const shouldReduceMotion = useReducedMotion();
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const handleCopy = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(label);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const contactData = [
        {
            id: "email",
            label: "Email",
            value: "jotacecarpio@gmail.com",
            display: "jotacecarpio@gmail.com",
            icon: Mail,
            action: "copy",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
            bg: "bg-[#0B3D2E]/5 border border-[#0B3D2E]/10 hover:bg-[#0B3D2E]/10",
            iconColor: "text-[#0B3D2E]",
        },
        {
            id: "linkedin",
            label: "LinkedIn",
            value: "https://www.linkedin.com/in/jotacecarpio/",
            display: "Conectemos",
            icon: Linkedin,
            action: "link",
            colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
            bg: "bg-gradient-to-br from-[#0B3D2E] to-[#10B981] text-white hover:shadow-xl hover:shadow-[#0B3D2E]/20",
            iconColor: "text-white",
            textColor: "text-white",
        },
        {
            id: "phone",
            label: "Teléfono",
            value: "+34694231179",
            display: "+34 694 23 11 79",
            icon: Phone,
            action: "copy",
            colSpan: "col-span-1 md:col-span-1 lg:col-span-1",
            bg: "bg-white border border-gray-100 hover:border-[#10B981]/20 hover:bg-gray-50",
            iconColor: "text-[#10B981]",
        },
        {
            id: "location",
            label: "Ubicación",
            value: "",
            display: "Málaga, España",
            icon: MapPin,
            action: "none",
            colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
            bg: "bg-gray-900 text-white hover:bg-black",
            iconColor: "text-gray-400",
            textColor: "text-gray-300",
        },
    ];

    return (
        <section id="contacto" className="section relative overflow-hidden py-32">
            <div className="section-content relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Header Section */}
                    <motion.div
                        initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={viewportConfig}
                        transition={{ duration: 0.6 }}
                        className="lg:sticky lg:top-32"
                    >
                        <span className="text-sm font-bold tracking-[0.2em] text-[#0B3D2E] uppercase mb-4 block opacity-80">
                            Contacto
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 mb-8 leading-[0.9] bg-gradient-to-r from-[#0B3D2E] via-[#10B981] to-[#0B3D2E] bg-clip-text text-transparent">
                            Hablemos <br />
                            de futuro.
                        </h2>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-md font-medium leading-relaxed mb-12">
                            Colaborando para convertir desafíos complejos en soluciones de <span className="text-[#0B3D2E] font-bold">IA tangibles</span>.
                        </p>
                    </motion.div>

                    {/* Bento Grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full"
                        initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={viewportConfig}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {contactData.map((item) => {
                            const Icon = item.icon;
                            const isCopyable = item.action === "copy";
                            const isLink = item.action === "link";

                            return (
                                <motion.div
                                    key={item.id}
                                    className={`${item.colSpan} ${item.bg} rounded-[2.5rem] p-10 relative group cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl shadow-sm overflow-hidden flex flex-col justify-between min-h-[220px]`}
                                    onClick={() => {
                                        if (isCopyable) handleCopy(item.value, item.label);
                                        if (isLink) window.open(item.value, "_blank");
                                    }}
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div
                                            className={`p-4 rounded-2xl bg-white/10 ${item.iconColor || "text-gray-900"
                                                } backdrop-blur-md border border-white/20`}
                                        >
                                            {copiedField === item.label ? (
                                                <Check size={28} />
                                            ) : (
                                                <Icon size={28} />
                                            )}
                                        </div>
                                        {isLink && (
                                            <ArrowUpRight
                                                size={24}
                                                className={`opacity-50 group-hover:opacity-100 transition-opacity ${item.textColor || "text-gray-900"
                                                    }`}
                                            />
                                        )}
                                        {isCopyable && (
                                            <Copy
                                                size={20}
                                                className={`opacity-0 group-hover:opacity-50 transition-opacity ${item.textColor ? "text-white" : "text-gray-400"
                                                    }`}
                                            />
                                        )}
                                    </div>

                                    <div>
                                        <p
                                            className={`text-[10px] font-black uppercase tracking-[0.25em] mb-2 opacity-60 ${item.textColor || "text-gray-600"
                                                }`}
                                        >
                                            {item.label}
                                        </p>
                                        <p
                                            className={`text-lg md:text-xl lg:text-2xl font-black tracking-tight whitespace-nowrap ${item.textColor || "text-gray-900"
                                                }`}
                                        >
                                            {item.display}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
