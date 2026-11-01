import React, { useState } from 'react';
import {
  X,
  Download,
  Sparkles,
  RefreshCw,
  AlertCircle,
  Copy,
  Check,
  Terminal,
  ExternalLink,
  ImageIcon
} from 'lucide-react';
import { PromptItem, Language } from '../types/prompt';

interface IllustrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: PromptItem | null;
  imageUrl: string | null;
  isLoading: boolean;
  error: string | null;
  onRegenerate: () => void;
  language: Language;
}

export const IllustrationModal: React.FC<IllustrationModalProps> = ({
  isOpen,
  onClose,
  prompt,
  imageUrl,
  isLoading,
  error,
  onRegenerate,
  language
}) => {
  if (!isOpen || !prompt) return null;

  const isAr = language === 'ar';
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    if (!imageUrl) return;
    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = `illustration-${prompt.slash.replace(/[/]/g, '')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleCopyImage = async () => {
    if (!imageUrl) return;
    try {
      // Fetch blob from data URL and write to clipboard
      const res = await fetch(imageUrl);
      const blob = await res.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ [blob.type]: blob })
      ]);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: copy base64 data url
      navigator.clipboard.writeText(imageUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto text-slate-100 flex flex-col"
        onClick={e => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white shadow-md shadow-indigo-500/20">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-white flex items-center gap-2">
                <span>{isAr ? 'تجسيد بصري بالذكاء الاصطناعي' : 'Illustration IA du prompt'}</span>
              </h3>
              <span className="font-mono text-[11px] text-indigo-400">
                {prompt.slash}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col items-center justify-center min-h-[340px]">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4 text-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 animate-pulse flex items-center justify-center">
                  <RefreshCw className="w-8 h-8 text-indigo-400 animate-spin" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-cyan-400 animate-ping" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-100">
                  {isAr ? 'جارٍ توليد الصورة بالذكاء الاصطناعي...' : 'Génération de l’illustration IA en cours...'}
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  {isAr
                    ? `جاري تجسيد موضوع "${prompt.title_ar || prompt.title_fr}" بتقنية 3D الرقمية...`
                    : `Création du concept 3D représentant « ${prompt.title_fr} »...`}
                </p>
              </div>
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400">
                <AlertCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-sm text-rose-300">
                  {isAr ? 'تعذر توليد الصورة' : 'Erreur lors de la génération'}
                </p>
                <p className="text-xs text-slate-400 mt-1 max-w-sm px-4">
                  {error}
                </p>
              </div>
              <button
                onClick={onRegenerate}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all hover:scale-105"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>{isAr ? 'إعادة المحاولة' : 'Réessayer la génération'}</span>
              </button>
            </div>
          ) : imageUrl ? (
            <div className="w-full space-y-3 animate-in fade-in zoom-in-95 duration-200">
              <div className="relative group overflow-hidden rounded-2xl border border-indigo-500/30 bg-slate-950 shadow-xl aspect-square flex items-center justify-center">
                <img
                  src={imageUrl}
                  alt={prompt.title_fr}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-2.5 start-2.5 end-2.5 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-white text-[11px] truncate">
                  {isAr ? prompt.title_ar : prompt.title_fr}
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{isAr ? 'صورة رقمية 3D حصرية' : 'Modèle Gemini 3D Concept Art'}</span>
                </span>
                <span className="font-mono">1024 × 1024 px</span>
              </div>
            </div>
          ) : (
            <div className="text-center py-8 text-slate-400 space-y-2">
              <ImageIcon className="w-12 h-12 mx-auto text-slate-600" />
              <p className="text-xs">
                {isAr ? 'اضغط على الزر أدناه لتوليد الصورة' : 'Cliquez ci-dessous pour lancer la génération'}
              </p>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/90 flex items-center justify-between gap-2">
          {imageUrl && !isLoading ? (
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isAr ? 'تحميل PNG' : 'Télécharger'}</span>
              </button>

              <button
                onClick={handleCopyImage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors"
                title="Copier l'image"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? (isAr ? 'تم النسخ' : 'Copié !') : isAr ? 'نسخ' : 'Copier'}</span>
              </button>

              <button
                onClick={onRegenerate}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
                title={isAr ? 'إعادة التوليد' : 'Régénérer une autre variante'}
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {isAr ? 'إغلاق' : 'Fermer'}
          </button>
        </div>
      </div>
    </div>
  );
};
