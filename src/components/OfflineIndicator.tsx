import React from 'react';
import { WifiOff, CheckCircle } from 'lucide-react';
import { Language } from '../types/prompt';

interface OfflineIndicatorProps {
  isOnline: boolean;
  language: Language;
}

export const OfflineIndicator: React.FC<OfflineIndicatorProps> = ({ isOnline, language }) => {
  if (isOnline) return null;

  const isAr = language === 'ar';

  return (
    <div
      className={`fixed bottom-4 z-40 flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-lg text-xs font-medium animate-in slide-in-from-bottom-2 ${
        isAr ? 'right-4' : 'left-4'
      }`}
    >
      <WifiOff className="w-4 h-4 text-amber-400" />
      <span>
        {isAr
          ? 'وضع العمل دون إنترنت نشط — جميع الأوامر متاحة محلياً'
          : 'Mode hors-ligne actif — tous vos prompts restent disponibles'}
      </span>
    </div>
  );
};
