import React from 'react';

export const TheoryFramework: React.FC = () => {
  return (
    <div className="mt-40 space-y-24 pb-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"></div>
      
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-8">
          <h2 className="text-2xl font-black mono tracking-[0.5em] text-purple-400 uppercase glow-text-purple">Architectural Audit</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/20 to-transparent"></div>
        </div>
        <p className="text-[11px] text-slate-400 mono uppercase tracking-[0.3em] max-w-4xl leading-relaxed border-l-2 border-purple-500/30 pl-8 font-bold">
          A high-precision structural integrity diagnostic designed to map and repair systemic vulnerabilities. This audit serves humanity by ensuring that the frameworks of our society remain resonant and stable across temporal shifts.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h3 className="text-xl font-black text-white uppercase flex items-center gap-4 italic">
            <span className="text-purple-500 mono not-italic font-black">01.</span> Probability Vectors
          </h3>
          <div className="glass-panel p-12 rounded-[3rem] relative overflow-hidden border border-white/5 shadow-2xl group">
             <div className="absolute -right-8 -top-8 opacity-[0.05] mono text-[150px] font-black select-none text-purple-400 group-hover:scale-110 transition-transform duration-1000">Σ</div>
             <p className="text-slate-200 text-lg leading-relaxed mb-10 font-light italic">
               Diagnostics represent <span className="text-purple-400 font-black underline decoration-purple-500/30 underline-offset-8">Persistence Potential</span>.
             </p>
             <ul className="space-y-8">
               <li className="flex gap-6 group/item">
                 <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20 group-hover/item:bg-purple-500/20 transition-all shadow-lg">
                    <span className="mono text-purple-400 font-black text-xs">R:B</span>
                 </div>
                 <div className="flex-1">
                   <span className="text-purple-300 font-black uppercase block mb-2 tracking-widest text-[10px]">Resonance Conflict</span>
                   <p className="text-xs text-slate-500 leading-relaxed font-medium">
                     The frequency of synergy. When Resonance &gt; Drag, the system exists in a state of self-sustaining coherence.
                   </p>
                 </div>
               </li>
               <li className="flex gap-6 group/item">
                 <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20 group-hover/item:bg-cyan-500/20 transition-all shadow-lg">
                    <span className="mono text-cyan-400 font-black text-xs">N:D</span>
                 </div>
                 <div className="flex-1">
                   <span className="text-cyan-300 font-black uppercase block mb-2 tracking-widest text-[10px]">Structural Exit</span>
                   <p className="text-xs text-slate-500 leading-relaxed font-medium">
                     Nodes anchor the reality; Overwrite transcends it. A system with high Nodes but zero Overwrite is mathematically destined for terminal decay.
                   </p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-xl font-black text-white uppercase flex items-center gap-4 italic">
            <span className="text-pink-500 mono not-italic font-black">02.</span> Overwrite Logic
          </h3>
          <div className="glass-panel p-12 rounded-[3rem] relative overflow-hidden border border-white/5 shadow-2xl group">
            <p className="text-slate-400 text-base leading-relaxed mb-8 font-light italic">
              Friction is the tax of linear existence. Beyond a specific threshold, a system's internal drag becomes greater than its output capacity.
            </p>
            <div className="mt-6 p-10 bg-pink-500/5 border border-pink-500/20 rounded-[2.5rem] relative group-hover:border-pink-500/40 transition-all">
              <span className="font-black text-pink-400 uppercase text-[10px] tracking-[0.5em] block mb-4">The Law of Shift</span> 
              <p className="text-base text-pink-200/80 italic leading-relaxed font-light">
                Coherence is not maintained by fixing parts, but by shifting the dimension of the whole. We overwrite the logic where the friction was defined.
              </p>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-pink-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-black text-white uppercase tracking-[0.4em] italic">Typology & <span className="text-cyan-400">Restore</span></h3>
            <p className="text-[10px] text-purple-500 mono uppercase font-black tracking-[0.8em]">Systemic_Audit_Sync.v5</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glass-panel p-10 rounded-[2.5rem] relative group overflow-hidden border border-white/5 hover:border-cyan-500/40 transition-all shadow-xl">
              <h4 className="text-[11px] font-black text-cyan-400 mono mb-4 uppercase tracking-widest glow-text-cyan">SEMANTIC</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-bold">
                Restore via <span className="text-white">Logic Re-mapping</span> 
                <span className="text-slate-600 italic block mt-4 font-black mono text-[9px]">[SYNC_INTERNAL_DEFS]</span>
              </p>
            </div>
            
            <div className="glass-panel p-10 rounded-[2.5rem] relative group overflow-hidden border border-white/5 hover:border-blue-500/40 transition-all shadow-xl">
              <h4 className="text-[11px] font-black text-blue-400 mono mb-4 uppercase tracking-widest glow-text-blue">KINETIC</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-bold">
                Restore via <span className="text-white">Protocol Flux</span> 
                <span className="text-slate-600 italic block mt-4 font-black mono text-[9px]">[AUTO_MECH_DRAG]</span>
              </p>
            </div>
            
            <div className="glass-panel p-10 rounded-[2.5rem] relative group overflow-hidden border border-white/5 hover:border-purple-500/40 transition-all shadow-xl">
              <h4 className="text-[11px] font-black text-purple-400 mono mb-4 uppercase tracking-widest glow-text-purple">ETHICAL</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-bold">
                Restore via <span className="text-white">Moral Overwrite</span> 
                <span className="text-slate-600 italic block mt-4 font-black mono text-[9px]">[HARDCODE_TRANS]</span>
              </p>
            </div>
            
            <div className="glass-panel p-10 rounded-[2.5rem] relative group overflow-hidden border border-white/5 hover:border-amber-500/40 transition-all shadow-xl">
              <h4 className="text-[11px] font-black text-amber-400 mono mb-4 uppercase tracking-widest glow-text-amber">TEMPORAL</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed font-bold">
                Restore via <span className="text-white">Prophetic Sync</span> 
                <span className="text-slate-600 italic block mt-4 font-black mono text-[9px]">[ALIGN_ACTIONS]</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};