// 配色方案
export const colorSchemes = {
  // 深色主題
  dark: {
    // 背景色
    background: {
      primary: '#1A1A1A', // 主背景
      secondary: '#2D2D2D', // 次要背景
      third: '#3D3D3D', // 第三層背景
    },
    
    // 文字色
    text: {
      primary: '#FFFFFF', // 主要文字
      secondary: '#B3B3B3', // 次要文字
      third: '#808080', // 第三層文字
      fourth: '#FFB5C2', // 第四層文字
    },
    
    // 功能色
    functional: {
      primary: '#FFB5C2', // 主要功能色
      secondary: '#B5EAD7', // 次要功能色
      third: '#FFDAC1', // 第三層功能色
      fourth: '#FFB7B2', // 第四層功能色
      fifth: '#C7CEEA', // 第五層功能色
    },
    
    // 邊框色
    border: {
      primary: '#404040', // 主要邊框
      secondary: '#4D4D4D', // 次要邊框
    }
  },
  
  // 淺色主題
  light: {
    // 背景色
    background: {
      primary: '#FFFFFF', // 主背景
      secondary: '#F5F5F5', // 次要背景
      third: '#EEEEEE', // 第三層背景
    },
    
    // 文字色
    text: {
      primary: '#333333', // 主要文字
      secondary: '#666666', // 次要文字
      third: '#999999', // 第三層文字
      fourth: '#FF8FA3', // 第四層文字
    },
    
    // 功能色
    functional: {
      primary: '#FF8FA3', // 主要功能色
      secondary: '#84A98C', // 次要功能色
      third: '#D4A373', // 第三層功能色
      fourth: '#C1786D', // 第四層功能色
      fifth: '#6C8C9C', // 第五層功能色
    },
    
    // 邊框色
    border: {
      primary: '#E0E0E0', // 主要邊框
      secondary: '#D0D0D0', // 次要邊框
    }
  },

  // 深色主題
  green: {
    // 背景色
    background: {
      primary: '#5C9979', // 主背景
      secondary: '#78A691', // 次要背景
      third: '#94B3A9', // 第三層背景
      fourth: '#ABC3BB', // 第四層背景
      fifth: '#C2D3CD', // 第五層背景
      lightest: '#F8FAF9', // 淺色背景
    },
    
    // 文字色
    text: {
      primary: '#000000', // 主要文字
      secondary: '#B3B3B3', // 次要文字
      third: '#808080', // 第三層文字
      fourth: '#FFB5C2', // 第四層文字
      darkBackground: '#FFFFFF', // 深色背景下文字
    },
    
    // 功能色
    functional: {
      primary: '#FFB5C2', // 主要功能色
      secondary: '#B5EAD7', // 次要功能色
      third: '#FFDAC1', // 第三層功能色
      fourth: '#FFB7B2', // 第四層功能色
      fifth: '#C7CEEA', // 第五層功能色
    },
    
    // 邊框色
    border: {
      primary: '#404040', // 主要邊框
      secondary: '#4D4D4D', // 次要邊框
    }
  },
  
  // 莫蘭迪主題
  morandi: {
    // 背景色
    background: {
      primary: '#E8E8E8', // 主背景
      secondary: '#F0F0F0', // 次要背景
      third: '#F8F8F8', // 第三層背景
    },
    
    // 文字色
    text: {
      primary: '#4A4A4A', // 主要文字
      secondary: '#6B6B6B', // 次要文字
      third: '#8C8C8C', // 第三層文字
      fourth: '#A8B2D1', // 第四層文字
    },
    
    // 功能色
    functional: {
      primary: '#A8B2D1', // 主要功能色
      secondary: '#B8C6B5', // 次要功能色
      third: '#D4B8A5', // 第三層功能色
      fourth: '#C5A8B2', // 第四層功能色
      fifth: '#A8B2D1', // 第五層功能色
    },
    
    // 邊框色
    border: {
      primary: '#D1D1D1', // 主要邊框
      secondary: '#C1C1C1', // 次要邊框
    }
  },
  
  // 自然主題
  nature: {
    // 背景色
    background: {
      primary: '#408C61', // 主背景
      secondary: '#78A691', // 次要背景
      third: '#94B3A9', // 第三層背景
      fourth: '#B3C9B9', // 第四層背景
      fifth: '#D1E0D9', // 第五層背景
    },
    
    // 文字色
    text: {
      primary: '#2B2D42', // 主要文字
      secondary: '#4A4E69', // 次要文字
      third: '#6C757D', // 第三層文字
      fourth: '#84A98C', // 第四層文字
    },
    
    // 功能色
    functional: {
      primary: '#84A98C', // 主要功能色
      secondary: '#84A98C', // 次要功能色
      third: '#D4A373', // 第三層功能色
      fourth: '#C1786D', // 第四層功能色
      fifth: '#6C8C9C', // 第五層功能色
    },
    
    // 邊框色
    border: {
      primary: '#DEE2E6', // 主要邊框
      secondary: '#CED4DA', // 次要邊框
    }
  }
} as const;

// 當前使用的配色方案
export const currentColorScheme = 'green'; // 可以更改這個值來切換配色方案

export const theme = {
  // 字體
  fontFamily: {
    sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
  },
  
  // 顏色
  colors: colorSchemes[currentColorScheme],
  
  // 間距
  spacing: {
    xs: '0.25rem', // 4px
    sm: '0.5rem', // 8px
    base: '1rem', // 16px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
    '2xl': '3rem', // 48px
    '3xl': '4rem' // 64px
  },
  
  // 字體大小
  fontSize: {
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem'
  },
  
  // 字重
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700'
  },
  
  // 圓角
  borderRadius: {
    none: '0',
    sm: '0.125rem', // 2px
    base: '0.25rem', // 4px
    md: '0.375rem',
    lg: '0.5rem', // 8px
    xl: '1rem', // 16px
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    full: '9999px'
  },
  
  // 陰影
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: 'none'
  },
  
  // 動畫
  transition: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms'
    },
    timing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      linear: 'linear',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
} as const; 