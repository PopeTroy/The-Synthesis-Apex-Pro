import React from 'react';

interface ParameterDef {
  id: string;
  name: string;
  symbol: string;
  description: string;
  example: string;
  color: string;
  glow: string;
}

const parameters: ParameterDef[] = [
  {
    id: 'nodes',
    name: 'Nodes (Structural Integrity)',
    symbol: 'N',
    description: 'The strength and clarity of the foundational components. It measures how solid the basic building blocks of the subject are.',
    example: 'Think of a building\'s steel frame. If the nodes are high (90+), the frame is solid and can support a skyscraper.',
    color: 'border-purple-500/30 text-purple-400 bg-purple-500/5',
    glow: 'shadow-purple-500/20'
  },
  {
    id: 'protocols',
    name: 'Protocols (Procedural Efficiency)',
    symbol: 'P',
    description: 'The sets of rules and the speed at which they are executed. It measures how smoothly things move from point A to point B.',
    example: 'Think of an airport. High protocols mean you pass security in 5 minutes with no errors.',
    color: 'border-violet-500/30 text-violet-400 bg-violet-500/5',
    glow: 'shadow-violet-500/20'
  },
  {
    id: 'filters',
    name: 'Filters (Control Stability)',
    symbol: 'F',
    description: 'The system\'s ability to block out "noise," misinformation, or bad actors while letting the truth through.',
    example: 'Like a water purification plant. High filters keep the water crystal clear even if the river is muddy.',
    color: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/5',
    glow: 'shadow-indigo-500/20'
  },
  {
    id: 'time_space',
    name: 'Time-Space (Temporal Logistics)',
    symbol: 'T',
    description: 'Scalability and future-proofing. It measures if the subject can survive over long periods and grow without breaking.',
    example: 'A city grid built to handle twice the population 50 years before they actually arrive.',
    color: 'border-blue-500/30 text-blue-400 bg-blue-500/5',
    glow: 'shadow-blue-500/20'
  },
  {
    id: 'dimensional_overwrite',
    name: 'Law of Dimensional Overwrite',
    symbol: 'D',
    description: 'The capacity of the subject to redefine its own reality, transcend existing constraints, or "overwrite" paradigms.',
    example: 'The ability to change the rules of the world entirely rather than just playing within them.',
    color: 'border-pink-500/30 text-pink-400 bg-pink-500/5',
    glow: 'shadow-pink-500/20'
  },
  {
    id: 'prophetic_typology',
    name: 'Prophetic Typology',
    symbol: 'Y',
    description: 'Archetypal recurrences where past patterns foreshadow future outcomes. Aligns with historical scripts.',
    example: 'Recognizing a "dot-com bubble" pattern in a new industry and predicting the trajectory.',
    color: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5',
    glow: 'shadow-emerald-500/20'
  }
];

export const ParameterReference: React.FC = () => {
  return (
    <div className="mt-40 space-y-16">
      <div className="flex items-center gap-8">
        <h2 className="text-2xl font-black mono tracking-[0.5em] text-slate-500 uppercase">Axiom Library</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-500/20 to-transparent"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {parameters.map((param) => (
          <div key={param.id} className={`glass-panel border-l-4 ${param.color} p-10 rounded-r-[3rem] transition-all hover:translate-y-[-8px] hover:shadow-2xl group shadow-xl relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[9px] font-black mono opacity-40 uppercase tracking-[0.3em] text-white">Registry: {param.symbol}</span>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-black border ${param.color} ${param.glow} shadow-lg transition-transform group-hover:scale-110`}>
                {param.symbol}
              </div>
            </div>
            <h3 className="font-black text-white mb-6 uppercase text-lg tracking-tight group-hover:text-cyan-400 transition-colors italic">{param.name}</h3>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-10 font-medium">
              {param.description}
            </p>
            <div className="bg-slate-950/50 p-6 rounded-[2rem] border border-white/5 group-hover:border-cyan-500/20 transition-all relative">
              <span className="text-[9px] font-black mono text-slate-600 uppercase block mb-3 tracking-[0.3em]">Contextual Projection</span>
              <p className="text-[12px] text-slate-300 italic leading-snug font-light">
                {param.example}
              </p>
              <div className="absolute top-2 right-4 text-[10px] mono text-slate-800 font-black">5D_LOGIC</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};