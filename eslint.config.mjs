import { defineConfig, globalIgnores } from "eslint/config"
import nextVitals from "eslint-config-next/core-web-vitals"
import nextTypescript from "eslint-config-next/typescript"

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores(["out/**", ".next/**", "next-env.d.ts"]),
  {
    // Static exports use committed picture sources instead of a server image optimizer.
    rules: { "@next/next/no-img-element": "off" },
  },
  {
    files: ["components/ui/carousel.tsx", "components/ui/sidebar.tsx", "components/ui/use-mobile.tsx", "hooks/use-mobile.ts"],
    // These retained, unused scaffolds do not opt into the React Compiler.
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
    },
  },
])
