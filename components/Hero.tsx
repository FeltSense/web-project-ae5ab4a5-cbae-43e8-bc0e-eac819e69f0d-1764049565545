"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [forceLevel, setForceLevel] = useState(73);
  const [activeMembers, setActiveMembers] = useState(142);
  const [currentAchievement, setCurrentAchievement] = useState(0);

  const achievements = [
    { name: "Sarah K.", rank: "ELITE OPERATIVE", stat: "Lost 45lbs in 90 days", badge: "🏆" },
    { name: "Marcus T.", rank: "FORCE COMMANDER", stat: "Deadlift: 405lbs", badge: "💪" },
    { name: "Elena R.", rank: "TACTICAL SPECIALIST", stat: "Marathon in 3:12:45", badge: "⚡" },
    { name: "James P.", rank: "STRENGTH CAPTAIN", stat: "Bench Press: 315lbs", badge: "🎯" },
  ];

  useEffect(() => {
    // Animate Force Level
    const forceLevelInterval = setInterval(() => {
      setForceLevel(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.max(65, Math.min(95, newVal));
      });
    }, 2000);

    // Animate Active Members
    const membersInterval = setInterval(() => {
      setActiveMembers(prev => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(120, Math.min(180, prev + change));
      });
    }, 3000);

    // Rotate Achievements
    const achievementInterval = setInterval(() => {
      setCurrentAchievement(prev => (prev + 1) % achievements.length);
    }, 4000);

    return () => {
      clearInterval(forceLevelInterval);
      clearInterval(membersInterval);
      clearInterval(achievementInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 overflow-hidden pt-20">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#emerald-400 1px, transparent 1px), linear-gradient(90deg, #emerald-400 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SIDE - Mission Control Interface */}
          <div className="space-y-8">
            {/* Mission Status Header */}
            <div className="inline-flex items-center space-x-2 bg-emerald-400/10 border border-emerald-400 rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
              </span>
              <span className="text-emerald-400 font-bold text-sm uppercase tracking-wider">Mission Active</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none">
                TRANSFORM INTO
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-400 mt-2">
                  ELITE FORCE
                </span>
              </h1>
              <p className="text-xl text-slate-300 font-medium max-w-xl">
                Military-grade precision training meets data-driven results. Join the command center where every rep counts.
              </p>
            </div>

            {/* Force Level Meter */}
            <div className="bg-slate-900/50 backdrop-blur-md border-2 border-emerald-400/30 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-emerald-400 font-black text-sm uppercase tracking-widest">Force Level</h3>
                  <p className="text-white text-3xl font-black">{forceLevel}%</p>
                </div>
                <div className="text-right">
                  <h3 className="text-orange-500 font-black text-sm uppercase tracking-widest">Active Now</h3>
                  <p className="text-white text-3xl font-black">{activeMembers}</p>
                </div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="relative h-4 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <div 
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-orange-500 via-emerald-400 to-orange-500 bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] transition-all duration-1000 ease-out"
                  style={{ width: `${forceLevel}%` }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-1">
                    {[...Array(20)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-1 h-2 ${i < (forceLevel / 5) ? 'bg-white/50' : 'bg-slate-700'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="bg-slate-800 rounded px-3 py-2 border-l-2 border-emerald-400">
                  <p className="text-emerald-400 text-xs font-bold">CAPACITY</p>
                  <p className="text-white text-lg font-black">HIGH</p>
                </div>
                <div className="bg-slate-800 rounded px-3 py-2 border-l-2 border-orange-500">
                  <p className="text-orange-500 text-xs font-bold">ENERGY</p>
                  <p className="text-white text-lg font-black">PEAK</p>
                </div>
                <div className="bg-slate-800 rounded px-3 py-2 border-l-2 border-emerald-400">
                  <p className="text-emerald-400 text-xs font-bold">STATUS</p>
                  <p className="text-white text-lg font-black">LIVE</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative group flex-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-emerald-400 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
                <button className="relative w-full px-8 py-5 bg-slate-900 rounded-xl font-black text-white uppercase tracking-wider text-lg border-2 border-emerald-400 hover:bg-emerald-400 hover:text-slate-900 transition-all flex items-center justify-center space-x-2">
                  <span>Start Mission</span>
                  <span className="text-2xl">→</span>
                </button>
              </div>
              <button className="flex-1 px-8 py-5 bg-slate-800/50 backdrop-blur-sm rounded-xl font-bold text-white uppercase tracking-wider text-lg border-2 border-slate-700 hover:border-orange-500 hover:bg-slate-800 transition-all">
                View Intel
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Achievement Dashboard */}
          <div className="space-y-6">
            {/* Main Achievement Showcase */}
            <div className="relative h-[500px] bg-slate-900/50 backdrop-blur-md border-2 border-orange-500/30 rounded-2xl overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
                alt="FitForce Training"
                fill
                className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
              />
              
              {/* Achievement Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  {/* Rank Badge */}
                  <div className="inline-flex items-center space-x-3 bg-slate-900/90 border-2 border-orange-500 rounded-lg px-6 py-3 backdrop-blur-sm">
                    <span className="text-4xl">{achievements[currentAchievement].badge}</span>
                    <div>
                      <p className="text-orange-500 font-black text-xs uppercase tracking-widest">
                        {achievements[currentAchievement].rank}
                      </p>
                      <p className="text-white font-black text-2xl">
                        {achievements[currentAchievement].name}
                      </p>
                    </div>
                  </div>

                  {/* Achievement Stat */}
                  <div className="bg-slate-900/90 border-2 border-emerald-400 rounded-lg p-6 backdrop-blur-sm">
                    <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-2">
                      Achievement Unlocked
                    </p>
                    <p className="text-white text-3xl font-black">
                      {achievements[currentAchievement].stat}
                    </p>
                  </div>

                  {/* Progress Indicators */}
                  <div className="flex space-x-2">
                    {achievements.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                          index === currentAchievement
                            ? 'bg-emerald-400'
                            : 'bg-slate-700'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-900/50 backdrop-blur-md border-2 border-emerald-400/30 rounded-xl p-4 hover:border-emerald-400 transition-all group">
                <div className="text-emerald-400 text-3xl font-black mb-2 group-hover:scale-110 transition-transform">
                  2.4K+
                </div>
                <div className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                  Active Operatives
                </div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-md border-2 border-orange-500/30 rounded-xl p-4 hover:border-orange-500 transition-all group">
                <div className="text-orange-500 text-3xl font-black mb-2 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                  Mission Success
                </div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur-md border-2 border-emerald-400/30 rounded-xl p-4 hover:border-emerald-400 transition-all group">
                <div className="text-emerald-400 text-3xl font-black mb-2 group-hover:scale-110 transition-transform">
                  24/7
                </div>
                <div className="text-slate-300 text-xs font-bold uppercase tracking-wider">
                  Command Ready
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scan Line Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[scan_3s_ease-in-out_infinite]"></div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }
        @keyframes scan {
          0%, 100% { opacity: 0; transform: translateX(-100%); }
          50% { opacity: 1; transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
