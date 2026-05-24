import { useEffect, useState } from "react";

interface CompassCircleProps {
  degree: number;
  isLocked: boolean;
}

export default function CompassCircle({ degree, isLocked }: CompassCircleProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!isLocked) {
      setRotation(-degree);
    }
  }, [degree, isLocked]);

  return (
    <div className="relative w-72 h-72 mx-auto">
      <div className="absolute inset-0 rounded-full border-2 border-gray-300 shadow-lg bg-white" />
      
      <div className="absolute inset-2 rounded-full border border-gray-200 overflow-hidden">
        <div
          className="absolute inset-0 transition-transform duration-500 ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-6 bg-red-500 rounded-full" />
            <div className="absolute top-1 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-900 -mt-5">
              N
            </div>
            
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-8 bg-gray-800 rounded-full" />
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-900 -mb-5">
              S
            </div>
            
            <div className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-1 bg-gray-800 rounded-full" />
            <div className="absolute left-1 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-900 -ml-5">
              W
            </div>
            
            <div className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-1 bg-gray-800 rounded-full" />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-900 -mr-5">
              E
            </div>
          </div>
          
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 text-xs text-gray-500">
            0°
          </div>
          <div className="absolute top-1/2 left-1/4 -translate-y-1/2 text-xs text-gray-500">
            270°
          </div>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 text-xs text-gray-500">
            90°
          </div>
          <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 text-xs text-gray-500">
            180°
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-3 h-3 rounded-full bg-gray-800 border-2 border-gray-300" />
        <div className="absolute w-1 h-12 bg-gradient-to-b from-red-500 to-gray-800 rounded-full" />
      </div>
    </div>
  );
}
