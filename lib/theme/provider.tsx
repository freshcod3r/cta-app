// ThemeProvider -- bridges the Zustand theme store + system colorScheme into
// NativeWind's runtime so className="dark:bg-..." reflects the resolved mode.
import { ReactNode, useEffect } from "react";
import { useColorScheme as useDeviceColorScheme } from "react-native";
import { colorScheme } from "nativewind";
import { useThemeStore } from "./store";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const mode = useThemeStore((s) => s.mode);
  const device = useDeviceColorScheme();

  useEffect(() => {
    const resolved = mode === "system" ? device ?? "light" : mode;
    colorScheme.set(resolved);
  }, [mode, device]);

  return <>{children}</>;
}
