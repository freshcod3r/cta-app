// Trade-feature queries. Uses centralized keys from ./keys (Lock rule).
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import { tradesKeys } from "./keys";

type StatsPayload = {
  ok: boolean;
  data: {
    overdue_members_119th?: number;
    disclosures_last_7d?: number;
    committee_overlap_trades_7d?: number;
    congress_alpha?: { avg_stock?: number; avg_spx?: number };
  };
};

export function useStats() {
  return useQuery({
    queryKey: tradesKeys.stats(),
    queryFn: ({ signal }) => apiFetch<StatsPayload>("/api/stats", { signal }),
  });
}
