"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import config from "@/config";

const themes = config.themes;

const useMounted = (): boolean => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
};

function ThemePicker() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  return (
    <details className="relative z-50">
      <summary>{mounted ? theme : "theme"}</summary>
      <ul className="p-2 bg-base-100 rounded-t-none">
        {themes.map((theme) => (
          <li key={theme}>
            <button onClick={() => setTheme(theme)}>{theme}</button>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default ThemePicker;
