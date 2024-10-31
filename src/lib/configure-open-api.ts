import { apiReference } from "@scalar/hono-api-reference";

import type { AppOpenAPI } from "./types";

import packageJson from "../../package.json" with { type: "json" };

export default function configureOpenAPI(app: AppOpenAPI) {
  app.doc("/doc", {
    openapi: "3.0.0",
    info: {
      version: packageJson.version,
      title: packageJson.name,
    },
  });

  app.get("/reference", apiReference({
    spec: {
      url: "/doc",
    },
    theme: "bluePlanet",
    layout: "classic",
    defaultHttpClient: {
      targetKey: "node",
      clientKey: "axios",
    },

  }));
}
