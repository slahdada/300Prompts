import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  message_fr: string;
  message_ar: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
  lang: 'fr' | 'ar';
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss, lang }) => {
  if (toasts.length === 0) return null;

  return (
    <div
      className={`fixed bottom-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4 ${
        lang === 'ar' ? 'left-5 items-start' : 'right-5 items-end'
      }`}
    >
      {toasts.map(t => (
        <div
          key={t.id}
          className="pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-900/95 dark:bg-slate-900/95 text-white border border-slate-700/60 shadow-xl backdrop-blur-md animate-in slide-in-from-bottom-2 duration-200"
        >
          {t.type === 'success' && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
          {t.type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />}
          {t.type === 'info' && <Info className="w-5 h-5 text-indigo-400 shrink-0" />}

          <span className="text-sm font-medium leading-snug">
            {lang === 'ar' ? t.message_ar : t.message_fr}
          </span>

          <button
            onClick={() => onDismiss(t.id)}
            className="p-1 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors ml-auto"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
