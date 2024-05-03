import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./Pages/home";
import LayoutPage from "./Layouts/layout";
import LoginPage from "./Pages/login";

function Router() {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginPage />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={routerApp} />;
}

export default Router;
