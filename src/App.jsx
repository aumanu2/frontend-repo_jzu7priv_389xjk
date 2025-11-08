import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import { LoginScreen, ProjectView, AnalyticsView, SettingsLists, ProfileView } from './components/Screens';

export default function App() {
  const [active, setActive] = useState('dashboard');
  const [isAuthed, setIsAuthed] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [search, setSearch] = useState('');

  const renderScreen = () => {
    if (!isAuthed) return <LoginScreen onLogin={() => setIsAuthed(true)} />;
    switch (active) {
      case 'dashboard':
        return <Dashboard onOpenProject={() => setActive('projects')} />;
      case 'projects':
        return <ProjectView />;
      case 'tasks':
        return <ProjectView />;
      case 'analytics':
        return <AnalyticsView />;
      case 'settings':
        return <SettingsLists />;
      case 'profile':
        return <ProfileView />;
      case 'timesheets':
        return <ProjectView />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="flex">
        <Sidebar active={active} onChange={setActive} collapsed={collapsed} />
        <div className="flex-1 min-h-screen flex flex-col">
          <Topbar onSearch={setSearch} />
          <div className="p-4 md:p-6">
            <div className="mb-3 flex items-center justify-between">
              <h1 className="text-xl font-semibold capitalize">{active}</h1>
              <button onClick={() => setCollapsed(v => !v)} className="px-3 py-1.5 text-sm rounded-md border border-slate-200 bg-white hover:bg-slate-50">
                {collapsed ? 'Expand Menu' : 'Collapse Menu'}
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white/70">
              {renderScreen()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
