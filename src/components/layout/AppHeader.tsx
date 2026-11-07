
import { Box, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import AppIcon from "../../assets/hpl.png";
const navItems = [
  { label: "Home", to: "/" },
  { label: "Register", to: "/register" },
  { label: "Teams", to: "/teams" },
  { label: "Fixtures", to: "/fixtures" },
];

export function AppHeader() {
  return (
    <Box as="header" bg="brand.royalBlue" color="brand.white">
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={3}
        align="center"
        justify="space-between"
        gap={4}
        wrap="wrap"
      >
        <HStack gap={3} minW="0">
          <Image
            src={AppIcon}
            alt="Hadagali Premier League"
            boxSize="52px"
            objectFit="contain"
          />
          <Box>
            <Text fontWeight="bold" letterSpacing="wide">
              HPL - Season 3
            </Text>
            <Text fontSize="xs" color="brand.slate">
              Shree Rudreshwara Cricket Club - Hadagali
            </Text>
          </Box>
        </HStack>

        <HStack gap={{ base: 3, md: 6 }} flexWrap="wrap">
          {navItems.map((item) => (
            <Link
              key={item.to}
              asChild
              fontSize="sm"
              fontWeight="medium"
              _hover={{ color: "brand.championshipGold" }}
              _currentPage={{
                color: "brand.championshipGold",
              }}
            >
              <NavLink to={item.to}>{item.label}</NavLink>
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  );
}
