"use client";
import { useEffect, useState } from "react";

/* Theme provider import */
import { ThemeProvider } from "next-themes";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
  }
}
