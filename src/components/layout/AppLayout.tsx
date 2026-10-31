
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default function AppLayout() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AppHeader />

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      <AppFooter />
    </Box>
  );
}
