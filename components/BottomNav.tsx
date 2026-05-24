import { Compass, RotateCcw, Settings } from "lucide-react";

interface BottomNavProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export default function BottomNav({ currentPage, onPageChange }: BottomNavProps) {
  const navItems = [
    { id: "compass", icon: Compass, label: "指南针" },
    { id: "calibration", icon: RotateCcw, label: "校准" },
    { id: "settings", icon: Settings, label: "设置" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 safe-area-bottom z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onPageChange(item.id)}
              className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
                isActive
                  ? "text-primary scale-105"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-transform duration-200 ${
                  isActive ? "drop-shadow-sm" : ""
                }`}
              />
              <span
                className={`text-xs mt-1 font-medium transition-opacity duration-200 ${
                  isActive ? "opacity-100" : "opacity-70"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
