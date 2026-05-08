// Committee assignment chips. Horizontal scroll list.
//
// CTA-App-1-4 pre-flight P1 finding: committees are NOT exposed in the
// /api/trades/{id} response. Component takes a `committees: string[]`
// prop with default [] so it integrates cleanly when the backend adds
// the field (or a separate /api/legislators/{id}/committees endpoint).
// Empty state renders a one-line placeholder so the section is visible
// in the layout but doesn't fabricate data.
import { FlatList, Text, View } from "react-native";

type Props = { committees?: string[] };

export function CommitteeChips({ committees = [] }: Props) {
  if (!committees.length) {
    return (
      <View className="px-4 pb-2">
        <Text className="text-xs uppercase text-gray-500 dark:text-gray-400">
          Committee assignments
        </Text>
        <Text className="mt-1 text-sm italic text-gray-500 dark:text-gray-400">
          Committee data ships when backend exposes it (CTA-N TBD).
        </Text>
      </View>
    );
  }

  return (
    <View className="pb-2">
      <Text className="px-4 pb-2 text-xs uppercase text-gray-500 dark:text-gray-400">
        Committee assignments
      </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={committees}
        keyExtractor={(c) => c}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 8 }}
        renderItem={({ item }) => (
          <View className="rounded-full border border-gray-300 bg-gray-50 px-3 py-1 dark:border-gray-700 dark:bg-gray-800">
            <Text className="text-xs text-gray-700 dark:text-gray-300">
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
