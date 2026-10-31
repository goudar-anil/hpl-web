
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";

export default function AppHeader() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#101D32",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 76, gap: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, flexGrow: 1 }}>
            <SportsCricketIcon
              sx={{ color: "#B7F36B", fontSize: 36 }}
            />

            <Box>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Space Grotesk",
                  fontWeight: 700,
                  fontSize: 21,
                  lineHeight: 1.1,
                }}
              >
                HPL <Box component="span" sx={{ color: "#B7F36B" }}>S3</Box>
              </Typography>

              <Typography
                sx={{
                  color: "#AAB7C9",
                  fontSize: 10,
                  letterSpacing: 2,
                }}
              >
                THE TOURNAMENT
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3 }}>
            <Button color="inherit" href="/" sx={{ color: "#FFFFFF" }}>
              Home
            </Button>
            <Button color="inherit" href="/register" sx={{ color: "#FFFFFF" }}>
              Register
            </Button>
          </Box>

          <Button
            variant="contained"
            href="/register"
            sx={{
              bgcolor: "#B7F36B",
              color: "#101D32",
              "&:hover": { bgcolor: "#A5E65A" },
            }}
          >
            Join HPL
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
