import React from 'react';
import { 
  Search, Code2, Database, Cloud, Plus, Users, LayoutDashboard, 
  CreditCard, Mail, Settings, ShieldCheck, Lightbulb, Smartphone, 
  Server, Briefcase, Sparkles, Clock, CheckCircle
} from 'lucide-react';

export function renderFeatureIcon(iconName?: string) {
  switch (iconName) {
    case 'Search': return <Search size={14} className="text-[#00F0FF]" />;
    case 'Figma': return <span className="font-mono text-[10px] font-bold text-[#A259FF]">Figma</span>;
    case 'Github': return <span className="font-mono text-[10px] font-bold text-[#111] dark:text-white">GH</span>;
    case 'Code': return <Code2 size={14} className="text-[#00F0FF]" />;
    case 'Database': return <Database size={14} className="text-[#10B981]" />;
    case 'Cloud': return <Cloud size={14} className="text-[#0284C7]" />;
    case 'Plus': return <Plus size={14} className="text-[#FE385B]" />;
    case 'Users': return <Users size={14} className="text-[#8B5CF6]" />;
    case 'LayoutDashboard': return <LayoutDashboard size={14} className="text-[#EC4899]" />;
    case 'CreditCard': return <CreditCard size={14} className="text-[#10B981]" />;
    case 'Mail': return <Mail size={14} className="text-[#F59E0B]" />;
    case 'Settings': return <Settings size={14} className="text-[#64748B]" />;
    case 'ShieldCheck': return <ShieldCheck size={14} className="text-[#10B981]" />;
    case 'Lightbulb': return <Lightbulb size={14} className="text-[#FBBF24]" />;
    case 'Smartphone': return <Smartphone size={14} className="text-[#3B82F6]" />;
    case 'Server': return <Server size={14} className="text-[#6366F1]" />;
    case 'Briefcase': return <Briefcase size={14} className="text-[#8B5CF6]" />;
    case 'Sparkles': return <Sparkles size={14} className="text-[#FE385B]" />;
    case 'Clock': return <Clock size={14} className="text-[#F59E0B]" />;
    case 'CheckCircle': return <CheckCircle size={14} className="text-[#10B981]" />;
    default: return <Sparkles size={14} className="text-[#FE385B]" />;
  }
}
