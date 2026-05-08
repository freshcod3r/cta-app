// Trade-feature queries. Uses centralized keys from ./keys (Lock rule).
import { useQuery } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import { tradesKeys } from "./keys";
import type { TradeDetailEnvelope, TradeRecord } from "./types";

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

// useTradeDetail -- GET /api/trades/{id}. Trades don't update post-disclosure
// (price fields can refresh via cron, but the headline transaction record is
// immutable), so a 5-min staleTime is generous without staleness risk. The id
// param is string (from useLocalSearchParams); the API accepts both string
// and numeric path segments.
export function useTradeDetail(id: string | undefined) {
  return useQuery({
    queryKey: id ? tradesKeys.detail(id) : tradesKeys.all,
    queryFn: ({ signal }) =>
      apiFetch<TradeDetailEnvelope>(`/api/trades/${id}`, { signal }),
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    select: (env) => env.data as TradeRecord,
  });
}
