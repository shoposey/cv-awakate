import React from "react";

export function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`relative overflow-hidden bg-white/60 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:bg-white/80 hover:scale-[1.01] ${className}`}>
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-[#0B3D2E]/20 to-[#10B981]/20 rounded-full blur-2xl pointer-events-none" />
            {children}
        </div>
    );
}
