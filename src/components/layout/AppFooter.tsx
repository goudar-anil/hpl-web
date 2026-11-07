
import { Box, Text } from "@chakra-ui/react";

export function AppFooter() {
  return (
    <Box
      as="footer"
      bg="brand.royalBlue"
      color="brand.white"
      px={4}
      py={6}
      textAlign="center"
    >
      <Text fontSize="sm" fontWeight="medium">
        Hadagali Premier League
      </Text>
      <Text fontSize="xs" color="brand.slate" mt={1}>
        Organised by Shree Rudreshwara Cricket Club, Hadagali
      </Text>
    </Box>
  );
}
