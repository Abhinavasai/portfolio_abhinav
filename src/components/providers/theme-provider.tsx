"use client";

import {
  createContext,
  type PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "portfolio-theme";

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>("light");

  useEffect(() => {
    let storedTheme: string | null = null;
    try { storedTheme = window.localStorage.getItem(STORAGE_KEY); } catch { /* Storage can be unavailable in embedded browsers. */ }
    const nextTheme: Theme = storedTheme === "light" || storedTheme === "dark" ? storedTheme : "system";
    setTheme(nextTheme);
    setResolvedTheme(nextTheme === "system" ? getSystemTheme() : nextTheme);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (nextTheme: Theme) => {
      const computed = nextTheme === "system" ? getSystemTheme() : nextTheme;
      document.documentElement.classList.toggle("dark", computed === "dark");
      document.documentElement.style.colorScheme = computed;
      setResolvedTheme(computed);
    };

    applyTheme(theme);

    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,
      resolvedTheme,
      setTheme: (nextTheme: Theme) => {
        setTheme(nextTheme);
        try { window.localStorage.setItem(STORAGE_KEY, nextTheme); } catch { /* Keep theme switching functional without persistence. */ }
      }
    }),
    [resolvedTheme, theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
