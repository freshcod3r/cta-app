// Home screen for v1 -- exercises the wired pieces so the parity items
// pass an actual smoke-test, not just file presence:
//   - useStats() proves /lib/api + /features/trades/api integration
//   - BackHandlerModal proves Android hardware-back works
//   - registerForPushNotifications smoke proves expo-notifications wired
// Lock rule: every screen-root wraps SafeAreaView (not bare View).
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useStats } from "@/features/trades/api/queries";
import { BackHandlerModal } from "@/components/back-handler-modal";
import { registerForPushNotifications } from "@/lib/push/register";

export default function HomeScreen() {
  const stats = useStats();
  const [modalOpen, setModalOpen] = useState(false);
  const [pushStatus, setPushStatus] = useState<string>("not requested");

  const onPushTest = async () => {
    setPushStatus("requesting...");
    const r = await registerForPushNotifications();
    setPushStatus(r.ok ? `token: ${r.token.slice(0, 32)}...` : `failed: ${r.reason}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <View className="flex-1 items-center justify-center p-6">
        <Text className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
          Congress Trade Alerts
        </Text>
        <Text className="mb-8 text-sm text-gray-600 dark:text-gray-400">
          STOCK Act compliance tracker (v1 scaffold)
        </Text>

        <View className="mb-6 w-full rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800">
          <Text className="mb-1 text-xs uppercase text-gray-500 dark:text-gray-400">
            Live stats from congresstradealerts.com
          </Text>
          {stats.isLoading ? (
            <Text className="text-base text-gray-700 dark:text-gray-300">Loading...</Text>
          ) : stats.isError ? (
            <Text className="text-base text-red-600 dark:text-red-400">
              Error: {String(stats.error)}
            </Text>
          ) : (
            <View>
              <Text className="text-base text-gray-900 dark:text-gray-100">
                Overdue members 119th: {stats.data?.data?.overdue_members_119th ?? "-"}
              </Text>
              <Text className="text-base text-gray-900 dark:text-gray-100">
                Disclosures last 7d: {stats.data?.data?.disclosures_last_7d ?? "-"}
              </Text>
            </View>
          )}
        </View>

        <Pressable
          onPress={() => setModalOpen(true)}
          className="mb-3 w-full rounded-lg bg-indigo-500 px-4 py-3"
        >
          <Text className="text-center font-semibold text-white">
            Open BackHandler test modal
          </Text>
        </Pressable>

        <Pressable
          onPress={onPushTest}
          className="mb-3 w-full rounded-lg bg-emerald-600 px-4 py-3"
        >
          <Text className="text-center font-semibold text-white">
            Register for push notifications
          </Text>
        </Pressable>
        <Text className="text-xs text-gray-500 dark:text-gray-400">
          Push status: {pushStatus}
        </Text>
      </View>

      <BackHandlerModal
        visible={modalOpen}
        onClose={() => setModalOpen(false)}
        title="BackHandler smoke test"
      >
        <Text className="text-sm text-gray-700 dark:text-gray-300">
          Press Android hardware-back. The modal should close. App stays open.
        </Text>
      </BackHandlerModal>
    </SafeAreaView>
  );
}
