import { useRoutes } from "react-router-dom";
import ProtectedRoute from "@/components/protected-route";
import PublicRoute from "@/components/public-route";
import { LoginForm } from "@/pages/login";
import NotFound from "@/pages/not-found";
import { SignupForm } from "@/pages/signup";
import Sobre from "@/pages/sobre";
import Profile from "@/pages/profile";
import ForgotPasswordForm from "@/pages/forgot-password";
import ResetPasswordForm from "@/pages/reset-password";
import EmailValidation from "@/pages/validate-email";
import Home from "@/pages/home";

const allRoutes = () => {
  const publicRoutes = [
    {
      path: "/",
      element: <PublicRoute />,
      children: [
        { path: '/', element: <Home/>},
        { path: "sobre", element: <Sobre /> },
      ],
    },
  ];

  const publicOnlyRoutes = [
    {
      path: "/",
      element: <PublicRoute onlyPublic />,
      children: [
        { path: "login", element: <LoginForm /> },
        { path: "signup", element: <SignupForm /> },
        { path: "forgot-password", element: <ForgotPasswordForm /> },
        { path: "reset-password", element: <ResetPasswordForm /> },
        { path: "validate-email", element: <EmailValidation /> },
      ],
    },
  ];

  const privateRoutes = [
    {
      path: "/",
      element: <ProtectedRoute allowedRoles={["USER", "ADMIN"]} />,
      children: [
        { path: "profile", element: <Profile /> },
      ],
    },
  ];

  const adminRoutes = [
    {
      path: "/",
      element: <ProtectedRoute allowedRoles={["ADMIN"]} />,
      children: [{ path: "admin/dashboard", element: <>Admin Dashboard</> }],
    },
  ];

  const notFoundRoute = [{ path: "*", element: <NotFound /> }];

  return [...publicRoutes, ...publicOnlyRoutes, ...privateRoutes, ...adminRoutes, ...notFoundRoute];
};

export default function Routes() {
  const appRoutes = allRoutes();
  return useRoutes(appRoutes);
}
