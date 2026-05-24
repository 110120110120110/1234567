"use client";

import { useState } from "react";
import { 
  Ruler, 
  Navigation, 
  Zap, 
  Shield, 
  WifiOff, 
  Info 
} from "lucide-react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import SettingsRow from "@/components/SettingsRow";
import { settingsData, settingsOptions } from "@/data/mockData";

export default function SettingsPage() {
  const router = useRouter();
  const [unitFormat, setUnitFormat] = useState(settingsData.unitFormat);
  const [magneticDeclination, setMagneticDeclination] = useState(settingsData.magneticDeclination);
  const [sensorSensitivity, setSensorSensitivity] = useState(settingsData.sensorSensitivity);
  const [highPrecisionMode, setHighPrecisionMode] = useState(settingsData.highPrecisionMode);

  const handleNavigateToAbout = () => {
    router.push("/about");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHeader title="设置" />
      
      <main className="max-w-md mx-auto px-4 py-4 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
            <h2 className="text-sm font-medium text-gray-600">单位与测量</h2>
          </div>
          
          <SettingsRow
            icon={<Ruler size={20} className="text-primary" />}
            title="度数单位"
            description="选择显示的航向读数单位格式"
          />
          
          <div className="px-4 py-2 flex justify-around">
            {settingsOptions.unitFormats.map((option) => (
              <button
                key={option.value}
                onClick={() => setUnitFormat(option.value)}
                className={`w-20 py-2 rounded-lg text-sm font-medium transition-colors ${
                  unitFormat === option.value
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          
          <div className="h-px bg-gray-100" />
          
          <SettingsRow
            icon={<Navigation size={20} className="text-primary" />}
            title="磁偏角校正"
            description="根据位置补偿磁北与真北差异"
          />
          
          <div className="px-4 py-2 flex justify-around">
            {settingsOptions.magneticDeclinationOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setMagneticDeclination(option.value)}
                className={`flex-1 mx-2 py-2 rounded-lg text-sm font-medium transition-colors ${
                  magneticDeclination === option.value
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
            <h2 className="text-sm font-medium text-gray-600">传感器与性能</h2>
          </div>
          
          <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <div className="font-medium text-gray-900">传感器灵敏度</div>
                <div className="text-sm text-gray-500">调节指南针响应速度与平滑度</div>
              </div>
              <span className="text-sm font-medium text-primary">{sensorSensitivity}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={sensorSensitivity}
              onChange={(e) => setSensorSensitivity(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>反应稍慢 (更稳)</span>
              <span>极速响应</span>
            </div>
          </div>
          
          <div className="h-px bg-gray-100" />
          
          <SettingsRow
            icon={<Zap size={20} className="text-primary" />}
            title="高精度模式"
            description="启用融合定位以提升指向精度 (消耗更多电量)"
            isSwitch
            switchValue={highPrecisionMode}
            onSwitchChange={setHighPrecisionMode}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-100">
            <h2 className="text-sm font-medium text-gray-600">系统与信息</h2>
          </div>
          
          <SettingsRow
            icon={<Shield size={20} className="text-primary" />}
            title="位置权限管理"
            description="管理应用对系统传感器的访问权限"
            hasArrow
          />
          
          <div className="h-px bg-gray-100" />
          
          <SettingsRow
            icon={<WifiOff size={20} className="text-primary" />}
            title="离线模式说明"
            description="查看应用如何在无网络环境下工作"
            hasArrow
          />
          
          <div className="h-px bg-gray-100" />
          
          <SettingsRow
            icon={<Info size={20} className="text-primary" />}
            title="关于与版本信息"
            description="版本 1.2.0 · 隐私政策与反馈"
            hasArrow
            onClick={handleNavigateToAbout}
          />
        </div>

        <div className="text-center mt-8 text-xs text-gray-400">
          <p>Direkt Compass · 2024 高效指向技术</p>
        </div>
      </main>
    </div>
  );
}
