'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  CreditCard, 
  Users, 
  Activity, 
  CloudRain, 
  Settings, 
  ShieldAlert, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';

export default function DashboardPage() {
  const [currentPlan, setCurrentPlan] = useState('Enterprise Tier');

  const metrics = [
    { title: 'Monthly Recurring Revenue', value: '$84,290', change: '+14.6%', icon: TrendingUp },
    { title: 'Active Cloud Workspaces', value: '312', change: '+8 new this week', icon: Users },
    { title: 'Total Compute Ingestion', value: '4.8 TB/day', change: 'Optimal load', icon: Activity },
    { title: 'Subscription Billing Status', value: 'Active', change: 'Auto-renews Nov 1', icon: CreditCard },
  ];

  return (
    <div className="flex h-screen bg-slate-950 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-900/50 flex flex-col justify-between p-4 hidden md:flex">
        <div className="space-y-6">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center font-bold text-white shadow-lg shadow-emerald-500/20">
              CO
            </div>
            <div>
              <span className="font-bold text-white text-base">CloudOps SaaS</span>
              <p className="text-xs text-emerald-400">Enterprise Control</p>
            </div>
          </div>

          <nav className="space-y-1">
            {[
              { name: 'Analytics Dashboard', icon: BarChart3, active: true },
              { name: 'Team Workspaces', icon: Users, active: false },
              { name: 'Billing & Invoices', icon: CreditCard, active: false },
              { name: 'Security & Audit', icon: ShieldAlert, active: false },
              { name: 'Organization Settings', icon: Settings, active: false },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <button
                  key={i}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                    item.active 
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.name}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-slate-800 pt-4 px-2">
          <div className="text-xs text-slate-400">Architect:</div>
          <div className="text-sm font-semibold text-white">Manish Lalotra</div>
          <div className="text-xs text-emerald-400">Full Stack & DevOps Engineer</div>
        </div>
      </aside>

      {/* Main Panel */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/40 backdrop-blur px-6 flex items-center justify-between">
          <div className="text-sm text-slate-400">
            Workspaces / <span className="text-slate-200 font-semibold">Production Cloud Cluster</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Production Live
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="p-6 md:p-8 space-y-8 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-white">SaaS Cloud Metrics & Billing Control</h1>
              <p className="text-sm text-slate-400 mt-1">
                Real-time usage ingestion, multi-tenant isolation, and recurring billing lifecycle management.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm px-4 py-2 rounded-lg transition shadow-lg shadow-emerald-600/20">
                Upgrade Workspace Plan
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {metrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div key={idx} className="bg-slate-900/70 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition">
                  <div className="flex items-center justify-between text-slate-400 mb-2">
                    <span className="text-xs font-medium uppercase tracking-wider">{m.title}</span>
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{m.value}</div>
                  <div className="text-xs text-emerald-400 mt-2 font-medium">{m.change}</div>
                </div>
              );
            })}
          </div>

          {/* Billing Plan Comparison Card */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">Active Plan Ingestion & Quotas</h2>
              <div className="space-y-4">
                {[
                  { resource: 'API Calls (monthly)', used: '4.2M', limit: '10.0M', pct: '42%' },
                  { resource: 'Database Storage', used: '184 GB', limit: '500 GB', pct: '36%' },
                  { resource: 'Compute Worker Hours', used: '1,240 hrs', limit: '2,500 hrs', pct: '49%' },
                ].map((row, i) => (
                  <div key={i} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-slate-300">{row.resource}</span>
                      <span className="text-slate-400">{row.used} of {row.limit} ({row.pct})</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: row.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6 space-y-4">
              <h2 className="text-lg font-bold text-white">SaaS Architecture</h2>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Next.js 14 App Router SSR & Streaming
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Isolated Multi-Tenant Schemas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Stripe Webhook Handlers with Idempotency
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  Containerized Standalone Output
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
