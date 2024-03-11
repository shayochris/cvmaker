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
import Create from "./pages/create/Create"
import Profile from "./pages/create/Profile"
import Education from "./pages/create/Education"
import PersonalDetails from "./pages/create/PersonalDetails"
import Skills from "./pages/create/Skills"
import Experience from "./pages/create/Experience"
import Projects from "./pages/create/Projects"
import Languages from "./pages/create/Languages"
import Hobbies from "./pages/create/Hobbies"
import Referees from "./pages/create/Referees"
import Links from "./pages/create/Links"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>

        <Route path="/" element={<Protected />} >
          <Route path="/" element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="create" element={<Create />}>
            <Route path="/create" element={<Profile />} />
            <Route path="personal" element={<PersonalDetails />} />
            <Route path="education" element={<Education />} />
            <Route path="skills" element={<Skills />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="languages" element={<Languages />} />
            <Route path="hobbies" element={<Hobbies />} />
            <Route path="referees" element={<Referees />} />
            <Route path="links" element={<Links />} />
          </Route>

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
