import { sql } from "drizzle-orm";
import { boolean, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const tasks = pgTable(
  "tasks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    name: varchar("name", { length: 512 }).notNull(),
    done: boolean().notNull().default(sql`FALSE`).$default(() => false),
    createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "date" }).notNull().$onUpdate(() => new Date()).defaultNow(),
  },

);

export default tasks;

export const taskSelectSchema = createSelectSchema(tasks).omit({ createdAt: true, updatedAt: true });
export const taskInsertSchema = createInsertSchema(tasks, {
  name: schema => schema.name.min(3),
})
  .required({ done: true })
  .omit({ createdAt: true, updatedAt: true, id: true });

export const taskPatchSchema = taskInsertSchema.partial();
