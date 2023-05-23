import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(cardAnatomy.keys)

const variants = {
  regular: definePartsStyle({
    container: {
      borderColor: "rgba(0,0,0,0.3)",
      borderWidth: "1px",
      boxShadow: "0 10px 15px 0 rgba(0,0,0,0.2)",
      borderRadius: "10px",
    }
  })
}

export const cardTheme = defineMultiStyleConfig({ variants });