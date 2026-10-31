
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#101D32",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#B7F36B",
      contrastText: "#101D32",
    },
    background: {
      default: "#F5F7F2",
      paper: "#FFFFFF",
    },
    text: {
      primary: "#101D32",
      secondary: "#64748B",
    },
    success: {
      main: "#27864B",
    },
    error: {
      main: "#DC4545",
    },
  },

  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
    },
    h4: {
      fontFamily: "'Space Grotesk', sans-serif",
      fontWeight: 600,
    },
    button: {
      fontWeight: 700,
      textTransform: "none",
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "11px 22px",
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 24px rgba(16, 29, 50, 0.06)",
        },
      },
    },
  },
});

export default theme;
