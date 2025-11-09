import { query } from "./_generated/server";

export const getLastMonth = query({
  handler: async (ctx) => {
    const months = await ctx.db.query("months").collect();
    if (months.length === 0) {
      return null;
    }
    const sortedMonths = months.sort((a, b) => b.createdAt - a.createdAt);
    return sortedMonths[0];
  },
});
