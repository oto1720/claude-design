import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  // Bundle the component CSS + tokens into a single dist/styles.css
  injectStyle: false,
  loader: {
    ".css": "css",
  },
  external: ["react", "react-dom", "react/jsx-runtime"],
});
