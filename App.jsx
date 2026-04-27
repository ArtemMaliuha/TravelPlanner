import { RouterProvider, createBrowserRouter } from "react-router";
import HomePage from "./src/pages/HomePage";
import RouterDetails from "./src/pages/RouteDetails";
import NotFoundPage from "./src/pages/NotFoundPage";


const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/routeDetails/:id", elemet: <RouterDetails />},
  {path: "*", element: <NotFoundPage />}
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}