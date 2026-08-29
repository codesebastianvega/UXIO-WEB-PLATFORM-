import React from 'react';
import { Cpu, LayoutGrid, FlaskConical, Boxes, Sparkles } from 'lucide-react';

export function getSectionIcon(id: string) {
  switch (id) {
    case 'services':
      return <Cpu size={16} className="text-[#00F0FF]" />;
    case 'works':
      return <LayoutGrid size={16} className="text-[#FFCC48]" />;
    case 'labs':
      return <FlaskConical size={16} className="text-[#FE385B]" />;
    case 'resources':
      return <Boxes size={16} className="text-[#10B981]" />;
    default:
      return <Sparkles size={16} className="text-[#FE385B]" />;
  }
}
