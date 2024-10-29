import * as HttpStatusPhrases from "@/utils/http-status-phrases";
import createMessageObjectSchema from "@/utils/openapi/schemas/create-message-object";

export const notFoundSchema = createMessageObjectSchema(HttpStatusPhrases.NOT_FOUND);
