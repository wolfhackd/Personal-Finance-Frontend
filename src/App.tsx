import "./shared/styles/Global.css";
import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
} from "@tanstack/react-router";
import { Home } from "./pages/home/ui/home";

const rootRoute = createRootRoute();

//Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Home />,
});

//Route Tree
const routeTree = rootRoute.addChildren([indexRoute]);

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;
