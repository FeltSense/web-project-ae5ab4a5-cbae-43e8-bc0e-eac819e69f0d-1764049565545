"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Testimonials() {
  const [activeFile, setActiveFile] = useState(0);

  const missions = [
    {
      id: "MISSION-7823",
      name: "Marcus 'Tank' Rodriguez",
      rank: "Elite Operator",
      avatar: "https://i.pravatar.cc/150?img=12",
      classification: "DECLASSIFIED",
      missionDuration: "8 Months",
      stats: {
        strengthGain: "+145 lbs",
        bodyFatLost: "-18%",
        enduranceBoost: "+230%"
      },
      quote: "I came to FitForce after years of inconsistent training. The structured programs and competitive atmosphere pushed me beyond limits I didn't know existed. The trainers treat every session like a tactical operation - precise, intense, and results-driven.",
      badges: ["STRENGTH_TITAN", "FAT_DESTROYER", "CONSISTENCY_KING"],
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=500&fit=crop"
      }
    },
    {
      id: "MISSION-5491",
      name: "Sarah 'Blaze' Chen",
      rank: "Combat Specialist",
      avatar: "https://i.pravatar.cc/150?img=32",
      classification: "DECLASSIFIED",
      missionDuration: "6 Months",
      stats: {
        strengthGain: "+95 lbs",
        bodyFatLost: "-22%",
        enduranceBoost: "+185%"
      },
      quote: "FitForce changed my entire relationship with fitness. It's not just a gym - it's a brotherhood. The real-time progress tracking and competitive leaderboards kept me accountable. I went from struggling with bodyweight exercises to deadlifting 275 lbs.",
      badges: ["WARRIOR_ELITE", "CARDIO_CRUSHER", "TRANSFORMATION_HERO"],
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?w=400&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=400&h=500&fit=crop"
      }
    },
    {
      id: "MISSION-9267",
      name: "James 'Iron' Patterson",
      rank: "Veteran Commander",
      avatar: "https://i.pravatar.cc/150?img=52",
      classification: "DECLASSIFIED",
      missionDuration: "12 Months",
      stats: {
        strengthGain: "+210 lbs",
        bodyFatLost: "-31%",
        enduranceBoost: "+340%"
      },
      quote: "At 42, I thought my peak was behind me. FitForce proved me wrong. The military-style discipline combined with cutting-edge training science helped me achieve the best shape of my life. The data-driven approach means every rep counts toward a mission objective.",
      badges: ["LEGEND_STATUS", "AGE_DEFIER", "IRON_FORTRESS"],
      beforeAfter: {
        before: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
        after: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=500&fit=crop"
      }
    }
  ];

  const badgeIcons: { [key: string]: string } = {
    STRENGTH_TITAN: "💪",
    FAT_DESTROYER: "🔥",
    CONSISTENCY_KING: "👑",
    WARRIOR_ELITE: "⚔️",
    CARDIO_CRUSHER: "⚡",
    TRANSFORMATION_HERO: "🏆",
    LEGEND_STATUS: "🎖️",
    AGE_DEFIER: "🦅",
    IRON_FORTRESS: "🛡️"
  };

  const badgeNames: { [key: string]: string } = {
    STRENGTH_TITAN: "Strength Titan",
    FAT_DESTROYER: "Fat Destroyer",
    CONSISTENCY_KING: "Consistency King",
    WARRIOR_ELITE: "Warrior Elite",
    CARDIO_CRUSHER: "Cardio Crusher",
    TRANSFORMATION_HERO: "Transformation Hero",
    LEGEND_STATUS: "Legend Status",
    AGE_DEFIER: "Age Defier",
    IRON_FORTRESS: "Iron Fortress"
  };

  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <section id="testimonials" className="relative bg-slate-900 py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #64748b 1px, transparent 1px),
                           linear-gradient(to bottom, #64748b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Corner Brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-4 border-t-4 border-orange-500 animate-pulse"></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-4 border-t-4 border-emerald-400 animate-pulse"></div>
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-4 border-b-4 border-emerald-400 animate-pulse"></div>
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-4 border-b-4 border-orange-500 animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Military Style */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-orange-500/10 border-2 border-orange-500 px-6 py-2 clip-corner">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-orange-500 font-mono text-sm tracking-widest">CLASSIFIED FILES</span>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            MISSION <span className="text-orange-500">COMPLETE</span>
          </h2>
          <p className="text-slate-400 text-lg font-mono max-w-2xl mx-auto">
            Declassified transformation reports from operatives who conquered their fitness objectives
          </p>
        </div>

        {/* Mission File Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {missions.map((mission, index) => (
            <button
              key={mission.id}
              onClick={() => setActiveFile(index)}
              className={`group relative px-6 py-3 font-mono text-sm font-bold tracking-wider transition-all duration-300 ${
                activeFile === index
                  ? 'bg-orange-500 text-slate-900 scale-105'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-orange-500'
              }`}
            >
              <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-emerald-400"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-emerald-400"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-emerald-400"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-emerald-400"></div>
              {mission.id}
            </button>
          ))}
        </div>

        {/* Active Mission File */}
        <div className="relative">
          {missions.map((mission, index) => (
            <div
              key={mission.id}
              className={`transition-all duration-500 ${
                activeFile === index ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              {/* Main File Container */}
              <div className="bg-slate-800 border-4 border-slate-700 relative overflow-hidden">
                {/* Classification Banner */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-emerald-400 animate-pulse"></div>
                    <span className="text-slate-900 font-mono font-bold text-sm tracking-widest">
                      {mission.classification}
                    </span>
                  </div>
                  <span className="text-slate-900 font-mono font-bold text-sm">
                    FILE: {mission.id}
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Left: Transformation Photos with Slider */}
                  <div className="space-y-6">
                    <div className="relative h-[500px] bg-slate-900 overflow-hidden group">
                      {/* Before/After Labels */}
                      <div className="absolute top-4 left-4 z-20 bg-slate-900/90 border-2 border-orange-500 px-4 py-2">
                        <span className="text-orange-500 font-mono text-xs font-bold tracking-wider">BEFORE</span>
                      </div>
                      <div className="absolute top-4 right-4 z-20 bg-slate-900/90 border-2 border-emerald-400 px-4 py-2">
                        <span className="text-emerald-400 font-mono text-xs font-bold tracking-wider">AFTER</span>
                      </div>

                      {/* Image Container */}
                      <div className="relative h-full w-full">
                        {/* Before Image */}
                        <div className="absolute inset-0">
                          <Image
                            src={mission.beforeAfter.before}
                            alt={`${mission.name} before`}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* After Image with Clip */}
                        <div 
                          className="absolute inset-0 transition-all duration-100"
                          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                          <Image
                            src={mission.beforeAfter.after}
                            alt={`${mission.name} after`}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Slider Line */}
                        <div 
                          className="absolute top-0 bottom-0 w-1 bg-orange-500 z-10 cursor-ew-resize"
                          style={{ left: `${sliderPosition}%` }}
                        >
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full border-4 border-slate-900 flex items-center justify-center">
                            <div className="flex gap-1">
                              <div className="w-0.5 h-4 bg-slate-900"></div>
                              <div className="w-0.5 h-4 bg-slate-900"></div>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Overlay */}
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={sliderPosition}
                          onChange={(e) => setSliderPosition(Number(e.target.value))}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                        />
                      </div>

                      {/* Scan Lines Effect */}
                      <div className="absolute inset-0 pointer-events-none opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-400 to-transparent animate-scan"></div>
                      </div>
                    </div>

                    {/* Achievement Badges */}
                    <div className="grid grid-cols-3 gap-3">
                      {mission.badges.map((badge) => (
                        <div
                          key={badge}
                          className="bg-slate-900 border-2 border-emerald-400 p-4 text-center hover:scale-105 transition-transform cursor-pointer group"
                        >
                          <div className="text-3xl mb-2 group-hover:scale-125 transition-transform">
                            {badgeIcons[badge]}
                          </div>
                          <div className="text-emerald-400 font-mono text-xs font-bold tracking-wider">
                            {badgeNames[badge]}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Operator Details & Stats */}
                  <div className="space-y-6">
                    {/* Operator Profile */}
                    <div className="bg-slate-900 border-2 border-slate-700 p-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="relative">
                          <div className="w-20 h-20 relative">
                            <Image
                              src={mission.avatar}
                              alt={mission.name}
                              width={80}
                              height={80}
                              className="rounded-none border-4 border-orange-500"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 bg-emerald-400 w-6 h-6 flex items-center justify-center">
                            <span className="text-slate-900 text-xs font-bold">✓</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-black text-white mb-1 tracking-tight">
                            {mission.name}
                          </h3>
                          <div className="inline-block bg-orange-500 px-3 py-1 mb-2">
                            <span className="text-slate-900 font-mono text-xs font-bold tracking-wider">
                              {mission.rank}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 animate-pulse"></div>
                            <span className="text-emerald-400 font-mono text-sm">
                              Mission Duration: {mission.missionDuration}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Mission Stats */}
                      <div className="space-y-4">
                        <div className="bg-slate-800 p-4 border-l-4 border-orange-500">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-400 font-mono text-xs uppercase tracking-wider">
                              Strength Gain
                            </span>
                            <span className="text-orange-500 font-mono text-lg font-bold">
                              {mission.stats.strengthGain}
                            </span>
                          </div>
                          <div className="h-2 bg-slate-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 w-[85%] animate-pulse"></div>
                          </div>
                        </div>

                        <div className="bg-slate-800 p-4 border-l-4 border-emerald-400">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-400 font-mono text-xs uppercase tracking-wider">
                              Body Fat Lost
                            </span>
                            <span className="text-emerald-400 font-mono text-lg font-bold">
                              {mission.stats.bodyFatLost}
                            </span>
                          </div>
                          <div className="h-2 bg-slate-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 w-[78%] animate-pulse"></div>
                          </div>
                        </div>

                        <div className="bg-slate-800 p-4 border-l-4 border-orange-500">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-slate-400 font-mono text-xs uppercase tracking-wider">
                              Endurance Boost
                            </span>
                            <span className="text-orange-500 font-mono text-lg font-bold">
                              {mission.stats.enduranceBoost}
                            </span>
                          </div>
                          <div className="h-2 bg-slate-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-emerald-400 w-[92%] animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mission Report / Testimonial */}
                    <div className="bg-slate-900 border-2 border-slate-700 p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-emerald-400"></div>
                        <span className="text-emerald-400 font-mono text-sm font-bold tracking-wider">
                          MISSION REPORT
                        </span>
                      </div>
                      <blockquote className="text-slate-300 leading-relaxed text-base">
                        "{mission.quote}"
                      </blockquote>
                    </div>

                    {/* Status Indicators */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-slate-900 border-2 border-emerald-400 p-4 text-center">
                        <div className="text-emerald-400 text-3xl font-black mb-1">100%</div>
                        <div className="text-slate-400 font-mono text-xs uppercase tracking-wider">
                          Mission Success
                        </div>
                      </div>
                      <div className="bg-slate-900 border-2 border-orange-500 p-4 text-center">
                        <div className="text-orange-500 text-3xl font-black mb-1">A+</div>
                        <div className="text-slate-400 font-mono text-xs uppercase tracking-wider">
                          Performance Rating
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 border-4 border-orange-500 p-8 max-w-3xl mx-auto relative overflow-hidden">
            {/* Animated Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 bg-emerald-400 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 bg-orange-500 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-orange-500 animate-pulse"></div>

            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              READY TO START YOUR <span className="text-orange-500">MISSION?</span>
            </h3>
            <p className="text-slate-400 font-mono mb-6 text-sm">
              Join the ranks of elite operators who transformed their lives at FitForce
            </p>
            <button className="group relative bg-orange-500 hover:bg-orange-600 text-slate-900 font-mono font-bold text-lg px-12 py-4 transition-all duration-300 hover:scale-105 overflow-hidden">
              <span className="relative z-10">INITIATE TRANSFORMATION</span>
              <div className="absolute inset-0 bg-emerald-400 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="absolute inset-0 flex items-center justify-center text-slate-900 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                BEGIN NOW →
              </span>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .clip-corner {
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px));
        }
      `}</style>
    </section>
  );
}
