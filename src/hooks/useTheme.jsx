import { useEffect, useState } from "react";

const useTheme = (init = null) => {
  const [isDark, setIsDark] = useState(
    init === null ? checkSystemTheme() : init,
  );

  useEffect(() => {
    setSystemTheme(isDark);
  }, [init]);

  const toggleTheme = (init) => {
    setSystemTheme(init);
    setIsDark(init);
  };

  const setSystemTheme = (isDarkTheme) => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return [isDark, toggleTheme];
};

const checkSystemTheme = () => {
  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
};

export default useTheme;
