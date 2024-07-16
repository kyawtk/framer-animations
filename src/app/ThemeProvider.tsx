import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
const ThemeProviderWrapper = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;
