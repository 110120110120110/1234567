"use client";

import { useState } from "react";
import { Magnet, AlertTriangle, Shield, RotateCcw, Smartphone } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { calibrationData } from "@/data/mockData";

export default function CalibrationPage() {
  const [isCalibrating, setIsCalibrating] = useState(false);
  const [progress, setProgress] = useState(calibrationData.progress);

  const handleCalibrate = () => {
    setIsCalibrating(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsCalibrating(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHeader title="传感器校准" />
      
      <main className="max-w-md mx-auto px-4 py-4 animate-fade-in">
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Smartphone size={20} className="text-primary" />
            </div>
            <div>
              <div className="font-medium text-gray-900">手势引导</div>
              <div className="text-sm text-gray-500">按照&#34;8&#34;字轨迹平滑旋转手机</div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center py-8">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0 rounded-full border-2 border-gray-200 animate-pulse" />
              <div className="absolute inset-4 rounded-full border-2 border-gray-300" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center transform rotate-45">
                  <Smartphone size={24} className="text-gray-600 -rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <Magnet size={16} />
              <span>磁场强度</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {calibrationData.magneticField}
              <span className="text-sm font-normal text-gray-500">μT</span>
            </div>
            <div className="mt-1 px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full w-fit">
              {calibrationData.fieldStatus}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <RotateCcw size={16} />
              <span>校准进度</span>
            </div>
            <div className="text-2xl font-bold text-primary">
              {progress}
              <span className="text-sm font-normal text-gray-500">%</span>
            </div>
            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
              <Shield size={16} className="text-blue-600" />
            </div>
            <div>
              <div className="font-medium text-blue-900">权限开启提示</div>
              <div className="text-sm text-blue-700 mt-1">
                为确保导航精准，请在系统设置中允许本应用访问您的精确位置和磁力计数据。
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-4 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
              <AlertTriangle size={16} className="text-amber-600" />
            </div>
            <div>
              <div className="font-medium text-amber-900">干扰提醒</div>
              <div className="text-sm text-amber-700 mt-1">
                请远离磁性物体、电子设备或大型金属建筑，这些因素可能会显著干扰传感器的准确性。若读数异常，请点击下方按钮重新开始。
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleCalibrate}
          disabled={isCalibrating}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl shadow-lg shadow-primary/30 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <RotateCcw size={20} className={isCalibrating ? "animate-spin" : ""} />
          {isCalibrating ? "校准中..." : "手动重新校准"}
        </button>
      </main>
    </div>
  );
}
