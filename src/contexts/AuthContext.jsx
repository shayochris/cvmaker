import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

	const [token, setToken] = useState(() => {
		const data = JSON.parse(localStorage.getItem("token"))
		return data ? data : false
	})

	const contextData = {
		token
	}

	return (
		<AuthContext.Provider value={contextData}>
			{children}
		</AuthContext.Provider>
	)
}
