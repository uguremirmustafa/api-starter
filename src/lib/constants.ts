import * as HttpStatusPhrases from "@/utils/http-status-phrases";
import createMessageObjectSchema from "@/utils/openapi/schemas/create-message-object";

export const notFoundSchema = createMessageObjectSchema(HttpStatusPhrases.NOT_FOUND);

export const ZOD_ERROR_MESSAGES = {
  REQUIRED: "Required",
  EXPECTED_NUMBER: "Expected number, received nan",
  INVALID_UUID: "Invalid uuid",
  NO_UPDATES: "No updates provided",
};

export const ZOD_ERROR_CODES = {
  INVALID_UPDATES: "invalid_updates",
};
