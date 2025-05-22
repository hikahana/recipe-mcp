import { defineConfig } from "orval";

export default defineConfig({
  fdc: {
    input: {
      target: "./specs/fdc.yaml",
    },
    output: {
      mode: "single",
      client: "mcp",
      baseUrl: `https://api.nal.usda.gov/fdc?api_key=${process.env.USDA_KEY}`,
      target: "./src/handlers.ts",
      schemas: "./src/http-schemas",
    },
  },
});
