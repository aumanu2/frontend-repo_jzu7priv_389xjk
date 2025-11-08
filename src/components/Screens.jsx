import React from 'react';
import Spline from '@splinetool/react-spline';
import { Plus, UserPlus, FileText, Receipt, ShoppingCart, BadgeDollarSign, MoveRight, CheckCircle2, Loader2, Paperclip, MessageSquare, Calendar, Clock3, LayoutGrid, Columns3 } from 'lucide-react';

export function LoginScreen({ onLogin }) {
  return (
    <div className="relative min-h-[70vh] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 via-white to-sky-50 border border-slate-200">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 grid md:grid-cols-2 gap-6 p-6 md:p-10">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">OneFlow</h1>
          <p className="text-slate-600 max-w-xl">Plan, execute, and bill in one streamlined workspace. Modular ERP-style control with role-based dashboards for your whole team.</p>
          <div className="grid grid-cols-2 gap-3 max-w-md">
            {['Project Manager','Team Member','Sales / Finance','Admin'].map(role => (
              <div key={role} className="px-3 py-2 rounded-lg border border-slate-200 bg-white/70 text-slate-700">{role}</div>
            ))}
          </div>
        </div>
        <div className="justify-self-end w-full max-w-md bg-white/90 backdrop-blur rounded-xl p-6 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 text-slate-800 mb-4"><UserPlus className="w-5 h-5 text-sky-500" /><span className="font-medium">Sign in</span></div>
          <div className="space-y-3">
            <input className="w-full px-3 py-2 rounded-md border border-slate-200" placeholder="Email" />
            <input type="password" className="w-full px-3 py-2 rounded-md border border-slate-200" placeholder="Password" />
            <select className="w-full px-3 py-2 rounded-md border border-slate-200">
              <option>Project Manager</option>
              <option>Team Member</option>
              <option>Sales / Finance</option>
              <option>Admin</option>
            </select>
            <button onClick={() => onLogin?.()} className="w-full py-2 rounded-md bg-slate-900 text-white hover:bg-slate-800">Continue</button>
            <button className="w-full py-2 rounded-md border border-slate-200 hover:bg-slate-50">Create an account</button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/90 to-transparent" />
    </div>
  );
}

export function ProjectView() {
  const links = [
    { label: 'Sales Orders', icon: FileText, count: 3 },
    { label: 'Purchase Orders', icon: ShoppingCart, count: 2 },
    { label: 'Customer Invoices', icon: BadgeDollarSign, count: 5 },
    { label: 'Vendor Bills', icon: Receipt, count: 2 },
    { label: 'Expenses', icon: Receipt, count: 6 },
  ];
  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-semibold text-slate-800">Apollo CRM Revamp</h2>
            <p className="text-sm text-slate-500">Customer: Stellar Corp • Deadline: 30 Nov 2025</p>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50">Edit</button>
            <button className="px-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 flex items-center gap-2"><Plus className="w-4 h-4" /> New Task</button>
          </div>
        </div>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Info label="Progress" value="68%" />
          <Info label="Budget" value="$120,000" />
          <Info label="Spent" value="$78,000" />
          <Info label="Manager" value="Ava Patel" />
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <h3 className="font-medium text-slate-800 mb-3">Linked Documents</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {links.map(({ label, icon: Icon, count }) => (
            <div key={label} className="p-3 rounded-lg border border-slate-200 bg-slate-50/60">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-slate-700"><Icon className="w-4 h-4 text-sky-600" /><span className="text-sm">{label}</span></div>
                <span className="text-xs px-2 py-0.5 rounded-full bg-white border border-slate-200">{count}</span>
              </div>
              <button className="mt-2 w-full text-sm py-1.5 rounded-md bg-white border border-slate-200 hover:bg-slate-50">Create / Link</button>
            </div>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-medium text-slate-800">Tasks</h3>
            <div className="flex items-center gap-2 text-sm">
              <button className="px-2 py-1.5 rounded-md border border-slate-200 bg-white">My Tasks</button>
              <button className="px-2 py-1.5 rounded-md border border-slate-200 bg-white">All Tasks</button>
            </div>
          </div>
          <Kanban />
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
          <h3 className="font-medium text-slate-800 mb-3">Timesheets</h3>
          <TimesheetTable />
        </div>
      </div>
    </div>
  );
}

export function Kanban() {
  const columns = [
    { title: 'New', color: 'border-slate-300', items: 3 },
    { title: 'In Progress', color: 'border-sky-300', items: 4 },
    { title: 'Blocked', color: 'border-amber-300', items: 2 },
    { title: 'Done', color: 'border-emerald-300', items: 6 },
  ];
  const Card = ({ title, assignee, due, tags = [] }) => (
    <div className="p-3 rounded-lg bg-white border border-slate-200 shadow-sm space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-800">{title}</span>
        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Calendar className="w-3.5 h-3.5" /> {due}
      </div>
      <div className="flex items-center gap-2 text-xs text-slate-600">
        <MessageSquare className="w-3.5 h-3.5" /> 3 comments
        <Paperclip className="w-3.5 h-3.5" /> 2 files
      </div>
      <div className="flex gap-1.5 flex-wrap">
        {tags.map(t => (
          <span key={t} className="px-2 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-xs">{t}</span>
        ))}
      </div>
      <div className="text-xs text-slate-500">Assignee: {assignee}</div>
    </div>
  );
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-3">
      {columns.map(col => (
        <div key={col.title} className={`rounded-lg bg-slate-50/60 border ${col.color} p-2 space-y-2`}>
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2 text-slate-700 text-sm"><Columns3 className="w-4 h-4" />{col.title}</div>
            <span className="text-xs text-slate-500">{col.items}</span>
          </div>
          <Card title="Design Sprint" assignee="Ethan" due="Oct 12" tags={["Design","High"]} />
          <Card title="API Integration" assignee="Mia" due="Oct 14" tags={["Backend","Medium"]} />
          <Card title="QA Pass" assignee="Leo" due="Oct 18" tags={["QA"]} />
        </div>
      ))}
    </div>
  );
}

export function TimesheetTable() {
  const rows = [
    { employee: 'Mia Chen', task: 'API Integration', date: '2025-10-12', hours: 6, billable: true, rate: 85 },
    { employee: 'Leo Park', task: 'QA Pass', date: '2025-10-13', hours: 4, billable: false, rate: 0 },
    { employee: 'Ethan Ray', task: 'Design Sprint', date: '2025-10-11', hours: 5, billable: true, rate: 70 },
  ];
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-slate-500">
            <th className="py-2">Employee</th>
            <th className="py-2">Task</th>
            <th className="py-2">Date</th>
            <th className="py-2">Hours</th>
            <th className="py-2">Billable?</th>
            <th className="py-2">Rate/hr</th>
            <th className="py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-slate-200">
              <td className="py-2">{r.employee}</td>
              <td className="py-2">{r.task}</td>
              <td className="py-2">{r.date}</td>
              <td className="py-2">{r.hours}</td>
              <td className="py-2">{r.billable ? 'Yes' : 'No'}</td>
              <td className="py-2">{r.rate ? `$${r.rate}` : '-'}</td>
              <td className="py-2">{r.billable ? `$${r.rate * r.hours}` : '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="mt-3 w-full py-2 rounded-md border border-slate-200 hover:bg-slate-50">Log Hours</button>
    </div>
  );
}

export function AnalyticsView() {
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <AnalyticCard title="Total Projects" value="24" />
        <AnalyticCard title="Tasks Completed" value="312" />
        <AnalyticCard title="Hours Logged" value="1,842" />
        <AnalyticCard title="Billable %" value="72%" />
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <ChartCard title="Project Progress %" />
        <ChartCard title="Resource Utilization" />
        <ChartCard title="Cost vs Revenue" />
      </div>
    </div>
  );
}

function AnalyticCard({ title, value }) {
  return (
    <div className="rounded-xl p-4 bg-white border border-slate-200 shadow-sm">
      <div className="text-slate-500 text-sm">{title}</div>
      <div className="text-slate-900 font-semibold text-2xl">{value}</div>
      <div className="mt-3 h-2 w-full rounded-full bg-slate-100">
        <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-teal-500 w-3/4" />
      </div>
    </div>
  );
}

function ChartCard({ title }) {
  return (
    <div className="rounded-xl p-4 bg-white border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="text-slate-700 font-medium">{title}</div>
        <button className="text-xs px-2 py-1 rounded-md border border-slate-200">This Month</button>
      </div>
      <div className="h-40 bg-gradient-to-b from-slate-50 to-white border border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-400">
        <Loader2 className="w-4 h-4 animate-spin" />
      </div>
    </div>
  );
}

export function SettingsLists() {
  const sections = ['Sales Orders','Purchase Orders','Customer Invoices','Vendor Bills','Expenses','Products'];
  return (
    <div className="p-4 md:p-6 space-y-6">
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="text-slate-800 font-medium">Global Lists</div>
          <button className="px-3 py-2 rounded-md border border-slate-200 hover:bg-slate-50">Create</button>
        </div>
        <div className="mt-4 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.map(s => (
            <div key={s} className="p-3 rounded-lg border border-slate-200 bg-slate-50/60">
              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-700">{s}</div>
                <MoveRight className="w-4 h-4 text-slate-400" />
              </div>
              <div className="mt-2 overflow-x-auto">
                <table className="w-full text-xs">
                  <thead><tr className="text-slate-500"><th className="py-1 text-left">Number</th><th className="py-1 text-left">Partner</th><th className="py-1 text-left">Amount</th><th className="py-1 text-left">State</th></tr></thead>
                  <tbody>
                    <tr className="border-t border-slate-200"><td className="py-1">SO-1024</td><td className="py-1">Stellar Corp</td><td className="py-1">$12,400</td><td className="py-1">Approved</td></tr>
                    <tr className="border-t border-slate-200"><td className="py-1">SO-1025</td><td className="py-1">BlueWave Labs</td><td className="py-1">$7,900</td><td className="py-1">Draft</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProfileView() {
  return (
    <div className="p-4 md:p-6 grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="text-slate-800 font-medium mb-3">My Profile</div>
        <div className="grid sm:grid-cols-2 gap-3">
          <input className="px-3 py-2 rounded-md border border-slate-200" placeholder="Full name" defaultValue="Avery Stone" />
          <input className="px-3 py-2 rounded-md border border-slate-200" placeholder="Email" defaultValue="avery@oneflow.app" />
          <input className="px-3 py-2 rounded-md border border-slate-200" placeholder="Role" defaultValue="Project Manager" />
          <input type="password" className="px-3 py-2 rounded-md border border-slate-200" placeholder="New password" />
        </div>
        <button className="mt-4 px-4 py-2 rounded-md bg-slate-900 text-white">Save Changes</button>
      </div>
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="text-slate-800 font-medium mb-3">Preferences</div>
        <label className="flex items-center justify-between py-2">
          <span className="text-sm text-slate-700">Dark mode</span>
          <input type="checkbox" className="w-4 h-4" />
        </label>
        <label className="flex items-center justify-between py-2">
          <span className="text-sm text-slate-700">Email notifications</span>
          <input type="checkbox" className="w-4 h-4" defaultChecked />
        </label>
      </div>
    </div>
  );
}
