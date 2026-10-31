import {
  Box,
  Button,
  Container,
  Chip,
} from "@mui/material";

import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      {/* Hero section */}
      <Box
        sx={{
          bgcolor: "#101D32",
          color: "#FFFFFF",
          position: "relative",
          overflow: "hidden",
          py: { xs: 9, md: 15 },
        }}
      >
        <SportsCricketIcon
          sx={{
            position: "absolute",
            right: { xs: -50, md: 80 },
            top: "50%",
            transform: "translateY(-50%) rotate(-25deg)",
            fontSize: { xs: 250, md: 430 },
            color: "rgba(183,243,107,0.07)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box sx={{ maxWidth: 650 }}>
            <Chip
              label="HPL • SEASON 3"
              sx={{
                mb: 3,
                bgcolor: "rgba(183,243,107,0.12)",
                color: "#B7F36B",
                fontWeight: 700,
                letterSpacing: 1,
              }}
            />

            <Box
              component="h1"
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: { xs: 48, sm: 64, md: 82 },
                lineHeight: 1.05,
                m: 0,
              }}
            >
              ONE TEAM.
              <Box
                component="span"
                sx={{ color: "#B7F36B", display: "block" }}
              >
                ONE DREAM.
              </Box>
            </Box>

            <Box
              component="p"
              sx={{
                color: "#B9C5D5",
                fontSize: { xs: 16, md: 19 },
                lineHeight: 1.8,
                maxWidth: 520,
                mt: 3,
                mb: 3,
              }}
            >
              The passion of cricket. The spirit of competition.
              Get ready to be part of HPL Season 3.
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
                alignItems: { xs: "stretch", sm: "center" },
                pt: 1,
              }}
            >
              <Button
                component={Link}
                to="/register"
                variant="contained"
                size="large"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: "#B7F36B",
                  color: "#101D32",
                  px: 3,
                  py: 1.5,
                  "&:hover": { bgcolor: "#A5E65A" },
                }}
              >
                Register as a Player
              </Button>

              <Button
                component="a"
                href="#about"
                variant="outlined"
                size="large"
                sx={{
                  color: "#FFFFFF",
                  borderColor: "#526078",
                  py: 1.5,
                  "&:hover": { borderColor: "#B7F36B" },
                }}
              >
                Explore HPL
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About section */}
      <Box id="about" sx={{ py: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              maxWidth: 650,
              mx: "auto",
              textAlign: "center",
            }}
          >
            <Box
              component="p"
              sx={{
                color: "#27864B",
                fontWeight: 700,
                letterSpacing: 2,
                fontSize: 13,
                mb: 2,
              }}
            >
              MORE THAN JUST A GAME
            </Box>

            <Box
              component="h2"
              sx={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: { xs: 30, md: 42 },
                mt: 0,
                mb: 2,
              }}
            >
              Welcome to HPL Season 3
            </Box>

            <Box
              component="p"
              sx={{
                color: "text.secondary",
                maxWidth: 650,
                lineHeight: 1.8,
                mx: "auto",
                mt: 0,
              }}
            >
              A platform for cricket lovers to come together, showcase
              their talent and compete with pride. Your next cricket
              journey starts here.
            </Box>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              },
              gap: 3,
              mt: 6,
            }}
          >
            {[
              {
                icon: <GroupsIcon />,
                title: "Be Part of HPL",
                description:
                  "Register yourself and become part of the tournament community.",
              },
              {
                icon: <EmojiEventsIcon />,
                title: "Compete with Pride",
                description:
                  "Showcase your cricket skills and embrace the spirit of competition.",
              },
              {
                icon: <SportsCricketIcon />,
                title: "Live Your Game",
                description:
                  "Bring your passion for cricket onto the field.",
              },
            ].map((item) => (
              <Box
                key={item.title}
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "1px solid #E8ECE4",
                  borderRadius: 4,
                  p: 3.5,
                  transition: "0.2s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 12px 30px rgba(16,29,50,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#EFF8E5",
                    color: "#27864B",
                    width: 52,
                    height: 52,
                    borderRadius: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                    "& svg": { fontSize: 28 },
                  }}
                >
                  {item.icon}
                </Box>

                <Box
                  component="h3"
                  sx={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: 20,
                    mb: 1,
                    mt: 0,
                  }}
                >
                  {item.title}
                </Box>

                <Box
                  component="p"
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.7,
                    m: 0,
                  }}
                >
                  {item.description}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Registration CTA */}
      <Box sx={{ pb: { xs: 7, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              bgcolor: "#B7F36B",
              borderRadius: 4,
              px: { xs: 3, md: 7 },
              py: { xs: 5, md: 6 },
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
              gap: 3,
            }}
          >
            <Box>
              <Box
                component="h2"
                sx={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: 27, md: 36 },
                  m: 0,
                }}
              >
                Ready to take the field?
              </Box>

              <Box
                component="p"
                sx={{ mt: 1, mb: 0, color: "#34452A" }}
              >
                Start your HPL Season 3 journey today.
              </Box>
            </Box>

            <Button
              component={Link}
              to="/register"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#101D32",
                color: "#FFFFFF",
                px: 3,
                py: 1.5,
                whiteSpace: "nowrap",
                "&:hover": { bgcolor: "#253B5B" },
              }}
            >
              Register Now
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
}