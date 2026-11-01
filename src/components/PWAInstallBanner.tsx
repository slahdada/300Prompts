import React, { useState, useEffect } from 'react';
import { Download, X, Sparkles } from 'lucide-react';
import { Language } from '../types/prompt';

interface PWAInstallBannerProps {
  isInstallable: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  onInstall: () => Promise<boolean>;
  onOpenModal: () => void;
  language: Language;
}

export const PWAInstallBanner: React.FC<PWAInstallBannerProps> = ({
  isInstallable,
  isInstalled,
  isIOS,
  onInstall,
  onOpenModal,
  language
}) => {
  const isAr = language === 'ar';
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem('pml_pwa_banner_dismissed') === 'true';
      if (dismissed) setIsDismissed(true);
    } catch {
      // ignore
    }
  }, []);

  // Do not show if already in standalone mode or dismissed
  if (isInstalled || isDismissed) return null;

  // Show if installable or on iOS
  if (!isInstallable && !isIOS) return null;

  const handleDismiss = () => {
    setIsDismissed(true);
    try {
      sessionStorage.setItem('pml_pwa_banner_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  const handleInstallClick = async () => {
    if (isInstallable) {
      const success = await onInstall();
      if (!success) {
        onOpenModal();
      }
    } else {
      onOpenModal();
    }
  };

  return (
    <div
      className={`fixed bottom-3 inset-x-3 sm:inset-x-auto sm:end-4 z-40 max-w-md mx-auto p-3.5 rounded-2xl bg-slate-900/95 dark:bg-slate-900/95 border border-indigo-500/40 text-slate-100 shadow-2xl backdrop-blur-xl animate-in slide-in-from-bottom-4 duration-300 ${
        isAr ? 'sm:start-4 sm:end-auto' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-0.5 shadow-md shadow-indigo-500/20 shrink-0 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>

          <div className="min-w-0">
            <h4 className="font-bold text-xs sm:text-sm text-white truncate">
              {isAr ? 'تثبيت Prompt Master Library' : 'Installer Prompt Master'}
            </h4>
            <p className="text-[11px] text-emerald-400 truncate font-medium">
              {isAr
                ? 'وصول فوري وشاشة كاملة بدون إنترنت'
                : '100% Hors-ligne & plein écran'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleInstallClick}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-xs shadow-md shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isAr ? 'تثبيت' : 'Installer'}</span>
          </button>

          <button
            onClick={handleDismiss}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
