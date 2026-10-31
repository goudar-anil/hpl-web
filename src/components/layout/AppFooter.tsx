
import { Box, Container, Typography } from "@mui/material";

export default function AppFooter() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#101D32",
        color: "#FFFFFF",
        py: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontFamily: "Space Grotesk",
            fontWeight: 700,
            fontSize: 22,
          }}
        >
          HPL <Box component="span" sx={{ color: "#B7F36B" }}>SEASON 3</Box>
        </Typography>

        <Typography sx={{ color: "#AAB7C9", mt: 1, fontSize: 13 }}>
          The Game. The Glory. The Legacy.
        </Typography>

        <Box
          sx={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            mt: 3,
            pt: 2,
          }}
        >
          <Typography sx={{ color: "#AAB7C9", fontSize: 12 }}>
            © {new Date().getFullYear()} HPL Season 3. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
