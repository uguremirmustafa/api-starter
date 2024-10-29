import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import env from "@/env";

import * as schema from "./schema/index";

export const queryClient = postgres(env.DATABASE_URL);
const db = drizzle({ client: queryClient, schema });

export default db;
