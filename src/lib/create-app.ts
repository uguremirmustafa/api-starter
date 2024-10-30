import { OpenAPIHono } from "@hono/zod-openapi";

import serveEmojiFavicon from "@/middlewares/emoji-favicon";
import notFound from "@/middlewares/not-found";
import onError from "@/middlewares/on-error";
import { logger } from "@/middlewares/pino-logger";
import defaultHook from "@/utils/openapi/default-openapi-hook";

import type { AppBindings, AppOpenAPI } from "./types";

export function createRouter() {
  return new OpenAPIHono<AppBindings>({ strict: false, defaultHook });
}

function createApp() {
  const app = createRouter();
  app.use(logger());
  app.use(serveEmojiFavicon("🤘"));

  app.notFound(notFound);
  app.onError(onError);

  return app;
}

export default createApp;

export function createTestApp(router: AppOpenAPI) {
  const testApp = createApp();
  testApp.route("/", router);
  return testApp;
}
