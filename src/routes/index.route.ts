import { createRoute, z } from "@hono/zod-openapi";

import { createRouter } from "@/lib/create-app";
import * as HttpStatusCodes from "@/utils/http-status-codes";
import jsonContent from "@/utils/openapi/json-content";
import createMessageObjectSchema from "@/utils/openapi/schemas/create-message-object";

const router = createRouter()
  .openapi(
    createRoute({
      tags: ["Index"],
      method: "get",
      path: "/",
      responses: {
        [HttpStatusCodes.OK]: jsonContent(createMessageObjectSchema("Welcome to Tasks API"), "Tasks API Index"),
      },
    }),
    (c) => {
      return c.json({
        message: "welcome to task api",
      }, HttpStatusCodes.OK);
    },
  );

export default router;
