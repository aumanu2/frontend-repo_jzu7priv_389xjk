import React from 'react';
import { Search, Filter, Sparkles, Activity } from 'lucide-react';

export default function Topbar({ onSearch }) {
  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="h-16 flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2 text-slate-700">
          <Sparkles className="w-5 h-5 text-sky-500" />
          <span className="font-medium">Welcome to OneFlow</span>
        </div>
        <div className="flex items-center gap-3 w-full max-w-xl">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              onChange={(e) => onSearch?.(e.target.value)}
              placeholder="Search projects, tasks, invoices..."
              className="w-full pl-9 pr-3 py-2 rounded-md border border-slate-200 bg-white/60 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50 text-slate-700">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filters</span>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <KPI label="Active Projects" value="12" trend="up" />
          <KPI label="Delayed Tasks" value="5" trend="down" />
          <KPI label="Hours Logged" value="384" />
          <KPI label="Revenue" value="$82k" />
        </div>
      </div>
    </header>
  );
}

function KPI({ label, value, trend }) {
  return (
    <div className="text-right">
      <div className="flex items-center gap-1 justify-end text-xs text-slate-500">
        <Activity className={`w-3 h-3 ${trend === 'up' ? 'text-emerald-500' : trend === 'down' ? 'text-rose-500' : 'text-slate-400'}`} />
        <span>{label}</span>
      </div>
      <div className="text-slate-900 font-semibold">{value}</div>
    </div>
  );
}
