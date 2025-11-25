'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Dumbbell, 
  Target, 
  Users, 
  Trophy, 
  Clock, 
  Shield, 
  Zap, 
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Activity,
  Star,
  Award,
  ChevronRight,
  Radio
} from 'lucide-react';

const Services = () => {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [selectedTier, setSelectedTier] = useState<string>('elite');

  // Real-time class data simulation
  const trainingModules = [
    {
      id: 'strength',
      name: 'STRENGTH PROTOCOL',
      code: 'SP-001',
      difficulty: 'ADVANCED',
      completion: 87,
      available: 12,
      capacity: 15,
      status: 'active',
      description: 'Heavy compound movements designed for maximum force development',
      stats: { duration: '60 min', calories: '450-600', intensity: 'HIGH' },
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
      icon: Dumbbell
    },
    {
      id: 'hiit',
      name: 'TACTICAL CARDIO',
      code: 'TC-002',
      difficulty: 'ELITE',
      completion: 94,
      available: 8,
      capacity: 20,
      status: 'active',
      description: 'High-intensity interval training for peak cardiovascular performance',
      stats: { duration: '45 min', calories: '600-800', intensity: 'EXTREME' },
      image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&q=80',
      icon: Zap
    },
    {
      id: 'yoga',
      name: 'RECOVERY OPS',
      code: 'RO-003',
      difficulty: 'STANDARD',
      completion: 78,
      available: 15,
      capacity: 15,
      status: 'active',
      description: 'Strategic mobility and flexibility training for injury prevention',
      stats: { duration: '50 min', calories: '200-300', intensity: 'LOW' },
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      icon: Activity
    }
  ];

  const trainers = [
    {
      name: 'Marcus Steel',
      rank: 'MASTER TRAINER',
      specialty: 'Strength & Conditioning',
      certifications: ['CSCS', 'NASM-CPT', 'Olympic Lifting'],
      missions: 2847,
      rating: 4.9,
      image: 'https://i.pravatar.cc/400?img=12',
      status: 'online'
    },
    {
      name: 'Sarah Blaze',
      rank: 'ELITE INSTRUCTOR',
      specialty: 'HIIT & Metabolic',
      certifications: ['ACE-CPT', 'TRX', 'Spin Certified'],
      missions: 1923,
      rating: 5.0,
      image: 'https://i.pravatar.cc/400?img=47',
      status: 'online'
    },
    {
      name: 'Jake Titan',
      rank: 'SPECIALIST',
      specialty: 'Mobility & Recovery',
      certifications: ['RYT-500', 'FMS', 'Rehab Specialist'],
      missions: 1456,
      rating: 4.8,
      image: 'https://i.pravatar.cc/400?img=33',
      status: 'busy'
    }
  ];

  const membershipTiers = [
    {
      id: 'recruit',
      rank: 'RECRUIT',
      level: 1,
      price: 49,
      color: 'slate',
      features: ['Base Training Access', '24/7 Facility Entry', 'Locker Room', 'Basic Equipment'],
      locked: ['Group Classes', 'Personal Training', 'Nutrition Planning']
    },
    {
      id: 'elite',
      rank: 'ELITE OPERATOR',
      level: 2,
      price: 89,
      color: 'orange',
      popular: true,
      features: ['All Recruit Benefits', 'Unlimited Classes', '2 PT Sessions/Month', 'Meal Planning', 'Priority Booking'],
      locked: ['24/7 PT Access', 'Recovery Suite']
    },
    {
      id: 'commander',
      rank: 'COMMANDER',
      level: 3,
      price: 149,
      color: 'emerald',
      features: ['All Elite Benefits', 'Unlimited PT Sessions', 'Recovery Suite Access', 'Guest Passes (4/mo)', 'Private Locker', 'Supplement Discount'],
      locked: []
    }
  ];

  const transformations = [
    {
      name: 'David Chen',
      duration: '90 DAYS',
      achievement: 'BODY RECOMPOSITION',
      stats: { weight: '-28 lbs', muscle: '+12 lbs', strength: '+45%' },
      badges: ['Consistency Streak', 'First 5K', 'Strength Milestone'],
      before: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
      after: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&q=80'
    },
    {
      name: 'Emma Rodriguez',
      duration: '120 DAYS',
      achievement: 'STRENGTH DOMINATION',
      stats: { deadlift: '135→315 lbs', squat: '95→225 lbs', bench: '65→135 lbs' },
      badges: ['Power Lifter', '6-Month Elite', 'Transformation'],
      before: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
      after: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400&q=80'
    }
  ];

  return (
    <section id="services" className="relative bg-slate-900 py-24 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(249, 115, 22, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Glowing Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 border-l-4 border-orange-500 pl-6">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6 text-orange-500" />
            <span className="text-emerald-400 font-mono text-sm tracking-wider">MISSION BRIEFING</span>
          </div>
          <h2 className="text-5xl font-black text-white mb-4 tracking-tight">
            TRAINING <span className="text-orange-500">MODULES</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Select your operational protocol. Each module is precision-engineered for maximum results.
          </p>
        </div>

        {/* Training Modules - Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
          {/* Large Feature Module */}
          <div 
            className="lg:col-span-8 bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-orange-500 transition-all duration-300 group cursor-pointer"
            onMouseEnter={() => setActiveModule(trainingModules[0].id)}
            onMouseLeave={() => setActiveModule(null)}
          >
            <div className="relative h-80">
              <Image
                src={trainingModules[0].image}
                alt={trainingModules[0].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
              
              {/* Status Indicator */}
              <div className="absolute top-4 right-4 flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-emerald-400">
                <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                <span className="text-emerald-400 font-mono text-xs">ACTIVE</span>
              </div>

              {/* Module Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-2">
                  <trainingModules[0].icon className="w-8 h-8 text-orange-500" />
                  <span className="font-mono text-orange-500 text-sm">{trainingModules[0].code}</span>
                </div>
                <h3 className="text-3xl font-black text-white mb-2">{trainingModules[0].name}</h3>
                <p className="text-slate-300 mb-4">{trainingModules[0].description}</p>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-orange-500 font-mono text-xs mb-1">DURATION</div>
                    <div className="text-white font-bold">{trainingModules[0].stats.duration}</div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-orange-500 font-mono text-xs mb-1">CALORIES</div>
                    <div className="text-white font-bold">{trainingModules[0].stats.calories}</div>
                  </div>
                  <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-orange-500 font-mono text-xs mb-1">INTENSITY</div>
                    <div className="text-white font-bold">{trainingModules[0].stats.intensity}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-400 text-sm font-mono">COMPLETION RATE</span>
                    <span className="text-emerald-400 font-bold">{trainingModules[0].completion}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-500"
                      style={{ width: `${trainingModules[0].completion}%` }}
                    ></div>
                  </div>
                </div>

                {/* Availability Indicator */}
                <div className="mt-4 flex items-center justify-between bg-slate-800/60 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-orange-500" />
                    <span className="text-white font-mono text-sm">
                      <span className="text-emerald-400 font-bold">{trainingModules[0].available}</span>
                      /{trainingModules[0].capacity} SPOTS AVAILABLE
                    </span>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors">
                    DEPLOY <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Modules */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {trainingModules.slice(1).map((module) => (
              <div 
                key={module.id}
                className="bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 hover:border-orange-500 transition-all duration-300 group cursor-pointer flex-1"
                onMouseEnter={() => setActiveModule(module.id)}
                onMouseLeave={() => setActiveModule(null)}
              >
                <div className="relative h-full min-h-[200px]">
                  <Image
                    src={module.image}
                    alt={module.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-900/50"></div>
                  
                  <div className="absolute inset-0 p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <module.icon className="w-6 h-6 text-orange-500" />
                        <span className="font-mono text-orange-500 text-xs">{module.code}</span>
                      </div>
                      <h3 className="text-xl font-black text-white mb-2">{module.name}</h3>
                      <p className="text-slate-300 text-sm mb-3 line-clamp-2">{module.description}</p>
                    </div>

                    <div>
                      {/* Mini Progress */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-slate-400 text-xs font-mono">SUCCESS RATE</span>
                          <span className="text-emerald-400 font-bold text-sm">{module.completion}%</span>
                        </div>
                        <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-emerald-400 rounded-full"
                            style={{ width: `${module.completion}%` }}
                          ></div>
                        </div>
                      </div>

                      {/* Availability */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-mono">
                          <span className="text-white font-bold">{module.available}</span>/{module.capacity} SPOTS
                        </span>
                        <span className={`px-2 py-1 rounded font-mono ${
                          module.difficulty === 'ELITE' ? 'bg-red-500/20 text-red-400' :
                          module.difficulty === 'ADVANCED' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {module.difficulty}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trainer Profiles Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-l-4 border-emerald-400 pl-6">
            <Target className="w-6 h-6 text-emerald-400" />
            <h3 className="text-3xl font-black text-white">ELITE <span className="text-emerald-400">OPERATORS</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trainers.map((trainer, idx) => (
              <div key={idx} className="bg-slate-800 rounded-xl border-2 border-slate-700 hover:border-emerald-400 transition-all duration-300 overflow-hidden group">
                <div className="relative h-64">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm ${
                    trainer.status === 'online' ? 'bg-emerald-500/20 border border-emerald-400' : 'bg-orange-500/20 border border-orange-400'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${trainer.status === 'online' ? 'bg-emerald-400' : 'bg-orange-400'} animate-pulse`}></div>
                    <span className={`font-mono text-xs ${trainer.status === 'online' ? 'text-emerald-400' : 'text-orange-400'}`}>
                      {trainer.status.toUpperCase()}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-5 h-5 text-orange-500" />
                      <span className="font-mono text-orange-500 text-xs">{trainer.rank}</span>
                    </div>
                    <h4 className="text-2xl font-black text-white mb-1">{trainer.name}</h4>
                    <p className="text-slate-300 text-sm">{trainer.specialty}</p>
                  </div>
                </div>

                <div className="p-5">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-orange-500 font-mono text-xs mb-1">MISSIONS</div>
                      <div className="text-white font-bold text-xl">{trainer.missions.toLocaleString()}</div>
                    </div>
                    <div className="bg-slate-900/50 rounded-lg p-3">
                      <div className="text-orange-500 font-mono text-xs mb-1">RATING</div>
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="text-white font-bold text-xl">{trainer.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="mb-4">
                    <div className="text-slate-400 font-mono text-xs mb-2">CERTIFICATIONS</div>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.map((cert, i) => (
                        <span key={i} className="bg-slate-900 text-emerald-400 px-2 py-1 rounded text-xs font-mono border border-slate-700">
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-slate-900 hover:bg-emerald-500 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 group/btn">
                    <span>REQUEST OPERATOR</span>
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8 border-l-4 border-orange-500 pl-6">
            <Shield className="w-6 h-6 text-orange-500" />
            <h3 className="text-3xl font-black text-white">RANK <span className="text-orange-500">PROGRESSION</span></h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {membershipTiers.map((tier) => (
              <div 
                key={tier.id}
                className={`relative bg-slate-800 rounded-2xl border-2 p-8 cursor-pointer transition-all duration-300 ${
                  selectedTier === tier.id 
                    ? `border-${tier.color}-500 shadow-lg shadow-${tier.color}-500/20` 
                    : 'border-slate-700 hover:border-slate-600'
                }`}
                onClick={() => setSelectedTier(tier.id)}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    MOST DEPLOYED
                  </div>
                )}

                {/* Rank Badge */}
                <div className={`inline-flex items-center gap-2 bg-${tier.color}-500/20 border border-${tier.color}-500 px-4 py-2 rounded-lg mb-4`}>
                  <div className={`w-3 h-3 bg-${tier.color}-500 rounded-full`}></div>
                  <span className={`text-${tier.color}-400 font-mono text-xs`}>LEVEL {tier.level}</span>
                </div>

                <h4 className="text-2xl font-black text-white mb-2">{tier.rank}</h4>
                
                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-black text-white">${tier.price}</span>
                  <span className="text-slate-400 text-lg">/mo</span>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 text-${tier.color}-500 flex-shrink-0 mt-0.5`} />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                  {tier.locked.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-50">
                      <AlertCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full bg-${tier.color}-500 hover:bg-${tier.color}-600 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2`}>
                  <span>ENLIST NOW</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories / Transformations */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-l-4 border-emerald-400 pl-6">
            <Trophy className="w-6 h-6 text-emerald-400" />
            <h3 className="text-3xl font-black text-white">MISSION <span className="text-emerald-400">ACCOMPLISHED</span></h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {transformations.map((story, idx) => (
              <div key={idx} className="bg-slate-800 rounded-2xl border-2 border-slate-700 hover:border-emerald-400 transition-all duration-300 overflow-hidden group">
                <div className="grid grid-cols-2 h-80">
                  {/* Before */}
                  <div className="relative">
                    <Image
                      src={story.before}
                      alt="Before"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/40"></div>
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-slate-700">
                      <span className="text-slate-400 font-mono text-xs">DAY 1</span>
                    </div>
                  </div>

                  {/* After */}
                  <div className="relative">
                    <Image
                      src={story.after}
                      alt="After"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-emerald-500/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-emerald-400">
                      <span className="text-white font-mono text-xs">{story.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-2xl font-black text-white mb-1">{story.name}</h4>
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-mono text-sm">{story.achievement}</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {Object.entries(story.stats).map(([key, value], i) => (
                      <div key={i} className="bg-slate-900 rounded-lg p-3 text-center">
                        <div className="text-orange-500 font-mono text-xs mb-1 uppercase">{key}</div>
                        <div className="text-white font-bold text-sm">{value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Achievement Badges */}
                  <div>
                    <div className="text-slate-400 font-mono text-xs mb-2">ACHIEVEMENTS UNLOCKED</div>
                    <div className="flex flex-wrap gap-2">
                      {story.badges.map((badge, i) => (
                        <div key={i} className="flex items-center gap-1.5 bg-slate-900 border border-emerald-500/30 px-3 py-1.5 rounded-lg">
                          <Award className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 text-xs font-mono">{badge}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.3) 10px, rgba(0,0,0,0.3) 20px)`
            }}></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-black text-white mb-2">READY TO DEPLOY?</h3>
              <p className="text-orange-100">Join the elite force of transformation warriors. Mission starts now.</p>
            </div>
            <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-black text-lg flex items-center gap-3 transition-all hover:scale-105">
              <span>START YOUR MISSION</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;