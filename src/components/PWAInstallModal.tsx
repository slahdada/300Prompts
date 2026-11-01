import React from 'react';
import {
  Download,
  X,
  Smartphone,
  Share,
  PlusSquare,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Language } from '../types/prompt';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isInstallable: boolean;
  isInstalled: boolean;
  isIOS: boolean;
  onInstall: () => Promise<boolean>;
  language: Language;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({
  isOpen,
  onClose,
  isInstallable,
  isInstalled,
  isIOS,
  onInstall,
  language
}) => {
  if (!isOpen) return null;

  const isAr = language === 'ar';

  const handleInstallClick = async () => {
    const success = await onInstall();
    if (success) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/75 backdrop-blur-md animate-in fade-in">
      <div
        className="w-full max-w-md rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 p-6 shadow-2xl text-slate-900 dark:text-slate-100 space-y-5"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                {isAr ? 'تثبيت التطبيق على جهازك' : 'Installer l’application PWA'}
              </h2>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                {isAr ? 'يعمل بدون إنترنت وتجربة شاشة كاملة' : 'Accès hors-ligne & plein écran'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status already installed */}
        {isInstalled ? (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-300 flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 shrink-0" />
            <div className="text-xs">
              <p className="font-bold">
                {isAr ? 'التطبيق مثبت بالفعل!' : 'Application déjà installée !'}
              </p>
              <p className="text-slate-600 dark:text-slate-400 mt-0.5">
                {isAr
                  ? 'يمكنك تشغيل Prompt Master Library مباشرة من شاشتك الرئيسية.'
                  : 'Vous pouvez lancer Prompt Master Library depuis votre écran d’accueil.'}
              </p>
            </div>
          </div>
        ) : isInstallable ? (
          /* Native install button available */
          <div className="space-y-4">
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {isAr
                ? 'استمتع بالوصول السريع إلى 300 أمر ذكاء اصطناعي بنقرة واحدة، دون الحاجة لمتجر التطبيقات وبميزة العمل دون اتصال بالإنترنت.'
                : 'Installez l’application directement sur votre smartphone Android, iPhone ou PC Windows pour un accès instantané en 1 clic.'}
            </p>

            <button
              onClick={handleInstallClick}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>{isAr ? 'تثبيت الآن (بنقرة واحدة)' : 'Installer maintenant en 1 clic'}</span>
            </button>
          </div>
        ) : isIOS ? (
          /* iOS Step-by-Step Instructions */
          <div className="space-y-3">
            <p className="text-xs text-slate-600 dark:text-slate-300">
              {isAr
                ? 'لتثبيت التطبيق على جهاز iPhone أو iPad :'
                : 'Pour installer l’application sur votre iPhone ou iPad :'}
            </p>
            <ol className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 ps-1">
              <li className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center text-[10px] shrink-0">
                  1
                </span>
                <span className="flex items-center gap-1.5">
                  {isAr ? 'اضغط على زر المشاركة' : 'Appuyez sur le bouton Partager'}
                  <Share className="w-4 h-4 text-indigo-600 dark:text-indigo-400 inline" />
                </span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center text-[10px] shrink-0">
                  2
                </span>
                <span className="flex items-center gap-1.5">
                  {isAr
                    ? 'اختر "إضافة إلى الشاشة الرئيسية"'
                    : 'Sélectionnez « Sur l’écran d’accueil »'}
                  <PlusSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400 inline" />
                </span>
              </li>
              <li className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <span className="w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-bold flex items-center justify-center text-[10px] shrink-0">
                  3
                </span>
                <span>{isAr ? 'اضغط على "إضافة"' : 'Confirmez en touchant « Ajouter »'}</span>
              </li>
            </ol>
          </div>
        ) : (
          /* Desktop / Chrome fallback Instructions */
          <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
            <p>
              {isAr
                ? 'لتثبيت التطبيق على جهاز الكمبيوتر أو المتصفح :'
                : 'Pour installer l’application sur votre ordinateur :'}
            </p>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-1">
              <p>
                {isAr
                  ? 'انقر على أيقونة التثبيت (⤓) في شريط عنوان المتصفح أو قائمة الخيارات (⋮) ثم اختر "تثبيت Prompt Master Library".'
                  : 'Cliquez sur l’icône d’installation (⤓) dans la barre d’adresse de votre navigateur ou dans le menu ⋮ > « Installer l’application ».'}
              </p>
            </div>
          </div>
        )}

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 transition-colors"
          >
            {isAr ? 'إغلاق' : 'Fermer'}
          </button>
        </div>
      </div>
    </div>
  );
};
