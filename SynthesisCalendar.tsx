import React from 'react';
import { CalendarNode } from '../types';

interface SynthesisCalendarProps {
  data: CalendarNode[];
}

export const SynthesisCalendar: React.FC<SynthesisCalendarProps> = ({ data }) => {
  const now = new Date();
  const currentMonth = now.toLocaleString('default', { month: 'long' });
  const currentYear = now.getFullYear();
  
  const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const paddingSlots = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  return (
    <div className="space-y-16">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-10">
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] font-black text-white mono uppercase tracking-[1em] flex items-center gap-6">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan-500 glow-text-cyan"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            Temporal Grid Alignment
          </h4>
          <span className="text-[14px] mono text-cyan-400 font-black mt-1 uppercase tracking-[0.6em] pl-12 glow-text-cyan">
            {currentMonth} <span className="text-slate-700">/</span> {currentYear}
          </span>
        </div>
        <div className="flex flex-wrap gap-6 text-[9px] mono font-black uppercase tracking-[0.4em] glass-panel px-8 py-4 rounded-2xl border border-white/5 shadow-2xl">
           <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div> Friction</div>
           <div className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div> Resonance</div>
           <div className="flex items-center gap-3"><div className="w-2.5 h-2.5 rounded-sm bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div> Filter Trigger</div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px mb-6 opacity-20">
        {weekDays.map(day => (
          <div key={day} className="text-[10px] mono font-black text-slate-500 text-center py-4 uppercase tracking-[0.5em]">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-4 sm:gap-6">
        {paddingSlots.map((i) => (
          <div key={`pad-${i}`} className="aspect-square opacity-0"></div>
        ))}
        {data.map((node) => (
          <div 
            key={node.day_offset} 
            className={`relative aspect-square glass-panel rounded-3xl border p-4 sm:p-6 flex flex-col justify-between group hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)] transition-all duration-700 cursor-crosshair overflow-hidden ${node.filter_trigger ? 'border-purple-500/40 ring-2 ring-purple-500/10' : 'border-white/5'}`}
          >
             <div className="flex justify-between items-start relative z-10">
                <span className="text-[12px] sm:text-[14px] mono font-black text-slate-600 group-hover:text-cyan-400 transition-colors duration-700">{node.day_offset}</span>
                {node.filter_trigger && (
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-purple-500 rounded-sm shadow-[0_0_15px_rgba(168,85,247,0.8)] animate-pulse"></div>
                )}
             </div>

             <div className="flex flex-col gap-2 sm:gap-3 relative z-10 mt-auto">
                <div className="h-1 sm:h-1.5 bg-slate-950 rounded-full overflow-hidden shadow-inner">
                   <div className="h-full bg-pink-500 shadow-[0_0_10px_rgba(236,72,153,0.5)] transition-all duration-1000" style={{ width: `${node.friction_forecast * 10}%` }}></div>
                </div>
                <div className="h-1 sm:h-1.5 bg-slate-950 rounded-full overflow-hidden shadow-inner">
                   <div className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-1000" style={{ width: `${node.resonance_forecast * 10}%` }}></div>
                </div>
             </div>

             {/* Optimized Compact Hover Detail - Obsidian Mode */}
             <div className="absolute inset-0 bg-[#020617]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center p-4 text-center z-20 backdrop-blur-xl border border-cyan-500/20 overflow-hidden">
                <span className="text-[9px] sm:text-[10px] mono font-black text-white uppercase mb-2 tracking-widest leading-tight line-clamp-3 px-2">
                  {node.event_signature}
                </span>
                
                {node.filter_trigger && (
                  <div className="flex flex-col items-center w-full mt-2">
                    <div className="w-8 sm:w-12 h-[1px] bg-white/10 mb-2 shrink-0"></div>
                    <span className="text-[8px] sm:text-[10px] font-bold text-purple-400 italic bg-purple-500/10 px-3 py-1.5 rounded-xl w-full line-clamp-2 leading-tight border border-purple-500/20">
                      {node.protocol_archetype_sync || 'SYNC_REQD'}
                    </span>
                    <span className="text-[8px] font-black bg-cyan-500 text-slate-950 px-3 py-1 rounded-full uppercase mt-3 shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-[0.3em] leading-none shrink-0 italic">
                      UPLINK
                    </span>
                  </div>
                )}
             </div>
          </div>
        ))}
      </div>
      
      <div className="glass-panel p-10 sm:p-12 rounded-[3.5rem] flex items-center gap-8 sm:gap-12 shadow-2xl relative overflow-hidden group border border-white/5">
         <div className="absolute -left-20 top-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
         <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-[2rem] bg-slate-950 border border-purple-500/20 flex items-center justify-center shrink-0 shadow-2xl group-hover:scale-105 transition-transform duration-700 group-hover:border-purple-400/50">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-purple-400"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
         </div>
         <div className="flex-1">
            <h5 className="text-[10px] sm:text-[12px] font-black text-purple-400 uppercase tracking-[0.8em] mb-4 glow-text-purple italic">Protocol Directive</h5>
            <p className="text-[14px] sm:text-[16px] text-slate-400 font-light italic leading-relaxed max-w-4xl">
              Target nodes highlight critical temporal interference. On these markers, the <span className="text-white font-black underline decoration-purple-500/50 decoration-2 underline-offset-8">Synthesis Core</span> must deploy specific protocol-archetype pairings to neutralize systemic entropy for this cycle.
            </p>
         </div>
      </div>
    </div>
  );
};