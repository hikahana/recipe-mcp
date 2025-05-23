import { defineConfig } from "orval";

export default defineConfig({
  fdc: {
    input: {
      target: "./specs/fdc.yaml",
    },
    output: {
      mode: "single",
      client: "mcp",
      // baseUrlを/api.nal.usda.gov/fdcに修正し、api_keyはparamsで渡す
      baseUrl: "https://api.nal.usda.gov/fdc",
      target: "./src/handlers.ts",
      schemas: "./src/http-schemas",
    },
  },
});
