import { Info, ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  showBack?: boolean;
  showInfo?: boolean;
  onBack?: () => void;
  onInfo?: () => void;
}

export default function PageHeader({
  title,
  showBack = false,
  showInfo = false,
  onBack,
  onInfo,
}: PageHeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-md mx-auto px-4 h-14 flex items-center justify-between">
        <button
          onClick={onBack}
          className={`p-2 -ml-2 rounded-lg transition-colors ${
            showBack ? "text-gray-600 hover:text-gray-900" : "text-transparent"
          }`}
        >
          <ArrowLeft size={20} />
        </button>
        
        <h1 className="text-lg font-semibold text-gray-900 tracking-tight">
          {title}
        </h1>
        
        <button
          onClick={onInfo}
          className={`p-2 -mr-2 rounded-lg transition-colors ${
            showInfo ? "text-gray-600 hover:text-gray-900" : "text-transparent"
          }`}
        >
          <Info size={20} />
        </button>
      </div>
    </header>
  );
}
