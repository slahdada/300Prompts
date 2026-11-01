import React from 'react';
import {
  Code2,
  Smartphone,
  Cpu,
  Globe,
  TrendingUp,
  Briefcase,
  Search,
  Palette,
  FileEdit,
  GraduationCap,
  Zap,
  DollarSign,
  Car,
  Table2,
  Share2,
  Building2,
  Languages,
  Lightbulb,
  FileText,
  Compass,
  Folder
} from 'lucide-react';

interface CategoryIconProps {
  name: string;
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Code2':
      return <Code2 className={className} />;
    case 'Smartphone':
      return <Smartphone className={className} />;
    case 'Cpu':
      return <Cpu className={className} />;
    case 'Globe':
      return <Globe className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Search':
      return <Search className={className} />;
    case 'Palette':
      return <Palette className={className} />;
    case 'FileEdit':
      return <FileEdit className={className} />;
    case 'GraduationCap':
      return <GraduationCap className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'DollarSign':
      return <DollarSign className={className} />;
    case 'Car':
      return <Car className={className} />;
    case 'Table2':
      return <Table2 className={className} />;
    case 'Share2':
      return <Share2 className={className} />;
    case 'Building2':
      return <Building2 className={className} />;
    case 'Languages':
      return <Languages className={className} />;
    case 'Lightbulb':
      return <Lightbulb className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Compass':
      return <Compass className={className} />;
    default:
      return <Folder className={className} />;
  }
};
