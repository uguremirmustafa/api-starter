import { createRoute, z } from "@hono/zod-openapi";

import * as HttpStatusCodes from "@/utils/http-status-codes";
import jsonContent from "@/utils/openapi/json-content";

const tags = ["Tasks"];

export const list = createRoute({
  path: "/tasks",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(z.object({
        name: z.string(),
        done: z.boolean(),
      })),
      "List of tasks",
    ),
  },
});

export type ListRoute = typeof list;
