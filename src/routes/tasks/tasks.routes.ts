import { createRoute, z } from "@hono/zod-openapi";

import { taskInsertSchema, taskSelectSchema } from "@/db/schema/tasks";
import { notFoundSchema } from "@/lib/constants";
import * as HttpStatusCodes from "@/utils/http-status-codes";
import jsonContent from "@/utils/openapi/json-content";
import jsonContentRequired from "@/utils/openapi/json-content-required";
import createErrorSchema from "@/utils/openapi/schemas/create-error-schema";
import IdUUIDParamsSchema from "@/utils/openapi/schemas/uuid-params-schema";

const tags = ["Tasks"];

export const list = createRoute({
  path: "/tasks",
  method: "get",
  tags,
  responses: {
    [HttpStatusCodes.OK]: jsonContent(
      z.array(taskSelectSchema),
      "List of tasks",
    ),
  },
});
export type ListRoute = typeof list;

export const create = createRoute({
  path: "/tasks",
  method: "post",
  tags,
  request: {
    body: jsonContentRequired(taskInsertSchema, "The task to create"),
  },
  responses: {
    [HttpStatusCodes.CREATED]: jsonContent(taskSelectSchema, "The created task"),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(createErrorSchema(taskInsertSchema), "The validation error(s)"),
  },
});
export type CreateRoute = typeof create;

export const getOne = createRoute({
  path: "/tasks/{id}",
  method: "get",
  tags,
  request: {
    params: IdUUIDParamsSchema,
  },
  responses: {
    [HttpStatusCodes.OK]: jsonContent(taskSelectSchema, "Requested task"),
    [HttpStatusCodes.NOT_FOUND]: jsonContent(notFoundSchema, "Task not found"),
    [HttpStatusCodes.UNPROCESSABLE_ENTITY]: jsonContent(createErrorSchema(IdUUIDParamsSchema), "Invalid id error"),
  },
});
export type GetOneRoute = typeof getOne;
