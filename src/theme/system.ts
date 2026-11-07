
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          royalBlue: { value: "#172554" },
          championshipGold: { value: "#D4AF37" },
          white: { value: "#FFFFFF" },
          slate: { value: "#94A3B8" },
          ivory: { value: "#F8F7F2" },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
