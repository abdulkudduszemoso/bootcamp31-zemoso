import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    heading1: React.CSSProperties;
    heading2: React.CSSProperties;
    heading3: React.CSSProperties;

    heading4: React.CSSProperties;
    heading5: React.CSSProperties;

    body3: React.CSSProperties;
    body4: React.CSSProperties;
    body5: React.CSSProperties;
    body6: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    heading1?: React.CSSProperties;
    heading2?: React.CSSProperties;
    heading3?: React.CSSProperties;
    heading4?: React.CSSProperties;
    heading5?: React.CSSProperties;

    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    body5?: React.CSSProperties;
    body6?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    heading1: true;
    heading2: true;
    heading3: true;
    heading4: true;
    heading5: true;

    body3: true;
    body4: true;
    body5: true;
    body6: true;
  }
}
const fontSize = 14;
const htmlFontSize = 16;
const coef = fontSize / 14;
const pxToRem = (size: number) => `${(size / htmlFontSize) * coef}rem`;
const theme = createTheme({
  palette: {
    primary: {
      main: "#6B4DE0",
      dark: "#4D1C8C",
      light: "#9E62B3",
    },
    secondary: {
      main: "#5A5766",
      light: "#757380",
      dark: "#2D2A38",
    },
  },
  typography: {
    heading1: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: pxToRem(24),
      lineHeight: "28px",
      letterSpacing: "-0.015em",
    },
    heading2: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: pxToRem(16),
      lineHeight: "20px",
      letterSpacing: "-0.005em",
    },
    heading3: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: pxToRem(12),
      lineHeight: "16px",
    },
    heading4: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: pxToRem(20),
      lineHeight: "24px",
      letterSpacing: "-0.005em",
    },
    heading5: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: pxToRem(14),
      lineHeight: "20px",
    },
    body1: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: pxToRem(14),
      lineHeight: "20px",
    },
    body2: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(16),
      lineHeight: "20px",
    },
    body3: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(12),
      lineHeight: "18px",
    },
    body4: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: pxToRem(12),
      lineHeight: "16px",
    },
    body5: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: pxToRem(14),
      lineHeight: "18px",
    },
    body6: {
      fontFamily: "Inter, sans-serif",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: pxToRem(12),
      lineHeight: "18px",
    },
  },
});
declare module "@mui/material/styles" {
  interface Palette {
    textColors?: PaletteOptions["textColors"];
  }

  interface PaletteOptions {
    textColors?: {
      highEmphasis?: string;
      mediumEmphasis?: string;
      lowEmphasis?: string;
      white?: string;
      success?: string;
      error?: string;
    };
  }
}
export default theme;
export const Colors = {
  light_grey: "#F6F5F7",
  light_blue: "#C6CEF7",
  primary_gradient: "#6B4DE0",
  white: "#FFFFFF",
  high_emphasis: "#2D2A38",
  medium_emphasis: "#5A5766",
  low_emphasis: "#757380",
  button_text: "#FAFAFC",
  violet: '#4D1C8C',
  label_black: '#12121D',
  chip_background: '#F8F8FA',
  chip_selected: '#9E62B2',
  unfinished: '#D4D2D9'
};
