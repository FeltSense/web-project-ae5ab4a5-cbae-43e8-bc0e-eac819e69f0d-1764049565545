"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Pricing() {
  const [selectedRank, setSelectedRank] = useState<string>('soldier');
  const [hoveredRank, setHoveredRank] = useState<string | null>(null);

  const ranks = [
    {
      id: 'recruit',
      name: 'RECRUIT',
      level: 'LEVEL 1',
      badge: '◢',
      price: 29,
      popular: false,
      clearanceLevel: 'BASIC ACCESS',
      description: 'Begin your transformation journey',
      features: [
        { name: '24/7 Base Access', locked: false, category: 'access' },
        { name: 'Locker & Shower Facilities', locked: false, category: 'amenities' },
        { name: 'Cardio Zone Unlimited', locked: false, category: 'training' },
        { name: 'Basic Equipment Access', locked: false, category: 'training' },
        { name: 'Mobile App Integration', locked: false, category: 'tech' },
        { name: 'Group Classes', locked: true, category: 'training' },
        { name: 'Personal Training', locked: true, category: 'training' },
        { name: 'Recovery Zone', locked: true, category: 'amenities' },
      ],
      energyLevel: 45,
      color: 'slate',
    },
    {
      id: 'soldier',
      name: 'SOLDIER',
      level: 'LEVEL 2',
      badge: '◆',
      price: 29,
      popular: true,
      clearanceLevel: 'ENHANCED ACCESS',
      description: 'Unlock your full potential',
      features: [
        { name: '24/7 Base Access', locked: false, category: 'access' },
        { name: 'Locker & Shower Facilities', locked: false, category: 'amenities' },
        { name: 'Cardio Zone Unlimited', locked: false, category: 'training' },
        { name: 'Full Equipment Access', locked: false, category: 'training' },
        { name: 'Mobile App Integration', locked: false, category: 'tech' },
        { name: 'Unlimited Group Classes', locked: false, category: 'training' },
        { name: '2 Personal Training Sessions/mo', locked: false, category: 'training' },
        { name: 'Recovery Zone Access', locked: false, category: 'amenities' },
        { name: 'Nutrition Planning Portal', locked: false, category: 'tech' },
        { name: 'Guest Pass (2x/month)', locked: false, category: 'perks' },
        { name: 'Elite Workshops', locked: true, category: 'training' },
        { name: 'VIP Lounge', locked: true, category: 'amenities' },
      ],
      energyLevel: 75,
      color: 'orange',
    },
    {
      id: 'commander',
      name: 'COMMANDER',
      level: 'LEVEL 3',
      badge: '★',
      price: 29,
      popular: false,
      clearanceLevel: 'MAXIMUM ACCESS',
      description: 'Elite status. Total domination.',
      features: [
        { name: '24/7 Priority Base Access', locked: false, category: 'access' },
        { name: 'Private Locker Suite', locked: false, category: 'amenities' },
        { name: 'All Zones Unlimited', locked: false, category: 'training' },
        { name: 'Premium Equipment Priority', locked: false, category: 'training' },
        { name: 'Mobile App + Wearables Sync', locked: false, category: 'tech' },
        { name: 'Unlimited Group Classes', locked: false, category: 'training' },
        { name: 'Weekly Personal Training', locked: false, category: 'training' },
        { name: 'Recovery Zone + Spa Access', locked: false, category: 'amenities' },
        { name: 'Custom Nutrition + Meal Plans', locked: false, category: 'tech' },
        { name: 'Guest Pass (Unlimited)', locked: false, category: 'perks' },
        { name: 'Elite Workshops & Seminars', locked: false, category: 'training' },
        { name: 'VIP Commander Lounge', locked: false, category: 'amenities' },
        { name: 'Exclusive Merchandise', locked: false, category: 'perks' },
        { name: 'Priority Event Registration', locked: false, category: 'perks' },
      ],
      energyLevel: 100,
      color: 'emerald',
    },
  ];

  const currentRank = ranks.find(r => r.id === selectedRank) || ranks[1];

  return (
    <section id="pricing" className="relative bg-slate-900 py-24 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(251, 146, 60, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(251, 146, 60, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Diagonal Accent Lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-br from-orange-500/5 to-transparent transform skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-full bg-gradient-to-tr from-emerald-400/5 to-transparent transform -skew-x-12"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-orange-500/10 border-2 border-orange-500 px-6 py-2">
              <div className="w-2 h-2 bg-orange-500 animate-pulse"></div>
              <span className="text-orange-500 font-bold tracking-[0.3em] text-sm">MISSION BRIEFING</span>
              <div className="w-2 h-2 bg-orange-500 animate-pulse"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            CHOOSE YOUR
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-400">
              FORCE RANK
            </span>
          </h2>
          
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Every operative starts somewhere. Select your clearance level and unlock
            <span className="text-orange-500 font-bold"> military-grade facilities</span> designed to transform you into an elite force.
          </p>

          {/* Special Offer Banner */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-emerald-400/20 to-orange-500/20 border-2 border-emerald-400 px-8 py-4">
            <span className="text-2xl">⚡</span>
            <div className="text-left">
              <div className="text-emerald-400 font-black text-sm tracking-wider">DEPLOYMENT SPECIAL</div>
              <div className="text-white font-bold">All Ranks: $29/month • Limited Time Operation</div>
            </div>
            <span className="text-2xl">⚡</span>
          </div>
        </div>

        {/* Rank Selector */}
        <div className="flex justify-center mb-12 gap-4 flex-wrap">
          {ranks.map((rank) => (
            <button
              key={rank.id}
              onClick={() => setSelectedRank(rank.id)}
              onMouseEnter={() => setHoveredRank(rank.id)}
              onMouseLeave={() => setHoveredRank(null)}
              className={`relative px-8 py-4 font-black tracking-wider transition-all duration-300 group ${
                selectedRank === rank.id
                  ? `bg-${rank.color}-500 text-slate-900 scale-110`
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{rank.badge}</span>
                <div className="text-left">
                  <div className="text-xs opacity-75">{rank.level}</div>
                  <div className="text-lg">{rank.name}</div>
                </div>
              </div>
              
              {/* Energy Level Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900/50">
                <div 
                  className={`h-full transition-all duration-500 ${
                    selectedRank === rank.id ? `bg-${rank.color}-400` : 'bg-slate-600'
                  }`}
                  style={{ width: `${hoveredRank === rank.id ? '100%' : rank.energyLevel + '%'}` }}
                ></div>
              </div>
            </button>
          ))}
        </div>

        {/* Main Pricing Card - Command Center Style */}
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-orange-500 overflow-hidden">
            {/* Popular Badge */}
            {currentRank.popular && (
              <div className="absolute top-8 -right-12 bg-emerald-400 text-slate-900 font-black py-2 px-16 rotate-45 text-sm tracking-wider z-20">
                MOST POPULAR
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Rank Info */}
              <div className="p-12 bg-slate-900/50 border-r-4 border-orange-500/20 relative">
                {/* Rank Badge Large */}
                <div className="absolute top-0 right-0 text-[200px] font-black text-orange-500/5 leading-none">
                  {currentRank.badge}
                </div>

                <div className="relative z-10">
                  {/* Clearance Level */}
                  <div className="inline-flex items-center gap-2 bg-orange-500/20 border-2 border-orange-500 px-4 py-2 mb-6">
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-orange-500 font-bold text-xs tracking-[0.2em]">{currentRank.clearanceLevel}</span>
                  </div>

                  <h3 className="text-6xl font-black text-white mb-2 tracking-tight">{currentRank.name}</h3>
                  <p className="text-slate-400 text-lg mb-8">{currentRank.description}</p>

                  {/* Price Display */}
                  <div className="mb-8">
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-400">
                        $29
                      </span>
                      <span className="text-2xl text-slate-400 font-bold mb-3">/month</span>
                    </div>
                    <div className="text-slate-500 text-sm">
                      <span className="line-through">$99</span>
                      <span className="ml-2 text-emerald-400 font-bold">SAVE 71% • DEPLOY NOW</span>
                    </div>
                  </div>

                  {/* Force Meter */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-400 text-sm font-bold tracking-wider">FORCE METER</span>
                      <span className="text-orange-500 font-black">{currentRank.energyLevel}%</span>
                    </div>
                    <div className="relative h-4 bg-slate-800 border-2 border-slate-700">
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-orange-500 to-emerald-400 transition-all duration-1000"
                        style={{ width: `${currentRank.energyLevel}%` }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Real-time capability assessment</div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black py-6 px-8 text-xl tracking-wider transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50 border-4 border-orange-400 group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <span>DEPLOY NOW</span>
                      <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>

                  <p className="text-center text-slate-500 text-xs mt-4">
                    ✓ No commitment • Cancel anytime • 7-day mission guarantee
                  </p>
                </div>
              </div>

              {/* Right Side - Features Grid */}
              <div className="p-12 bg-slate-800/30">
                <h4 className="text-orange-500 font-black text-sm tracking-[0.3em] mb-6 flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500"></div>
                  OPERATIONAL CAPABILITIES
                </h4>

                <div className="space-y-2">
                  {currentRank.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className={`flex items-start gap-4 p-3 transition-all duration-300 ${
                        !feature.locked 
                          ? 'bg-slate-900/50 border-l-4 border-emerald-400' 
                          : 'bg-slate-900/20 border-l-4 border-slate-700 opacity-40'
                      }`}
                    >
                      <div className={`mt-1 font-bold text-lg ${
                        !feature.locked ? 'text-emerald-400' : 'text-slate-600'
                      }`}>
                        {!feature.locked ? '◆' : '◇'}
                      </div>
                      <div className="flex-1">
                        <div className={`font-bold ${
                          !feature.locked ? 'text-white' : 'text-slate-600'
                        }`}>
                          {feature.name}
                        </div>
                        {!feature.locked && (
                          <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                            {feature.category}
                          </div>
                        )}
                      </div>
                      {feature.locked && (
                        <div className="text-slate-600 text-xl">🔒</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Upgrade Hint */}
                {currentRank.id !== 'commander' && (
                  <div className="mt-8 p-4 bg-gradient-to-r from-orange-500/10 to-emerald-400/10 border-2 border-orange-500/30">
                    <div className="text-orange-500 font-bold text-sm mb-1">⚡ UNLOCK MORE CAPABILITIES</div>
                    <div className="text-slate-400 text-xs">
                      Upgrade to {ranks[ranks.findIndex(r => r.id === currentRank.id) + 1]?.name} for enhanced access
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="grid grid-cols-3 border-t-4 border-orange-500/20">
              {[
                { label: 'ACTIVE OPERATIVES', value: '2,847', icon: '👥' },
                { label: 'AVG. STRENGTH GAIN', value: '+34%', icon: '📈' },
                { label: 'MISSION SUCCESS', value: '96%', icon: '🎯' },
              ].map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-6 text-center border-r-2 border-slate-700 last:border-r-0 bg-slate-900/30 hover:bg-slate-900/50 transition-all"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-emerald-400">
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-xs font-bold tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 flex justify-center items-center gap-8 flex-wrap">
          <div className="flex items-center gap-2 text-slate-400">
            <div className="text-emerald-400 text-2xl">✓</div>
            <span className="font-bold">No Setup Fees</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <div className="text-emerald-400 text-2xl">✓</div>
            <span className="font-bold">Cancel Anytime</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <div className="text-emerald-400 text-2xl">✓</div>
            <span className="font-bold">7-Day Guarantee</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <div className="text-emerald-400 text-2xl">✓</div>
            <span className="font-bold">Secure Payment</span>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-slate-800 to-slate-900 border-4 border-emerald-400">
            <div className="text-emerald-400 font-black text-sm tracking-[0.3em] mb-3">⚡ LIMITED DEPLOYMENT WINDOW ⚡</div>
            <div className="text-white text-2xl font-bold mb-4">
              Join <span className="text-orange-500">147 operatives</span> who deployed this week
            </div>
            <div className="text-slate-400 text-sm">
              Special pricing ends when we reach capacity • <span className="text-emerald-400 font-bold">23 slots remaining</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}