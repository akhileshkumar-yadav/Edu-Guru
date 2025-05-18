"use client";

import { useRouter } from "next/navigation";
import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const router = useRouter();

  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Run this only in the browser
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const user = JSON.parse(storedUser);
        setCurrentUser(user);
        setLoggedIn(true);
      }
    }
  }, []);

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
    setLoggedIn(false);
    router.push("/mainpages/login");
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loggedIn,
        setLoggedIn,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
