import { createRouter } from "@/lib/create-app";

import * as handlers from "./tasks.handler";
import * as routes from "./tasks.routes";

const router = createRouter()
  .openapi(routes.list, handlers.list)
  .openapi(routes.create, handlers.create)
  .openapi(routes.getOne, handlers.getOne)
  .openapi(routes.remove, handlers.remove)
  .openapi(routes.patch, handlers.patch);

export default router;
