// Query-key registry for the trades feature.
// Lock rule: "Query keys are part of the API contract. Centralize in
// /features/<feature>/api/keys.ts. No inline ad-hoc keys at call sites."
export const tradesKeys = {
  all: ["trades"] as const,
  list: () => [...tradesKeys.all, "list"] as const,
  detail: (id: string) => [...tradesKeys.all, "detail", id] as const,
  stats: () => [...tradesKeys.all, "stats"] as const,
};
