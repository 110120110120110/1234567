"use client";

import { Star, MessageSquare, Globe, Shield, Info, ExternalLink } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { aboutData } from "@/data/mockData";

export default function AboutPage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-8">
      <PageHeader title="关于 Direkt" showBack onBack={handleBack} />
      
      <main className="max-w-md mx-auto px-4 py-6 animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-gray-100 flex items-center justify-center">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-gray-800" />
              <div className="absolute inset-2 rounded-full border border-gray-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-8 bg-gray-800 rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-4 bg-primary rounded-full -mt-1" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{aboutData.appName}</h1>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <span>{aboutData.version}</span>
            <span>·</span>
            <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs font-medium">
              {aboutData.releaseType}
            </span>
          </div>
          
          <p className="mt-4 text-gray-600">{aboutData.description}</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-4">
          {aboutData.features.map((feature, index) => (
            <div key={index} className="p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Globe size={20} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-gray-900">{feature.title}</div>
                  <div className="text-sm text-gray-500">{feature.description}</div>
                </div>
              </div>
              
              <div className="ml-13 space-y-2">
                {feature.points.map((point, i) => {
                  const isNote = point.startsWith("注意");
                  return (
                    <div key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      {isNote ? (
                        <Info size={14} className="text-amber-500 shrink-0 mt-0.5" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0 mt-2" />
                      )}
                      <span>{point}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <Shield size={20} className="text-green-600" />
            </div>
            <div className="font-medium text-gray-900">{aboutData.privacy.title}</div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed pl-13">
            {aboutData.privacy.content}
          </p>
          <button className="mt-3 flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors pl-13">
            <span>查看完整隐私政策</span>
            <ExternalLink size={14} />
          </button>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-xl shadow-lg shadow-primary/30 transition-all duration-200">
            <Star size={18} />
            五星好评
          </button>
          
          <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all duration-200">
            <MessageSquare size={18} />
            反馈问题
          </button>
        </div>

        <div className="text-center mt-8 text-xs text-gray-400">
          <p>© 2024 DIREKT STUDIO. ALL RIGHTS RESERVED.</p>
        </div>
      </main>
    </div>
  );
}
