import React from 'react';
import { AlertTriangle, Trash2, X } from 'lucide-react';
import { PromptItem, Language } from '../types/prompt';

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  prompt: PromptItem | null;
  language: Language;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  prompt,
  language
}) => {
  if (!isOpen || !prompt) return null;

  const isAr = language === 'ar';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/75 backdrop-blur-md animate-in fade-in">
      <div
        className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 p-5 shadow-2xl text-slate-900 dark:text-slate-100"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-500 dark:text-rose-400 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              {isAr ? 'تأكيد حذف الأمر' : 'Confirmer la suppression'}
            </h3>
            <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400">{prompt.slash}</span>
          </div>
        </div>

        <p className="text-xs text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
          {isAr
            ? `هل أنت متأكد من رغبتك في حذف "${prompt.title_ar || prompt.title_fr}"؟ لا يمكن التراجع عن هذا الإجراء.`
            : `Êtes-vous sûr de vouloir supprimer le prompt "${prompt.title_fr}" ? Cette action est irréversible.`}
        </p>

        <div className="flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isAr ? 'إلغاء' : 'Annuler'}
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/30 transition-all hover:scale-105 active:scale-95"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{isAr ? 'تأكيد الحذف' : 'Supprimer définitivement'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
