
import type { PropsWithChildren } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { AppHeader } from "./AppHeader";
import { AppFooter } from "./AppFooter";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <Flex minH="100vh" direction="column">
      <AppHeader />

      <Box as="main" flex="1" w="full">
        {children ?? <Outlet />}
      </Box>

      <AppFooter />
    </Flex>
  );
}
