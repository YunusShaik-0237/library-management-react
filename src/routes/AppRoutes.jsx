import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Landing from "../pages/Landing/Landing";
import Login from "../pages/Login/Login";

import Dashboard from "../pages/admin/Dashboard";

import Books from "../pages/Books/Books";
import Members from "../pages/Members/Members";
import Issues from "../pages/Issues/Issues";
import Returns from "../pages/Returns/Returns";
import Reports from "../pages/Reports/Reports";
import Settings from "../pages/Settings/Settings";
import NotFound from "../pages/NotFound/NotFound";

import ProtectedRoute from "../components/auth/ProtectedRoute";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Landing />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

        </Route>

        {/* Protected Routes */}

        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/books"
            element={<Books />}
          />

          <Route
            path="/members"
            element={<Members />}
          />

          <Route
            path="/issues"
            element={<Issues />}
          />

          <Route
            path="/returns"
            element={<Returns />}
          />

          <Route
            path="/reports"
            element={<Reports />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>

        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;