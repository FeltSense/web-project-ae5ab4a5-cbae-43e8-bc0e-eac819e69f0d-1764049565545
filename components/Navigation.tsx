"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-emerald-400/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-emerald-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-emerald-400 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
                <span className="text-slate-900 font-black text-2xl">FF</span>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight">
                FIT<span className="text-orange-500">FORCE</span>
              </h1>
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Command Center</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <a
              href="#services"
              className="relative px-6 py-2 text-white font-bold uppercase tracking-wider text-sm group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-slate-900 transition-colors">Services</span>
              <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a
              href="#pricing"
              className="relative px-6 py-2 text-white font-bold uppercase tracking-wider text-sm group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-slate-900 transition-colors">Pricing</span>
              <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a
              href="#contact"
              className="relative px-6 py-2 text-white font-bold uppercase tracking-wider text-sm group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-slate-900 transition-colors">Contact</span>
              <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            
            {/* CTA Button */}
            <div className="ml-4 relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-emerald-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
              <button className="relative px-8 py-3 bg-slate-900 rounded-lg font-black text-white uppercase tracking-wider text-sm border-2 border-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all">
                Deploy Now
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-12 h-12 bg-slate-800 border-2 border-emerald-400 rounded-lg flex items-center justify-center hover:bg-emerald-400 transition-colors group"
          >
            <div className="flex flex-col space-y-1.5">
              <span className={`w-6 h-0.5 bg-emerald-400 group-hover:bg-slate-900 transition-all transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-emerald-400 group-hover:bg-slate-900 transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-emerald-400 group-hover:bg-slate-900 transition-all transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 border-t border-emerald-400/20" : "max-h-0"
        }`}
      >
        <div className="px-4 py-6 space-y-3 bg-slate-800/50 backdrop-blur-lg">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-3 text-white font-bold uppercase tracking-wider text-sm bg-slate-900 border-l-4 border-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all"
          >
            Services
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-3 text-white font-bold uppercase tracking-wider text-sm bg-slate-900 border-l-4 border-orange-500 hover:bg-orange-500 hover:text-slate-900 transition-all"
          >
            Pricing
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-6 py-3 text-white font-bold uppercase tracking-wider text-sm bg-slate-900 border-l-4 border-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all"
          >
            Contact
          </a>
          <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-emerald-400 rounded-lg font-black text-slate-900 uppercase tracking-wider text-sm hover:shadow-lg hover:shadow-emerald-400/50 transition-all">
            Deploy Now
          </button>
        </div>
      </div>
    </nav>
  );
}
