import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = (navigate) => {
    localStorage.removeItem("auth");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    setLoading(true);
    const getUserFromLocalStorage = async () => {
      const user = localStorage.getItem("auth");
      if (user) {
        const userDetails = JSON.parse(user);
        setUser(userDetails);
        return userDetails;
      } else {
        setUser(null);
      }
    };

    getUserFromLocalStorage();
  }, []);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useAuthContext = () => useContext(Context);
