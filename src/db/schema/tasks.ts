import { boolean, pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

import users from "./users";

const tasks = pgTable(
  "tasks",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    description: varchar("description", { length: 512 }).notNull(),
    done: boolean().default(false),
    createdAt: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "date" }).notNull().$onUpdate(() => new Date()),
  },

);

export default tasks;
