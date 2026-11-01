import React, { useRef, useState } from 'react';
import {
  X,
  FileSpreadsheet,
  FileJson,
  Upload,
  Download,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import { PromptItem, Language } from '../types/prompt';
import {
  exportToCsv,
  downloadFile,
  parseCsv,
  exportToJson,
  parseJsonBackup
} from '../utils/csv';

interface ExportImportModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompts: PromptItem[];
  onImportPrompts: (newPrompts: PromptItem[]) => void;
  onResetDefaults: () => void;
  language: Language;
}

export const ExportImportModal: React.FC<ExportImportModalProps> = ({
  isOpen,
  onClose,
  prompts,
  onImportPrompts,
  onResetDefaults,
  language
}) => {
  if (!isOpen) return null;

  const isAr = language === 'ar';
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(
    null
  );

  const handleExportCsv = () => {
    try {
      const csvContent = exportToCsv(prompts);
      const filename = `Prompt_Master_Library_${new Date().toISOString().slice(0, 10)}.csv`;
      downloadFile(csvContent, filename, 'text/csv;charset=utf-8;');
      setFeedback({
        type: 'success',
        message: isAr
          ? `تم تصدير ${prompts.length} أمراً بنجاح بتنسيق CSV (UTF-8 BOM).`
          : `${prompts.length} prompts exportés avec succès au format CSV UTF-8 (compatible Excel).`
      });
    } catch (err) {
      setFeedback({
        type: 'error',
        message: isAr ? 'فشل تصدير CSV' : 'Échec de l’export CSV.'
      });
    }
  };

  const handleExportJson = () => {
    try {
      const jsonContent = exportToJson(prompts);
      const filename = `Prompt_Master_Backup_${new Date().toISOString().slice(0, 10)}.json`;
      downloadFile(jsonContent, filename, 'application/json');
      setFeedback({
        type: 'success',
        message: isAr
          ? `تم تصدير النسخة الاحتياطية JSON (${prompts.length} أمراً).`
          : `Sauvegarde JSON exportée avec succès (${prompts.length} prompts).`
      });
    } catch (err) {
      setFeedback({
        type: 'error',
        message: isAr ? 'فشل تصدير JSON' : 'Échec de l’export JSON.'
      });
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const text = event.target?.result as string;
      if (!text) return;

      try {
        let imported: PromptItem[] = [];
        if (file.name.endsWith('.json')) {
          imported = parseJsonBackup(text);
        } else {
          imported = parseCsv(text);
        }

        if (imported.length > 0) {
          onImportPrompts(imported);
          setFeedback({
            type: 'success',
            message: isAr
              ? `تم استيراد ${imported.length} أمراً بنجاح!`
              : `${imported.length} prompts importés avec succès !`
          });
        } else {
          setFeedback({
            type: 'error',
            message: isAr
              ? 'لم يتم العثور على أوامر صالحة في الملف المرفوع.'
              : 'Aucun prompt valide trouvé dans ce fichier.'
          });
        }
      } catch (err) {
        setFeedback({
          type: 'error',
          message: isAr ? 'خطأ في معالجة الملف.' : 'Erreur lors de la lecture du fichier.'
        });
      }
    };
    reader.readAsText(file);
    // Reset input
    e.target.value = '';
  };

  const handleReset = () => {
    const confirmText = isAr
      ? 'هل أنت متأكد من إعادة ضبط المكتبة إلى 300 أمر الأساسية؟ سيتم مسح التعديلات الخاصة بك.'
      : 'Voulez-vous réinitialiser la bibliothèque aux 300 prompts par défaut ? Vos ajouts personnalisés seront effacés.';

    if (window.confirm(confirmText)) {
      onResetDefaults();
      setFeedback({
        type: 'success',
        message: isAr
          ? 'تمت استعادة 300 أمر الافتراضية بنجاح.'
          : '300 prompts initiaux restaurés avec succès.'
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-md animate-in fade-in">
      <div
        className="w-full max-w-xl rounded-3xl bg-slate-900 border border-slate-700/80 p-5 sm:p-6 shadow-2xl text-slate-100 space-y-5"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-indigo-400">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold">
                {isAr ? 'النسخ الاحتياطي والاستيراد والتصدير' : 'Sauvegarde, Export & Import'}
              </h2>
              <p className="text-xs text-slate-400">
                {isAr
                  ? `إدارة ${prompts.length} أمراً في قاعدة بياناتك المحلية`
                  : `Gérer les ${prompts.length} prompts de votre stockage local`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feedback Alert */}
        {feedback && (
          <div
            className={`p-3 rounded-xl text-xs flex items-center gap-2 border ${
              feedback.type === 'success'
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
            }`}
          >
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-4 h-4 shrink-0" />
            ) : (
              <AlertCircle className="w-4 h-4 shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
        )}

        {/* Export Options */}
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {isAr ? 'تصدير البيانات' : 'Exporter les données'}
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleExportCsv}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/40 transition-all text-start group"
            >
              <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20 group-hover:scale-105 transition-transform">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  CSV UTF-8 (Excel)
                </span>
                <span className="text-[11px] text-slate-400">
                  {isAr ? 'متوافق مع ويندوز وإكسل' : 'Avec BOM UTF-8 Windows 11'}
                </span>
              </div>
            </button>

            <button
              onClick={handleExportJson}
              className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/80 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/40 transition-all text-start group"
            >
              <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20 group-hover:scale-105 transition-transform">
                <FileJson className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
                  Sauvegarde JSON
                </span>
                <span className="text-[11px] text-slate-400">
                  {isAr ? 'نسخة احتياطية كاملة' : 'Fichier complet avec métadonnées'}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Import Option */}
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
            {isAr ? 'استيراد الأوامر' : 'Importer des prompts'}
          </span>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".csv,.json"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 p-4 rounded-2xl border-2 border-dashed border-slate-700 hover:border-indigo-500/60 bg-slate-950/50 hover:bg-slate-800/40 transition-all group cursor-pointer"
          >
            <Upload className="w-5 h-5 text-slate-400 group-hover:text-indigo-400 transition-colors" />
            <span className="text-xs font-medium text-slate-300 group-hover:text-indigo-300 transition-colors">
              {isAr
                ? 'انقر لرفع ملف CSV أو JSON لاستيراد الأوامر'
                : 'Cliquer pour charger un fichier CSV ou JSON'}
            </span>
          </button>
        </div>

        {/* Reset to 300 defaults */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{isAr ? 'استعادة 300 أمر الأساسية' : 'Restaurer les 300 prompts par défaut'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
          >
            {isAr ? 'تم' : 'Terminer'}
          </button>
        </div>
      </div>
    </div>
  );
};
