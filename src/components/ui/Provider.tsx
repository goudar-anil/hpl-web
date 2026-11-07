
import type { PropsWithChildren } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "../../theme/system";

function Provider({ children }: PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      {children}
    </ChakraProvider>
  );
}

export default Provider;
