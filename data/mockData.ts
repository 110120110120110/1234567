export const compassData = {
  degree: 15,
  direction: "北 / 东北",
  latitude: "34.0522° N",
  longitude: "118.2437° W",
  altitude: 124,
  isHighPrecision: true,
  isLocked: false,
};

export const settingsData = {
  unitFormat: "degrees",
  magneticDeclination: "auto",
  sensorSensitivity: 75,
  highPrecisionMode: true,
};

export const calibrationData = {
  magneticField: 42.5,
  fieldStatus: "环境稳定",
  progress: 65,
};

export const aboutData = {
  appName: "Direkt",
  version: "v1.0.0",
  releaseType: "Stable Release",
  description: "最纯粹的数字指南针，为您指明前进的方向。",
  features: [
    {
      title: "完全离线可用",
      description: "Direkt 指南针完全基于设备的硬件磁力计和加速度计工作",
      points: [
        "无需移动网络或 WiFi，即使在深山或荒野也能精准定位方位。",
        "注意: 周围的磁性物体（如磁吸手机壳）可能会影响硬件精度。",
      ],
    },
  ],
  privacy: {
    title: "数据与隐私",
    content: "您的隐私对我们至关重要。Direkt 不会收集、存储或上传您的精确经纬度位置信息。",
  },
};

export const settingsOptions = {
  unitFormats: [
    { value: "degrees", label: "°" },
    { value: "degrees-minutes", label: "°'" },
    { value: "degrees-minutes-seconds", label: "°'\"M" },
  ],
  magneticDeclinationOptions: [
    { value: "auto", label: "自动 (GPS)" },
    { value: "manual", label: "手动补偿" },
  ],
};
