import React from "react";
// Pastikan jalur impor ini sesuai dengan letak file hasil unduhan Shadcn
import { EncryptedText } from "./ui/encrypted-text";

export default function Footer() {
  return (
    <footer className="w-full py-24 flex flex-col items-center justify-center bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center">
        <p className="text-slate-400 text-sm tracking-[0.3em] uppercase mb-4">
          End of Portfolio
        </p>

        {/* Komponen Encrypted Text yang Memukau */}
        <EncryptedText
          text="THANK YOU"
          className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-500 tracking-tight"
          revealDelayMs={70} // Mengatur seberapa lambat efek acaknya berhenti
        />

        <p className="text-slate-400 text-base mt-8 max-w-lg leading-relaxed">
          Terima kasih telah meluangkan waktu untuk menelusuri perjalanan
          digital saya. Jangan ragu untuk menghubungi saya jika ada peluang
          kolaborasi hebat ke depannya!
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-600">
          <span>© 2026 Crafted by Kornelius Jonathan.</span>
          <span className="hidden sm:block">•</span>
          <span>Built with React & Aceternity UI.</span>
        </div>
      </div>
    </footer>
  );
}
