export const COLORS = {
  // Primary colors
  PRIMARY: '#4A90E2', // 아이스 블루
  PRIMARY_DARK: '#357ABD',

  // Background colors
  BACKGROUND: '#F5F5F5',
  BACKGROUND_LIGHT: '#FFFFFF',
  BACKGROUND_GREY: '#E8E8E8',

  // Text colors
  TEXT_PRIMARY: '#000000',
  TEXT_SECONDARY: '#666666',
  TEXT_TERTIARY: '#999999',
  TEXT_WHITE: '#FFFFFF',

  // Status colors
  SUCCESS: '#4CAF50',
  WARNING: '#FF9800',
  ERROR: '#F44336',
  INFO: '#2196F3',

  // Border colors
  BORDER: '#E0E0E0',
  BORDER_LIGHT: '#F0F0F0',

  // Category colors
  CATEGORY_PERFORMANCE: '#FF6B6B',
  CATEGORY_RESTAURANT: '#4ECDC4',
  CATEGORY_CAFE: '#95A5A6',
  CATEGORY_EXHIBITION: '#F7DC6F',
} as const;

export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
} as const;

export const FONT_SIZES = {
  XS: 12,
  SM: 14,
  MD: 16,
  LG: 18,
  XL: 20,
  XXL: 24,
} as const;

export const BORDER_RADIUS = {
  SM: 8,
  MD: 12,
  LG: 16,
  XL: 24,
  ROUND: 999,
} as const;
