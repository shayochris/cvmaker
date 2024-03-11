import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"
import { AuthProvider } from "./contexts/AuthContext"

//layouts
import Protected from "./Layouts/Protected"
import Guest from "./Layouts/Guest"

//pages
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Settings from "./pages/Settings"
import Create from "./pages/Create"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path="/" element={<Protected />} >
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="create" element={<Create />} />
        </Route>

        <Route path="/" element={<Guest />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>

      </Route>
    )
  )
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )

}

export default App
