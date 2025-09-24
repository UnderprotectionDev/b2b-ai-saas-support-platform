import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  conversations: defineTable({
    threadId: v.string(),
    contactSessionId: v.id("contactSessions"),
    organizationId: v.string(),
    status: v.union(v.literal("unresolved"), v.literal("escalated"), v.literal("resolved")),
  })
    .index("by_organization_id", {
      fields: ["organizationId"],
    })
    .index("by_contact_session_id", {
      fields: ["contactSessionId"],
    })
    .index("by_thread_id", {
      fields: ["threadId"],
    })
    .index("by_status_and_organization_id", {
      fields: ["status", "organizationId"],
    }),
  contactSessions: defineTable({
    name: v.string(),
    email: v.string(),
    organizationId: v.string(),
    expiresAt: v.number(),
    metadata: v.optional(
      v.object({
        userAgent: v.optional(v.string()),
        language: v.optional(v.string()),
        languages: v.optional(v.string()),
        platform: v.optional(v.string()),
        vendor: v.optional(v.string()),
        screenResolution: v.optional(v.string()),
        viewportSize: v.optional(v.string()),
        timezone: v.optional(v.string()),
        timezoneOffset: v.optional(v.number()),
        cookieEnabled: v.optional(v.boolean()),
        referrer: v.optional(v.string()),
        currentUrl: v.optional(v.string()),
      })
    ),
  })
    .index("by_organization_id", {
      fields: ["organizationId"],
    })
    .index("by_expires_at", {
      fields: ["expiresAt"],
    }),
  users: defineTable({
    name: v.string(),
  }),
});
