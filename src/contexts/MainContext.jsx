import { createContext, useState } from "react";

export const MainContext = createContext()
export default function MainProvider({ children }) {
  const [mobileMenu, setMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu)
  }
  const contextData = {
    mobileMenu, toggleMobileMenu
  }
  return (
    <MainContext.Provider value={contextData} >
      {children}
    </MainContext.Provider>
  )
}