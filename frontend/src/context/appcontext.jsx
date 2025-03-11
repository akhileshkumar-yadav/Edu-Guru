// import { useRouter } from "next/navigation";
// import { createContext, useState, useContext, useEffect } from "react";

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//   const router = useRouter();

//   const [currentUser, setCurrentUser] = useState(null);
//   const [loggedIn, setLoggedIn] = useState(false);

//   // Ensuring localStorage logic runs only on the client side
//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user) {
//       setCurrentUser(user);
//       setLoggedIn(true);
//     }
//   }, []); // Empty dependency array ensures this runs only once on mount

//   const logout = () => {
//     setCurrentUser(null);
//     localStorage.removeItem("user");
//     setLoggedIn(false);
//     router.push("/mainpages/login");
//   };

//   return (
//     <AppContext.Provider
//       value={{
//         currentUser,
//         setCurrentUser,
//         loggedIn,
//         setLoggedIn,
//         logout,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// };

// const useAppContext = () => useContext(AppContext);

// export default useAppContext;
