

interface SettingsRowProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  value?: string;
  isSwitch?: boolean;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
  hasArrow?: boolean;
  onClick?: () => void;
}

export default function SettingsRow({
  icon,
  title,
  description,
  value,
  isSwitch = false,
  switchValue = false,
  onSwitchChange,
  hasArrow = false,
  onClick,
}: SettingsRowProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-4 px-4 py-4 hover:bg-gray-50 transition-colors ${
        hasArrow ? "justify-between" : ""
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
        {icon}
      </div>
      
      <div className="flex-1 text-left">
        <div className="font-medium text-gray-900">{title}</div>
        {description && (
          <div className="text-sm text-gray-500 mt-0.5">{description}</div>
        )}
      </div>
      
      {value && !isSwitch && (
        <span className="text-sm font-medium text-gray-700">{value}</span>
      )}
      
      {isSwitch && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSwitchChange?.(!switchValue);
          }}
          className={`w-12 h-7 rounded-full transition-colors duration-200 relative ${
            switchValue ? "bg-primary" : "bg-gray-300"
          }`}
        >
          <div
            className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
              switchValue ? "left-6" : "left-1"
            }`}
          />
        </button>
      )}
      
      {hasArrow && !isSwitch && (
        <div className="w-5 h-5 flex items-center justify-center text-gray-400">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </div>
      )}
    </button>
  );
}
