// Root layout per Lock + Pre-scaffold parity checklist item #7
// (SafeAreaProvider in root _layout). Order from outermost to innermost:
//   SafeAreaProvider -> PersistQueryClientProvider -> ThemeProvider -> Stack
// global.css import is required to wire NativeWind's runtime stylesheet.
import "../global.css";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import "react-native-reanimated";

import { queryClient, queryPersister } from "@/lib/query/client";
import { ThemeProvider } from "@/lib/theme/provider";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: queryPersister }}
      >
        <ThemeProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(main)" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </PersistQueryClientProvider>
    </SafeAreaProvider>
  );
}
