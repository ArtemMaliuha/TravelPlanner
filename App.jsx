import { RouterProvider, createBrowserRouter } from "react-router";
import HomePage from "./src/pages/HomePage";
import RouteDetails from "./src/pages/RouteDetails";
import NotFoundPage from "./src/pages/NotFoundPage";
import { auth } from "./src/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useStore } from "./src/store/store";
import { useShallow } from "zustand/shallow";
import { useEffect } from "react";

const router = createBrowserRouter([
  {path: "/", element: <HomePage />},
  {path: "/routeDetails/:id", element: <RouteDetails />},
  {path: "*", element: <NotFoundPage />}
])

export default function App() {
  const {setUser} = useStore(
    useShallow((state) => ({
      setUser: state.setUser
    }))
  )

  useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser)
          })
          return () => unsubscribe()
      },[])

  return (
    <RouterProvider router={router} />
  )
}