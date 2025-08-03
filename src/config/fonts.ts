// Font Configuration
export const fonts = {
  // Primary font family - Manrope, a modern geometric sans-serif
  primary: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
  
  // Alternative minimal fonts
  secondary: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  
  // Monospace font for code elements
  monospace: "'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace",
  
  // Font weights - Manrope supports 200-800
  weights: {
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extraBold: 800
  },
  
  // Font sizes
  sizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem',  // 36px
    '5xl': '3rem',     // 48px
  },
  
  // Line heights
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2
  },
  
  // Letter spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em'
  }
};

// CSS Variables for easy use
export const fontCSSVariables = `
  :root {
    --font-primary: ${fonts.primary};
    --font-secondary: ${fonts.secondary};
    --font-monospace: ${fonts.monospace};
    
    --font-weight-extraLight: ${fonts.weights.extraLight};
    --font-weight-light: ${fonts.weights.light};
    --font-weight-regular: ${fonts.weights.regular};
    --font-weight-medium: ${fonts.weights.medium};
    --font-weight-semibold: ${fonts.weights.semibold};
    --font-weight-bold: ${fonts.weights.bold};
    --font-weight-extraBold: ${fonts.weights.extraBold};
    
    --font-size-xs: ${fonts.sizes.xs};
    --font-size-sm: ${fonts.sizes.sm};
    --font-size-base: ${fonts.sizes.base};
    --font-size-lg: ${fonts.sizes.lg};
    --font-size-xl: ${fonts.sizes.xl};
    --font-size-2xl: ${fonts.sizes['2xl']};
    --font-size-3xl: ${fonts.sizes['3xl']};
    --font-size-4xl: ${fonts.sizes['4xl']};
    --font-size-5xl: ${fonts.sizes['5xl']};
    
    --line-height-tight: ${fonts.lineHeights.tight};
    --line-height-normal: ${fonts.lineHeights.normal};
    --line-height-relaxed: ${fonts.lineHeights.relaxed};
    --line-height-loose: ${fonts.lineHeights.loose};
    
    --letter-spacing-tight: ${fonts.letterSpacing.tight};
    --letter-spacing-normal: ${fonts.letterSpacing.normal};
    --letter-spacing-wide: ${fonts.letterSpacing.wide};
    --letter-spacing-wider: ${fonts.letterSpacing.wider};
    --letter-spacing-widest: ${fonts.letterSpacing.widest};
  }
`; 