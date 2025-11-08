import React from 'react';
import { LayoutDashboard, FolderOpen, ListChecks, BarChart3, Settings, User, Clock } from 'lucide-react';

const navItems = [
  { key: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { key: 'projects', label: 'Projects', icon: FolderOpen },
  { key: 'tasks', label: 'Tasks', icon: ListChecks },
  { key: 'analytics', label: 'Analytics', icon: BarChart3 },
  { key: 'timesheets', label: 'Timesheets', icon: Clock },
  { key: 'settings', label: 'Settings', icon: Settings },
  { key: 'profile', label: 'My Profile', icon: User },
];

export default function Sidebar({ active, onChange, collapsed }) {
  return (
    <aside className={`h-screen bg-white/80 backdrop-blur border-r border-slate-200 ${collapsed ? 'w-16' : 'w-64'} transition-all duration-300 sticky top-0 left-0`}
      aria-label="Main Navigation"
    >
      <div className="flex items-center gap-2 px-4 h-16 border-b border-slate-200">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-teal-500" />
        {!collapsed && <span className="font-semibold text-slate-800">OneFlow</span>}
      </div>
      <nav className="py-3">
        {navItems.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            className={`w-full flex items-center ${collapsed ? 'justify-center px-0' : 'justify-start px-4'} gap-3 py-2.5 text-sm hover:bg-slate-100 transition-colors ${active === key ? 'text-sky-600 bg-sky-50' : 'text-slate-700'}`}
            aria-current={active === key ? 'page' : undefined}
          >
            <Icon className="w-5 h-5" />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-xs text-slate-500">
        {!collapsed && <p>v1.0 · Modern ERP-style project hub</p>}
      </div>
    </aside>
  );
}
