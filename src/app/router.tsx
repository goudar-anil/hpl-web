
import { createBrowserRouter } from "react-router-dom";
import { AppLayout } from "../components/layout/AppLayout";
import { HomePage } from "../pages/HomePage";
import RegistrationPage from "../pages/RegistrationPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/register", element: <RegistrationPage />}
    ],
  },
]);
