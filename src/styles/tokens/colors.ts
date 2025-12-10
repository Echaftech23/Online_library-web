/**
 * Design Tokens - Color Palette
 *
 * This file documents the color system used throughout the application.
 * Colors are defined using OKLCH for better perceptual uniformity.
 *
 * OKLCH Format: oklch(Lightness Chroma Hue)
 * - Lightness: 0 (black) to 1 (white)
 * - Chroma: 0 (gray) to ~0.4 (vivid)
 * - Hue: 0-360 degrees (color wheel)
 */

// =============================================================================
// BASE PALETTE
// =============================================================================

export const palette = {
  // --- Primary: Earthy Orange/Rust ---
  // Used for primary actions, links, and brand identity
  orange: {
    50: "oklch(0.98 0.02 50)",
    100: "oklch(0.95 0.05 50)",
    200: "oklch(0.88 0.08 50)",
    300: "oklch(0.80 0.12 50)",
    400: "oklch(0.72 0.14 50)",
    500: "oklch(0.65 0.15 50)", // Primary
    600: "oklch(0.55 0.14 50)",
    700: "oklch(0.45 0.12 50)",
    800: "oklch(0.35 0.10 50)",
    900: "oklch(0.25 0.08 50)",
  },

  // --- Secondary: Forest Green ---
  // Used for secondary actions, success states, and nature theme
  forest: {
    50: "oklch(0.98 0.01 140)",
    100: "oklch(0.95 0.02 140)",
    200: "oklch(0.90 0.05 140)",
    300: "oklch(0.80 0.06 140)",
    400: "oklch(0.65 0.07 140)",
    500: "oklch(0.50 0.08 140)", // Secondary
    600: "oklch(0.40 0.07 140)",
    700: "oklch(0.30 0.05 140)",
    800: "oklch(0.22 0.04 140)",
    900: "oklch(0.15 0.02 140)",
  },

  // --- Neutral: Cream/Stone ---
  // Used for backgrounds, text, and borders
  cream: {
    50: "oklch(0.99 0.01 95)",
    100: "oklch(0.98 0.02 95)",
    200: "oklch(0.95 0.02 95)",
    300: "oklch(0.90 0.02 95)",
    400: "oklch(0.80 0.02 95)",
    500: "oklch(0.65 0.02 95)",
    600: "oklch(0.50 0.02 95)",
    700: "oklch(0.40 0.02 95)",
    800: "oklch(0.30 0.02 95)",
    900: "oklch(0.20 0.02 95)",
  },

  // --- Semantic Colors ---
  success: "oklch(0.65 0.15 145)",
  warning: "oklch(0.75 0.15 85)",
  error: "oklch(0.60 0.20 25)",
  info: "oklch(0.60 0.15 240)",
} as const;

// =============================================================================
// SEMANTIC TOKENS
// =============================================================================

export const semanticColors = {
  light: {
    // Backgrounds
    background: {
      default: palette.cream[100],
      subtle: palette.cream[200],
      muted: palette.forest[200],
      inverse: palette.forest[900],
    },
    // Foregrounds (Text)
    foreground: {
      default: palette.forest[900],
      muted: palette.forest[500],
      subtle: palette.forest[400],
      inverse: palette.cream[100],
    },
    // Interactive
    interactive: {
      default: palette.orange[500],
      hover: palette.orange[600],
      active: palette.orange[700],
      muted: palette.orange[100],
    },
    // Borders
    border: {
      default: palette.forest[200],
      muted: palette.cream[300],
      strong: palette.forest[300],
    },
  },
  dark: {
    // Backgrounds
    background: {
      default: palette.forest[900],
      subtle: palette.forest[800],
      muted: palette.forest[700],
      inverse: palette.cream[100],
    },
    // Foregrounds (Text)
    foreground: {
      default: palette.cream[100],
      muted: palette.cream[400],
      subtle: palette.cream[500],
      inverse: palette.forest[900],
    },
    // Interactive
    interactive: {
      default: palette.orange[400],
      hover: palette.orange[300],
      active: palette.orange[500],
      muted: palette.orange[800],
    },
    // Borders
    border: {
      default: palette.forest[600],
      muted: palette.forest[700],
      strong: palette.forest[500],
    },
  },
} as const;

// =============================================================================
// COMPONENT-SPECIFIC TOKENS
// =============================================================================

export const componentTokens = {
  button: {
    primary: {
      bg: "var(--primary)",
      text: "var(--primary-foreground)",
      hover: "var(--primary-hover)",
    },
    secondary: {
      bg: "var(--secondary)",
      text: "var(--secondary-foreground)",
      hover: "var(--secondary-hover)",
    },
  },
  card: {
    bg: "var(--card)",
    text: "var(--card-foreground)",
    border: "var(--border)",
  },
  input: {
    bg: "var(--input)",
    text: "var(--foreground)",
    border: "var(--border)",
    focus: "var(--ring)",
  },
} as const;

// =============================================================================
// UTILITY TYPES
// =============================================================================

export type ColorScale = keyof typeof palette.orange;
export type SemanticColor = keyof typeof semanticColors.light;
