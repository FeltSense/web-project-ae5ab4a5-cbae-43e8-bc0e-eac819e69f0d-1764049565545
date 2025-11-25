'use client';

import React, { useState, useEffect } from 'react';
import { Dumbbell, Clock, Users, MapPin, Phone, Mail, Target, TrendingUp, Award, Zap, Activity, CheckCircle } from 'lucide-react';

export default function Footer() {
  const [forceLevel, setForceLevel] = useState(78);
  const [activeMembers, setActiveMembers] = useState(142);
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    // Simulate real-time force level fluctuation
    const interval = setInterval(() => {
      setForceLevel(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newVal = prev + change;
        return Math.max(65, Math.min(95, newVal));
      });
      setActiveMembers(prev => {
        const change = Math.random() > 0.6 ? 1 : -1;
        const newVal = prev + change;
        return Math.max(120, Math.min(180, newVal));
      });
    }, 3000);

    // Update timestamp
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timeInterval = setInterval(updateTime, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(timeInterval);
    };
  }, []);

  const dailyOrders = [
    { id: 1, mission: 'HIIT Combat Training', time: '06:00', status: 'COMPLETED', participants: 24 },
    { id: 2, mission: 'Strength Operations', time: '18:00', status: 'ACTIVE', participants: 32 },
    { id: 3, mission: 'Night Ops Yoga', time: '20:00', status: 'STANDBY', participants: 18 }
  ];

  const supplyStatus = [
    { name: 'Cardio Zone', available: 12, total: 15, status: 'operational' },
    { name: 'Weight Deck', available: 8, total: 20, status: 'operational' },
    { name: 'Combat Arena', available: 1, total: 4, status: 'limited' },
    { name: 'Recovery Bay', available: 5, total: 6, status: 'operational' }
  ];

  const memberAchievements = [
    { name: 'Sarah M.', achievement: 'Completed 30-Day Challenge', rank: 'SERGEANT', progress: 100 },
    { name: 'Mike R.', achievement: 'PR: 225lbs Bench Press', rank: 'CORPORAL', progress: 85 },
    { name: 'Jessica L.', achievement: '5K Run Under 25 Min', rank: 'LIEUTENANT', progress: 92 }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'COMPLETED': return 'bg-emerald-400';
      case 'ACTIVE': return 'bg-orange-500';
      case 'STANDBY': return 'bg-slate-600';
      default: return 'bg-slate-600';
    }
  };

  const getSupplyColor = (status: string) => {
    switch(status) {
      case 'operational': return 'text-emerald-400';
      case 'limited': return 'text-orange-500';
      case 'offline': return 'text-red-500';
      default: return 'text-slate-400';
    }
  };

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Command Center Header */}
      <div className="relative border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-orange-500 p-3 clip-corner">
                <Dumbbell className="w-8 h-8 text-slate-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-wider">FITFORCE COMMAND</h3>
                <p className="text-emerald-400 text-sm font-mono">MISSION CONTROL ACTIVE</p>
              </div>
            </div>
            
            {/* Live Force Meter */}
            <div className="flex items-center gap-6 bg-slate-800/50 px-6 py-3 border border-emerald-400/30">
              <div className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Force Level</span>
                </div>
                <div className="text-3xl font-bold text-emerald-400">{forceLevel}%</div>
                <div className="w-32 h-2 bg-slate-700 mt-2 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-orange-500 to-emerald-400 transition-all duration-1000 relative"
                    style={{ width: `${forceLevel}%` }}
                  >
                    <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
              </div>
              
              <div className="h-12 w-px bg-slate-700"></div>
              
              <div className="text-center">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-4 h-4 text-orange-500" />
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Active Units</span>
                </div>
                <div className="text-3xl font-bold text-emerald-400">{activeMembers}</div>
                <div className="text-xs text-slate-500 mt-1 font-mono">{timestamp}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Command Dashboard */}
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* DAILY ORDERS Section */}
          <div className="bg-slate-800/30 border border-slate-700 p-6 hover:border-orange-500/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-700">
              <Target className="w-6 h-6 text-orange-500" />
              <h4 className="text-xl font-bold uppercase tracking-wider">Daily Orders</h4>
            </div>
            
            <div className="space-y-4">
              {dailyOrders.map((order) => (
                <div key={order.id} className="bg-slate-900/50 p-4 border-l-4 border-orange-500 hover:bg-slate-900 transition-all group">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`w-2 h-2 rounded-full ${getStatusColor(order.status)} animate-pulse`}></span>
                        <span className="text-xs font-mono text-slate-400">{order.time} HRS</span>
                      </div>
                      <h5 className="font-bold text-white group-hover:text-emerald-400 transition-colors">{order.mission}</h5>
                    </div>
                    <span className={`text-xs px-2 py-1 ${getStatusColor(order.status)} text-slate-900 font-bold`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <Users className="w-4 h-4" />
                    <span>{order.participants} Units Deployed</span>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#schedule" className="mt-6 block w-full bg-orange-500 text-slate-900 text-center py-3 font-bold uppercase tracking-wider hover:bg-emerald-400 transition-all">
              View Full Schedule →
            </a>
          </div>

          {/* SUPPLY STATUS Section */}
          <div className="bg-slate-800/30 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-700">
              <Activity className="w-6 h-6 text-emerald-400" />
              <h4 className="text-xl font-bold uppercase tracking-wider">Supply Status</h4>
            </div>
            
            <div className="space-y-5">
              {supplyStatus.map((supply, idx) => (
                <div key={idx} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-white">{supply.name}</span>
                    <span className={`text-sm font-mono ${getSupplyColor(supply.status)} uppercase`}>
                      {supply.available}/{supply.total}
                    </span>
                  </div>
                  <div className="relative h-3 bg-slate-700 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 ${supply.status === 'operational' ? 'bg-emerald-400' : 'bg-orange-500'}`}
                      style={{ width: `${(supply.available / supply.total) * 100}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="mt-1 text-xs text-slate-500 font-mono">
                    {supply.status === 'operational' ? '● OPERATIONAL' : '● LIMITED CAPACITY'}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-slate-900/50 p-4 border border-emerald-400/30">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold uppercase">Base Location</span>
              </div>
              <p className="text-sm text-slate-300 mb-3">2847 Military Drive, Fort Fitness, TX 78234</p>
              <a href="#location" className="text-emerald-400 hover:text-orange-500 text-sm font-bold uppercase tracking-wider transition-colors">
                Navigate to Base →
              </a>
            </div>
          </div>

          {/* MEMBER ACHIEVEMENTS Section */}
          <div className="bg-slate-800/30 border border-slate-700 p-6 hover:border-emerald-400/50 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-slate-700">
              <Award className="w-6 h-6 text-emerald-400" />
              <h4 className="text-xl font-bold uppercase tracking-wider">Recent Victories</h4>
            </div>
            
            <div className="space-y-5">
              {memberAchievements.map((member, idx) => (
                <div key={idx} className="bg-slate-900/50 p-4 border border-slate-700 hover:border-emerald-400/50 transition-all group">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-orange-500 flex items-center justify-center font-bold text-slate-900 text-xl clip-corner flex-shrink-0">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-white group-hover:text-emerald-400 transition-colors">{member.name}</h5>
                      <span className="text-xs text-orange-500 font-mono">{member.rank}</span>
                    </div>
                    <CheckCircle className="w-5 h-5 text-emerald-400" />
                  </div>
                  <p className="text-sm text-slate-300 mb-3">{member.achievement}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-slate-700 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-orange-500 to-emerald-400"
                        style={{ width: `${member.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-emerald-400 font-bold">{member.progress}%</span>
                  </div>
                </div>
              ))}
            </div>

            <a href="#success-stories" className="mt-6 block w-full bg-emerald-400 text-slate-900 text-center py-3 font-bold uppercase tracking-wider hover:bg-orange-500 transition-all">
              See All Victories →
            </a>
          </div>
        </div>

        {/* COMMS CENTER - Quick Links Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <a href="#programs" className="bg-slate-800/50 border border-slate-700 p-6 text-center hover:border-orange-500 hover:bg-slate-800 transition-all group">
            <TrendingUp className="w-8 h-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h5 className="font-bold uppercase text-sm mb-1">Training Programs</h5>
            <p className="text-xs text-slate-400">Mission Briefings</p>
          </a>
          
          <a href="#membership" className="bg-slate-800/50 border border-slate-700 p-6 text-center hover:border-orange-500 hover:bg-slate-800 transition-all group">
            <Award className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h5 className="font-bold uppercase text-sm mb-1">Rank Up</h5>
            <p className="text-xs text-slate-400">Membership Tiers</p>
          </a>
          
          <a href="#contact" className="bg-slate-800/50 border border-slate-700 p-6 text-center hover:border-orange-500 hover:bg-slate-800 transition-all group">
            <Phone className="w-8 h-8 text-orange-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h5 className="font-bold uppercase text-sm mb-1">Contact HQ</h5>
            <p className="text-xs text-slate-400">Direct Line</p>
          </a>
          
          <a href="#join" className="bg-slate-800/50 border border-slate-700 p-6 text-center hover:border-emerald-400 hover:bg-slate-800 transition-all group">
            <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
            <h5 className="font-bold uppercase text-sm mb-1">Enlist Now</h5>
            <p className="text-xs text-slate-400">Join The Force</p>
          </a>
        </div>
      </div>

      {/* Bottom Command Bar */}
      <div className="relative border-t border-orange-500/30 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-500" />
                <span className="font-mono">(555) FIT-FORCE</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="font-mono">command@fitforce.mil</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange-500" />
                <span className="font-mono">24/7 OPS</span>
              </div>
            </div>
            
            <div className="text-sm text-slate-500 font-mono">
              © 2024 FITFORCE COMMAND • ALL RIGHTS RESERVED • 
              <span className="text-emerald-400 ml-2">STRENGTH THROUGH DISCIPLINE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Clip Corner Effect */}
      <style jsx>{`
        .clip-corner {
          clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
        }
      `}</style>
    </footer>
  );
}