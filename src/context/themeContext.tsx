import { createContext } from "react";
import { useDarkMode } from "@/src/hooks/useDarkMode";
import { lightTheme, ColorTheme } from "@/src/styles/theme";

interface ContextProps {
  colorTheme: ColorTheme;
  toggleColorTheme: () => void;
}

export const ThemeContext = createContext<ContextProps>({
  colorTheme: lightTheme,
  toggleColorTheme: () => {
    return null;
  },
});

export const DarkModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { colorTheme, toggleColorTheme } = useDarkMode();

  return (
    <ThemeContext.Provider value={{ colorTheme, toggleColorTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
