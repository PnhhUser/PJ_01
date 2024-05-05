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

          <Route path="/store" element={<StorePage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={routerApp} />;
}

export default Router;
