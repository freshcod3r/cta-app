// Push-notification token registration via Expo Push.
// Per Lock: "Library: expo-notifications + Expo Push service (unified API)".
// Dev path (both platforms) -- Expo Go provides dev tokens, no enrollment.
// Prod path -- APNs (iOS, post-Apple-enrollment) + FCM (Android, post-
// Google-Play + Firebase). README documents the per-platform prod setup.
//
// Smoke-test acceptance (Pre-scaffold parity item #6 + Lock parity rule):
// must succeed on BOTH iOS and Android via Expo Go before merge.
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import { Platform } from "react-native";
import Constants from "expo-constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export type RegisterResult =
  | { ok: true; token: string }
  | { ok: false; reason: "permission_denied" | "not_a_device" | "no_project_id" | "error"; detail?: string };

export async function registerForPushNotifications(): Promise<RegisterResult> {
  if (!Device.isDevice) {
    return { ok: false, reason: "not_a_device" };
  }

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }

  const existing = await Notifications.getPermissionsAsync();
  let status = existing.status;
  if (status !== "granted") {
    const req = await Notifications.requestPermissionsAsync();
    status = req.status;
  }
  if (status !== "granted") {
    return { ok: false, reason: "permission_denied" };
  }

  const projectId =
    Constants.expoConfig?.extra?.eas?.projectId ??
    Constants.easConfig?.projectId;
  if (!projectId) {
    return { ok: false, reason: "no_project_id", detail: "set after `eas init`" };
  }

  try {
    const token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
    return { ok: true, token };
  } catch (e) {
    return { ok: false, reason: "error", detail: String(e) };
  }
}
