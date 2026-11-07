
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const highlights = [
  {
    number: "01",
    title: "Local Talent",
    description:
      "A platform for talented cricketers to showcase their skills and compete.",
  },
  {
    number: "02",
    title: "Team Rivalry",
    description:
      "Experience the excitement of team competition, strategy and sportsmanship.",
  },
  {
    number: "03",
    title: "Championship Spirit",
    description:
      "Celebrate the passion of cricket and the spirit of the Hadagali community.",
  },
];

export function HomePage() {
  return (
    <Box bg="brand.ivory">
      {/* Hero section */}
      <Box
        // bg="brand.royalBlue"
        color="brand.white"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px" py={{ base: 16, md: 24 }}>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 12, md: 8 }}
          >
            <VStack
              align="start"
              gap={6}
              maxW="680px"
              flex="1"
            >
              <HStack
                bg="rgba(212, 175, 55, 0.14)"
                color="brand.championshipGold"
                px={4}
                py={2}
                borderRadius="full"
              >
                <Box
                  w="8px"
                  h="8px"
                  bg="brand.championshipGold"
                  borderRadius="full"
                />
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  letterSpacing="widest"
                >
                  THE SPIRIT OF CRICKET
                </Text>
              </HStack>

              <Box>
                <Text
                  color="brand.championshipGold"
                  fontWeight="bold"
                  letterSpacing="widest"
                  fontSize="sm"
                  mb={3}
                >
                  SHREE RUDRESHWARA CRICKET CLUB PRESENTS
                </Text>

                <Heading
                  as="h1"
                  fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  lineHeight="1.05"
                  letterSpacing="tight"
                  color="brand.royalBlue"
                >
                  HADAGALI
                  <Box as="span" display="block" color="brand.championshipGold">
                    PREMIER LEAGUE - S3
                  </Box>
                </Heading>
              </Box>

              <Text
                color="brand.royalBlue"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="1.8"
                maxW="560px"
              >
                More than a game. A celebration of cricket, talent,
                teamwork and the competitive spirit of Hadagali.
              </Text>

              <HStack flexWrap="wrap" gap={4}>
                <Button
                  asChild
                  size="lg"
                  bg="brand.championshipGold"
                  color="brand.royalBlue"
                  px={7}
                  _hover={{ bg: "#E5C65C" }}
                >
                  <RouterLink to="/register">
                    Register as a Player
                  </RouterLink>
                </Button>

                {/* <Button
                  asChild
                  size="lg"
                  variant="outline"
                  borderColor="whiteAlpha.600"
                  color="white"
                  px={7}
                  _hover={{ bg: "whiteAlpha.200" }}
                >
                  <RouterLink to="/teams">
                    Explore Teams
                  </RouterLink>
                </Button> */}
              </HStack>
            </VStack>

            {/* Decorative championship identity */}
            <Flex
              flex="1"
              w="full"
              maxW={{ base: "320px", md: "420px" }}
              aspectRatio="1"
              align="center"
              justify="center"
              border="1px solid"
              borderColor="rgba(212, 175, 55, 0.45)"
              borderRadius="full"
              position="relative"
              bg="brand.royalBlue"
            >
              <Flex
                w="78%"
                h="78%"
                border="1px solid"
                borderColor="rgba(212, 175, 55, 0.3)"
                borderRadius="full"
                align="center"
                justify="center"
              >
                <VStack gap={1}>
                  <Text
                    color="brand.championshipGold"
                    fontSize="sm"
                    fontWeight="bold"
                    letterSpacing="widest"
                  >
                    THE CHAMPIONSHIP
                  </Text>
                  <Heading
                    fontSize={{ base: "2xl", md: "9xl" }}
                    lineHeight="1"
                    color="white"
                  >
                    HPL - S3
                  </Heading>
                  <Box
                    w="60px"
                    h="3px"
                    bg="brand.championshipGold"
                    mt={2}
                  />
                  <Text
                    color="whiteAlpha.800"
                    fontSize="xs"
                    letterSpacing="widest"
                  >
                    HADAGALI
                  </Text>
                </VStack>
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* Tournament highlights */}
      <Container maxW="1200px" py={{ base: 16, md: 20 }}>
        <VStack align="start" gap={3} mb={10}>
          <Text
            color="#9A7620"
            fontWeight="bold"
            fontSize="sm"
            letterSpacing="widest"
          >
            WHAT MAKES HPL SPECIAL
          </Text>

          <Heading
            color="brand.royalBlue"
            fontSize={{ base: "2xl", md: "4xl" }}
          >
            The Game. The Glory. The Community.
          </Heading>

          <Text color="gray.600" maxW="650px" lineHeight="1.8">
            Bringing players and cricket enthusiasts together through
            competition, passion and a shared love for the game.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
          {highlights.map((item) => (
            <Box
              key={item.number}
              bg="white"
              p={{ base: 6, md: 8 }}
              borderRadius="xl"
              borderTop="4px solid"
              borderColor="brand.championshipGold"
              boxShadow="sm"
            >
              <Text
                color="#B08A28"
                fontSize="sm"
                fontWeight="bold"
                mb={5}
              >
                {item.number}
              </Text>

              <Heading
                color="brand.royalBlue"
                fontSize="xl"
                mb={3}
              >
                {item.title}
              </Heading>

              <Text color="gray.600" lineHeight="1.8">
                {item.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>

      {/* Teams and fixtures */}
      <Box bg="white" py={{ base: 16, md: 20 }}>
        <Container maxW="1200px">
          <VStack align="center" textAlign="center" gap={4} mb={10}>
            <Text
              color="#9A7620"
              fontWeight="bold"
              fontSize="sm"
              letterSpacing="widest"
            >
              FOLLOW THE ACTION
            </Text>

            <Heading color="brand.royalBlue" fontSize={{ base: "2xl", md: "4xl" }}>
              Your Tournament Hub
            </Heading>

            <Text color="gray.600" maxW="600px">
              Stay connected with the teams and match schedule.
              Everything you need to follow the competition.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
            <Box
              bg="brand.ivory"
              p={{ base: 7, md: 10 }}
              borderRadius="xl"
            >
              <Text color="#9A7620" fontWeight="bold" fontSize="sm">
                MEET THE COMPETITORS
              </Text>
              <Heading color="brand.royalBlue" mt={3} mb={3}>
                Teams
              </Heading>
              <Text color="gray.600" mb={6} lineHeight="1.8">
                Explore participating teams and discover the players
                representing them.
              </Text>
              <Button
                asChild
                bg="brand.royalBlue"
                color="white"
                _hover={{ bg: "#243B75" }}
              >
                <RouterLink to="/teams">View Teams</RouterLink>
              </Button>
            </Box>

            <Box
              bg="brand.royalBlue"
              color="white"
              p={{ base: 7, md: 10 }}
              borderRadius="xl"
            >
              <Text color="brand.championshipGold" fontWeight="bold" fontSize="sm">
                DON'T MISS A MATCH
              </Text>
              <Heading mt={3} mb={3}>
                Fixtures
              </Heading>
              <Text color="whiteAlpha.800" mb={6} lineHeight="1.8">
                Check the match schedule and follow the road to
                the championship.
              </Text>
              <Button
                asChild
                bg="brand.championshipGold"
                color="brand.royalBlue"
                _hover={{ bg: "#E5C65C" }}
              >
                <RouterLink to="/fixtures">View Fixtures</RouterLink>
              </Button>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Registration CTA */}
      <Box bg="brand.ivory" py={{ base: 16, md: 20 }}>
        <Container maxW="900px">
          <VStack
            bg="brand.royalBlue"
            color="white"
            p={{ base: 8, md: 14 }}
            borderRadius="2xl"
            textAlign="center"
            gap={5}
          >
            <Text
              color="brand.championshipGold"
              fontWeight="bold"
              letterSpacing="widest"
              fontSize="sm"
            >
              BE PART OF THE GAME
            </Text>

            <Heading fontSize={{ base: "2xl", md: "4xl" }}>
              Ready to Represent Your Game?
            </Heading>

            <Text color="whiteAlpha.800" maxW="600px" lineHeight="1.8">
              Take the first step. Register as a player and become
              part of the Hadagali cricket community.
            </Text>

            <Button
              asChild
              size="lg"
              bg="brand.championshipGold"
              color="brand.royalBlue"
              px={8}
              _hover={{ bg: "#E5C65C" }}
            >
              <RouterLink to="/register">Start Registration</RouterLink>
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}
