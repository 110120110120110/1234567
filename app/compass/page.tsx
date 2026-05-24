"use client";

import { useState, useEffect } from "react";
import { Lock, Share2, MapPin, Mountain } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CompassCircle from "@/components/CompassCircle";
import { compassData } from "@/data/mockData";

export default function CompassPage() {
  const [degree, setDegree] = useState(compassData.degree);
  const [isLocked, setIsLocked] = useState(compassData.isLocked);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isLocked) {
      const interval = setInterval(() => {
        setDegree((prev) => {
          const change = (Math.random() - 0.5) * 5;
          const newDegree = (prev + change + 360) % 360;
          return Math.round(newDegree * 10) / 10;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isLocked]);

  const getDirection = (deg: number): string => {
    const directions = [
      { min: 348.75, max: 11.25, dir: "北" },
      { min: 11.25, max: 33.75, dir: "北 / 东北" },
      { min: 33.75, max: 56.25, dir: "东北" },
      { min: 56.25, max: 78.75, dir: "东 / 东北" },
      { min: 78.75, max: 101.25, dir: "东" },
      { min: 101.25, max: 123.75, dir: "东 / 东南" },
      { min: 123.75, max: 146.25, dir: "东南" },
      { min: 146.25, max: 168.75, dir: "南 / 东南" },
      { min: 168.75, max: 191.25, dir: "南" },
      { min: 191.25, max: 213.75, dir: "南 / 西南" },
      { min: 213.75, max: 236.25, dir: "西南" },
      { min: 236.25, max: 258.75, dir: "西 / 西南" },
      { min: 258.75, max: 281.25, dir: "西" },
      { min: 281.25, max: 303.75, dir: "西 / 西北" },
      { min: 303.75, max: 326.25, dir: "西北" },
      { min: 326.25, max: 348.75, dir: "北 / 西北" },
    ];

    const found = directions.find((d) => deg >= d.min && deg < d.max);
    return found?.dir || "北";
  };

  const handleLock = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsLocked(!isLocked);
      setIsAnimating(false);
    }, 200);
  };

  const handleShare = () => {
    const shareText = `当前方向: ${getDirection(degree)} (${degree.toFixed(1)}°)\n位置: ${compassData.latitude}, ${compassData.longitude}\n海拔: ${compassData.altitude} 米`;
    
    if (navigator.share) {
      navigator.share({
        title: "Direkt 指南针",
        text: shareText,
      });
    } else {
      navigator.clipboard.writeText(shareText);
      alert("已复制到剪贴板");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <PageHeader title="Direkt" showInfo />
      
      <main className="max-w-md mx-auto px-4 py-6 animate-fade-in">
        <div className="text-center mb-6">
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-6xl font-bold text-gray-900 tracking-tight">
              {degree.toFixed(1)}
            </span>
            <span className="text-2xl text-gray-500">°</span>
          </div>
          <div className="text-lg text-primary font-medium mt-2">
            {getDirection(degree)}
          </div>
          
          <button className="mt-3 px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-600 transition-colors">
            高精度模式
          </button>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6 mb-6 animate-slide-up">
          <CompassCircle degree={degree} isLocked={isLocked} />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <MapPin size={16} />
              <span>当前位置</span>
            </div>
            <div className="text-sm font-medium text-gray-900">
              {compassData.latitude}
            </div>
            <div className="text-sm font-medium text-gray-900">
              {compassData.longitude}
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <Mountain size={16} />
              <span>当前海拔</span>
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {compassData.altitude} 米
            </div>
            <div className="text-xs text-gray-400">AMSL</div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleLock}
            disabled={isAnimating}
            className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium transition-all duration-200 ${
              isLocked
                ? "bg-gray-200 text-gray-600"
                : "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/30"
            }`}
          >
            <Lock size={18} />
            {isLocked ? "已锁定方向" : "锁定当前方向"}
          </button>
          
          <button
            onClick={handleShare}
            className="w-14 h-14 bg-white rounded-xl shadow-md flex items-center justify-center text-gray-600 hover:text-primary hover:shadow-lg transition-all duration-200"
          >
            <Share2 size={20} />
          </button>
        </div>
      </main>
    </div>
  );
}
