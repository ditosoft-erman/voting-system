import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextProps {
  isAdmin: boolean;
  loginAsAdmin: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const loginAsAdmin = () => {
    setIsAdmin(true);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, loginAsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
