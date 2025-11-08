import React from 'react';
import { CalendarDays, DollarSign, Users, Clock, Link2, FileText, Receipt, ShoppingCart } from 'lucide-react';

const sampleProjects = [
  { id: 1, name: 'Apollo CRM Revamp', customer: 'Stellar Corp', status: 'In Progress', progress: 68, budget: 120000, spent: 78000 },
  { id: 2, name: 'Neptune Mobile App', customer: 'BlueWave Labs', status: 'Planned', progress: 10, budget: 80000, spent: 5000 },
  { id: 3, name: 'Orion Data Warehouse', customer: 'Northwind', status: 'On Hold', progress: 35, budget: 150000, spent: 54000 },
  { id: 4, name: 'Vega Ecommerce Launch', customer: 'Nova Retail', status: 'Completed', progress: 100, budget: 65000, spent: 65000 },
];

export default function Dashboard({ onOpenProject }) {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={CalendarDays} label="Active Projects" value="12" color="from-sky-500 to-cyan-500" />
        <StatCard icon={Clock} label="Hours Logged" value="384" color="from-indigo-500 to-purple-500" />
        <StatCard icon={Users} label="Team Members" value="28" color="from-emerald-500 to-teal-500" />
        <StatCard icon={DollarSign} label="Revenue" value="$82k" color="from-amber-500 to-orange-500" />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-slate-800">Ongoing Projects</h2>
        <div className="flex gap-2">
          {['All', 'Planned', 'In Progress', 'Completed', 'On Hold'].map(f => (
            <button key={f} className="px-3 py-1.5 text-sm rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700">{f}</button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {sampleProjects.map(p => (
          <ProjectCard key={p.id} project={p} onOpen={() => onOpenProject?.(p)} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="rounded-xl p-4 bg-white border border-slate-200 shadow-sm">
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${color} text-white flex items-center justify-center mb-3`}>
        <Icon className="w-5 h-5" />
      </div>
      <div className="text-slate-500 text-sm">{label}</div>
      <div className="text-slate-900 font-semibold text-xl">{value}</div>
    </div>
  );
}

function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 rounded-full bg-slate-100">
      <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-500" style={{ width: `${value}%` }} />
    </div>
  );
}

function LinkBadge({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700">
      <Icon className="w-3.5 h-3.5" />
      <span>{label}</span>
    </div>
  );
}

function ProjectCard({ project, onOpen }) {
  const budgetUsage = Math.round((project.spent / project.budget) * 100);
  return (
    <div className="rounded-xl p-4 bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="font-semibold text-slate-800">{project.name}</h3>
          <p className="text-sm text-slate-500">{project.customer}</p>
        </div>
        <span className="px-2 py-1 text-xs rounded-full bg-sky-50 text-sky-700 border border-sky-200">{project.status}</span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex justify-between text-sm text-slate-600"><span>Progress</span><span>{project.progress}%</span></div>
        <ProgressBar value={project.progress} />
        <div className="flex justify-between text-sm text-slate-600"><span>Budget Usage</span><span>{budgetUsage}%</span></div>
        <ProgressBar value={budgetUsage} />
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        <LinkBadge icon={Link2} label="Links" />
        <LinkBadge icon={FileText} label="Sales Orders" />
        <LinkBadge icon={ShoppingCart} label="Purchase Orders" />
        <LinkBadge icon={Receipt} label="Invoices & Bills" />
      </div>

      <button onClick={onOpen} className="mt-4 w-full py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Open Project</button>
    </div>
  );
}
