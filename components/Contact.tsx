"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface EquipmentZone {
  id: string;
  name: string;
  capacity: number;
  available: number;
  x: number;
  y: number;
}

interface Trainer {
  id: string;
  name: string;
  status: 'available' | 'busy' | 'break';
  x: number;
  y: number;
}

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [gymCapacity, setGymCapacity] = useState(67);
  const [energyLevel, setEnergyLevel] = useState(82);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const [equipmentZones, setEquipmentZones] = useState<EquipmentZone[]>([
    { id: 'cardio', name: 'CARDIO DECK', capacity: 20, available: 12, x: 15, y: 20 },
    { id: 'strength', name: 'STRENGTH ZONE', capacity: 25, available: 8, x: 55, y: 25 },
    { id: 'freeweights', name: 'FREE WEIGHTS', capacity: 15, available: 3, x: 15, y: 65 },
    { id: 'functional', name: 'FUNCTIONAL', capacity: 12, available: 9, x: 70, y: 65 }
  ]);

  const [trainers, setTrainers] = useState<Trainer[]>([
    { id: 't1', name: 'SGT. BLAKE', status: 'available', x: 40, y: 50 },
    { id: 't2', name: 'CPT. RIVERA', status: 'busy', x: 65, y: 35 },
    { id: 't3', name: 'LT. CHEN', status: 'available', x: 25, y: 75 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGymCapacity(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(45, Math.min(95, prev + change));
      });
      setEnergyLevel(prev => {
        const change = Math.random() > 0.5 ? 2 : -2;
        return Math.max(60, Math.min(100, prev + change));
      });
      
      setEquipmentZones(prev => prev.map(zone => ({
        ...zone,
        available: Math.max(0, Math.min(zone.capacity, zone.available + (Math.random() > 0.5 ? 1 : -1)))
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const formData = new FormData(e.currentTarget);
    const formObject: any = {};
    formData.forEach((value, key) => { formObject[key] = value; });
    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_data: formObject,
          form_id: 'contact_form',
          project_id: 'ae5ab4a5-cbae-43e8-bc0e-eac819e69f0d',
          founder_id: '',
          submitted_at: new Date().toISOString()
        })
      });
      if (!response.ok) throw new Error('Failed');
      setStatus('success');
    } catch (error) { 
      setStatus('error'); 
    }
  };

  const getAvailabilityColor = (available: number, capacity: number) => {
    const ratio = available / capacity;
    if (ratio > 0.6) return 'bg-emerald-400';
    if (ratio > 0.3) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getCapacityStatus = () => {
    if (gymCapacity < 60) return { text: 'LOW TRAFFIC', color: 'text-emerald-400', bg: 'bg-emerald-400/20' };
    if (gymCapacity < 80) return { text: 'MODERATE', color: 'text-orange-500', bg: 'bg-orange-500/20' };
    return { text: 'HIGH INTENSITY', color: 'text-red-500', bg: 'bg-red-500/20' };
  };

  const capacityStatus = getCapacityStatus();

  return (
    <section id="contact" className="relative bg-black py-24 overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(248, 113, 113, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(248, 113, 113, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated Corner Brackets */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-4 border-t-4 border-orange-500 opacity-50" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r-4 border-t-4 border-orange-500 opacity-50" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-4 border-b-4 border-orange-500 opacity-50" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-4 border-b-4 border-orange-500 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Command Center Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 bg-slate-900/80 border-2 border-orange-500 px-6 py-3 backdrop-blur-sm">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-orange-500 font-bold tracking-widest text-sm">COMMAND CENTER ONLINE</span>
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
            </div>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
            MISSION <span className="text-orange-500">BRIEFING</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Deploy your request to HQ. Real-time facility intelligence and tactical support available 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Interactive Facility Map */}
          <div className="bg-slate-900 border-2 border-slate-700 p-6 relative group hover:border-orange-500 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-emerald-400 to-orange-500 animate-pulse" />
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">FACILITY HEATMAP</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-sm font-mono">LIVE</span>
              </div>
            </div>

            {/* Live Stats Bar */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className={`${capacityStatus.bg} border-2 border-slate-700 p-4`}>
                <div className="text-slate-400 text-xs font-mono mb-1">GYM CAPACITY</div>
                <div className={`text-3xl font-black ${capacityStatus.color}`}>{gymCapacity}%</div>
                <div className={`text-xs font-bold ${capacityStatus.color} mt-1`}>{capacityStatus.text}</div>
              </div>
              <div className="bg-orange-500/20 border-2 border-slate-700 p-4">
                <div className="text-slate-400 text-xs font-mono mb-1">FORCE METER</div>
                <div className="text-3xl font-black text-orange-500">{energyLevel}%</div>
                <div className="text-xs font-bold text-orange-500 mt-1">HIGH ENERGY</div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="relative bg-black border-2 border-slate-700 aspect-video mb-4 overflow-hidden">
              {/* Grid Overlay */}
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />

              {/* Equipment Zones */}
              {equipmentZones.map((zone) => {
                const availabilityRatio = zone.available / zone.capacity;
                return (
                  <div
                    key={zone.id}
                    className={`absolute cursor-pointer transition-all duration-300 ${
                      selectedZone === zone.id ? 'scale-110 z-20' : 'hover:scale-105 z-10'
                    }`}
                    style={{ left: `${zone.x}%`, top: `${zone.y}%` }}
                    onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
                  >
                    <div className={`relative ${getAvailabilityColor(zone.available, zone.capacity)} w-16 h-16 clip-hexagon opacity-80 hover:opacity-100 transition-opacity`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-black font-black text-lg">{zone.available}</span>
                      </div>
                    </div>
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <div className="bg-slate-900 border border-slate-700 px-2 py-1">
                        <span className="text-xs font-bold text-orange-500">{zone.name}</span>
                      </div>
                    </div>
                    {selectedZone === zone.id && (
                      <div className="absolute top-20 left-1/2 -translate-x-1/2 bg-slate-900 border-2 border-orange-500 px-3 py-2 whitespace-nowrap z-30 shadow-xl">
                        <div className="text-xs text-slate-400 mb-1">Availability</div>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-slate-700 rounded-full overflow-hidden">
                            <div 
                              className={`h-full ${getAvailabilityColor(zone.available, zone.capacity)} transition-all duration-500`}
                              style={{ width: `${(availabilityRatio * 100)}%` }}
                            />
                          </div>
                          <span className="text-white font-bold text-sm">{zone.available}/{zone.capacity}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Trainer Markers */}
              {trainers.map((trainer) => (
                <div
                  key={trainer.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2 group/trainer cursor-pointer z-30"
                  style={{ left: `${trainer.x}%`, top: `${trainer.y}%` }}
                >
                  <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                    trainer.status === 'available' 
                      ? 'bg-emerald-400 border-emerald-300' 
                      : trainer.status === 'busy'
                      ? 'bg-red-500 border-red-400'
                      : 'bg-orange-500 border-orange-400'
                  } animate-pulse`}>
                    <span className="text-black font-black text-xs">T</span>
                  </div>
                  <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/trainer:opacity-100 transition-opacity">
                    <div className="bg-slate-900 border-2 border-emerald-400 px-3 py-2 whitespace-nowrap shadow-xl">
                      <div className="text-emerald-400 font-bold text-xs">{trainer.name}</div>
                      <div className={`text-xs mt-1 ${
                        trainer.status === 'available' ? 'text-emerald-400' : 
                        trainer.status === 'busy' ? 'text-red-400' : 'text-orange-400'
                      }`}>
                        {trainer.status.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Scanning Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-scan" />
            </div>

            {/* Legend */}
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                <span className="text-slate-400 font-mono">HIGH AVAIL</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full" />
                <span className="text-slate-400 font-mono">MODERATE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-slate-400 font-mono">BUSY</span>
              </div>
            </div>
          </div>

          {/* Contact Form - Command Input */}
          <div className="bg-slate-900 border-2 border-slate-700 p-6 relative group hover:border-emerald-400 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-orange-500 to-emerald-400 animate-pulse" />
            
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">DEPLOY REQUEST</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-emerald-400 text-sm font-mono">SECURED</span>
              </div>
            </div>

            {status === 'success' ? (
              <div className="bg-emerald-400/20 border-2 border-emerald-400 p-8 text-center">
                <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-2xl font-black text-emerald-400 mb-2">MISSION ACCEPTED</h4>
                <p className="text-slate-300 font-mono text-sm">Command center will respond within 24 hours. Stand by for tactical briefing.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 px-6 py-3 bg-slate-900 border-2 border-emerald-400 text-emerald-400 font-bold hover:bg-emerald-400 hover:text-black transition-all duration-300"
                >
                  SEND NEW REQUEST
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group/input">
                  <div className="absolute -top-2 left-3 bg-slate-900 px-2">
                    <label className="text-xs font-mono text-orange-500">OPERATIVE NAME*</label>
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-black border-2 border-slate-700 px-4 py-4 text-white font-mono focus:border-orange-500 focus:outline-none transition-all duration-300 group-hover/input:border-slate-600"
                    placeholder="Enter full name..."
                  />
                </div>

                <div className="relative group/input">
                  <div className="absolute -top-2 left-3 bg-slate-900 px-2">
                    <label className="text-xs font-mono text-orange-500">ENCRYPTED EMAIL*</label>
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-black border-2 border-slate-700 px-4 py-4 text-white font-mono focus:border-orange-500 focus:outline-none transition-all duration-300 group-hover/input:border-slate-600"
                    placeholder="operative@fitforce.com"
                  />
                </div>

                <div className="relative group/input">
                  <div className="absolute -top-2 left-3 bg-slate-900 px-2">
                    <label className="text-xs font-mono text-slate-400">SECURE LINE (OPTIONAL)</label>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full bg-black border-2 border-slate-700 px-4 py-4 text-white font-mono focus:border-orange-500 focus:outline-none transition-all duration-300 group-hover/input:border-slate-600"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="relative group/input">
                  <div className="absolute -top-2 left-3 bg-slate-900 px-2">
                    <label className="text-xs font-mono text-orange-500">MISSION DETAILS*</label>
                  </div>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-black border-2 border-slate-700 px-4 py-4 text-white font-mono focus:border-orange-500 focus:outline-none transition-all duration-300 group-hover/input:border-slate-600 resize-none"
                    placeholder="Describe your fitness objectives, questions, or membership inquiries..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-black font-black py-5 text-lg tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group/btn border-2 border-orange-400"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING...
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT TO HQ</span>
                        <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-emerald-400 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left" />
                </button>

                {status === 'error' && (
                  <div className="bg-red-500/20 border-2 border-red-500 p-4 text-center">
                    <p className="text-red-400 font-mono text-sm">⚠ TRANSMISSION FAILED. RETRY OPERATION.</p>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border-2 border-slate-700 p-6 relative group hover:border-orange-500 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-orange-500 font-bold text-sm mb-2 font-mono">HQ COORDINATES</h4>
                <p className="text-white font-semibold">1234 Force Street</p>
                <p className="text-slate-400 text-sm">Downtown District, ST 12345</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border-2 border-slate-700 p-6 relative group hover:border-emerald-400 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-emerald-400" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-400 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-emerald-400 font-bold text-sm mb-2 font-mono">DIRECT LINE</h4>
                <p className="text-white font-semibold">(555) 123-4567</p>
                <p className="text-slate-400 text-sm">24/7 Tactical Support</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border-2 border-slate-700 p-6 relative group hover:border-orange-500 transition-all duration-300">
            <div className="absolute top-0 left-0 w-1 h-full bg-orange-500" />
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-orange-500 font-bold text-sm mb-2 font-mono">OPERATION HOURS</h4>
                <p className="text-white font-semibold">MON-FRI: 05:00-23:00</p>
                <p className="text-slate-400 text-sm">SAT-SUN: 06:00-21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100vh); }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .clip-hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);
        }
      `}</style>
    </section>
  </div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div>);
}