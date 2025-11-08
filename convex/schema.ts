import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.optional(v.string()),
    email: v.optional(v.string()),
    image: v.optional(v.string()),
    tokenIdentifier: v.string(),
  }).index("by_token", ["tokenIdentifier"]),

  subscriptions: defineTable({
    userId: v.optional(v.string()),
    polarId: v.optional(v.string()),
    polarPriceId: v.optional(v.string()),
    currency: v.optional(v.string()),
    interval: v.optional(v.string()),
    status: v.optional(v.string()),
    currentPeriodStart: v.optional(v.number()),
    currentPeriodEnd: v.optional(v.number()),
    cancelAtPeriodEnd: v.optional(v.boolean()),
    amount: v.optional(v.number()),
    startedAt: v.optional(v.number()),
    endsAt: v.optional(v.number()),
    endedAt: v.optional(v.number()),
    canceledAt: v.optional(v.number()),
    customerCancellationReason: v.optional(v.string()),
    customerCancellationComment: v.optional(v.string()),
    metadata: v.optional(v.any()),
    customFieldData: v.optional(v.any()),
    customerId: v.optional(v.string()),
  })
    .index("userId", ["userId"])
    .index("polarId", ["polarId"]),

  webhookEvents: defineTable({
    type: v.string(),
    polarEventId: v.string(),
    createdAt: v.string(),
    modifiedAt: v.string(),
    data: v.any(),
  })
    .index("type", ["type"])
    .index("polarEventId", ["polarEventId"]),

  //default formula for savings
  savingsFormula: defineTable({
    name: v.string(),
    formula: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  labels: defineTable({
    name: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  months: defineTable({
    name: v.string(),
    notes: v.optional(v.array(v.string())),
    createdAt: v.number(),
    updatedAt: v.number(),
    initialBalance: v.number(),
    savingsFormula: v.optional(v.string()),
  }),

  fixedExpense: defineTable({
    name: v.string(),
    amount: v.number(),
    dayOfMonth: v.optional(v.number()),
    active: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  expense: defineTable({
    monthId: v.string(),
    fixedExpenseId: v.optional(v.string()), //optional if the expense is not a fixed expense
    amount: v.number(),
    description: v.optional(v.string()),
    labelIds: v.optional(v.array(v.string())),
    happenedAt: v.number(),
    isPaid: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  envelope: defineTable({
    name: v.string(),
    amount: v.number(),
    ceilingAmount: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  envelopeContribution: defineTable({
    envelopeId: v.string(),
    amount: v.number(),
    notes: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  savings: defineTable({
    balance: v.number(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  savingsMove: defineTable({
    savingsId: v.string(),
    amount: v.number(),
    notes: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),

  fixedPeriodic: defineTable({
    name: v.string(),
    amount: v.number(),
    intervalMonths: v.number(),
    nextDueMonth: v.number(),
    active: v.boolean(),
    notes: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  }),
});
