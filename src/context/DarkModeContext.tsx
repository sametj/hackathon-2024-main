import { ReactNode, createContext, useContext, useEffect } from "react";
import { useLocalStorageState } from "@hooks/useLocalStorageState";
import { DarkModeContextType } from "./darkModeContext.types";

export const DarkModeContext = createContext<DarkModeContextType | null>({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

function DarkModeProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, "isDarkMode");

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
        document.documentElement.classList.add("light-mode");
      }
    },
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode: () =>
          setIsDarkMode((prevIsDark: boolean) => !prevIsDark),
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined)
    throw new Error("DarkModeContext was used outside DarkModeProvider");
  return context;
}

export { DarkModeProvider, useDarkMode };
