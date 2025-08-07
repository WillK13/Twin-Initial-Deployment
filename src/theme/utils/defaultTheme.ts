import { type Theme } from "../hooks/useTheme";

export const defaultTheme: Theme = {
  palette: {
    text: {
      default: "#F5F6FA",
      dimmed: "#8B93A8",
      dark: "#212732",
    },
    background: {
      dark: "#05070A",
      dimmed: "#343B4C",
      light: "#F5F6FA",
      success: "#4CAF50",
      error: "#F44336",
    },
  },
  border: {
    dimmed: "border-[#212732] border-[0.5px] border-solid",
    light: "border-[#212732] border-[0.5px] border-solid",
  },
  animation: {
    quick: "transition-all duration-75",
    standard: "transition-all duration-150",
    slow: "transition-all duration-300",
  },
  shadow: {
    glow: "shadow-[0_0_32px_4px_rgba(52,59,76,0.15)]",
    levitate: "",
  },
};
