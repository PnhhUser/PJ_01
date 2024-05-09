import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./Pages/home";
import LayoutPage from "./Layouts/layout";
import LoginPage, { action as loginAction } from "./Pages/login";
import RegisterPage, { action as registerAction } from "./Pages/register";
import StorePage from "./Pages/store";
import LayoutStore from "./Layouts/laytoutStore";
import CategoriesPage from "./Pages/categories";
import SubCategoriesPage from "./Pages/subCategories";
import { CartProvider } from "./contexts/cartContext";
import { AuthProvider } from "./contexts/authContext";
import PersonalPage from "./Pages/personal";
import LayoutAdmin from "./Layouts/layoutAdmin";
import DashboardPage from "./Pages/admin/dashboard";
import { PrivateAdmin } from "./Components/privateAdmin";
import { PrivateUser } from "./Components/privateUser";
import UsersPage from "./Pages/admin/users";

function Router() {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />

          <Route path="login" element={<LoginPage />} action={loginAction} />
          <Route
            path="register"
            element={<RegisterPage />}
            action={registerAction}
          />

          <Route
            path="/personal"
            element={
              <PrivateUser>
                <PersonalPage />
              </PrivateUser>
            }
          />

          <Route path="/dashboard" element={<LayoutAdmin />}>
            <Route
              index
              element={
                <PrivateAdmin>
                  <DashboardPage />
                </PrivateAdmin>
              }
            />
            <Route
              path=":users"
              element={
                <PrivateAdmin>
                  <UsersPage />
                </PrivateAdmin>
              }
            />
          </Route>

          <Route path="/store" element={<LayoutStore />}>
            <Route index element={<StorePage />} />
            <Route path=":category" element={<CategoriesPage />} />
            <Route
              path=":category/:subCategory"
              element={<SubCategoriesPage />}
            />
          </Route>
        </Route>
      </>
    )
  );

  return (
    <AuthProvider>
      <CartProvider>
        <RouterProvider router={routerApp} />
      </CartProvider>
    </AuthProvider>
  );
}

export default Router;
