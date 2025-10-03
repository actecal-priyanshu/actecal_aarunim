import React, { createContext, useContext, useEffect, useState } from 'react';

type User = { id: string; email: string; company?: string; role?: string } | null;

type AuthContextValue = {
  user: User;
  token: string | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem('auth_token'));
  const [user, setUser] = useState<User>(null);

  async function fetchMe(tok: string) {
    const res = await fetch('/api/auth/me', { headers: { Authorization: `Bearer ${tok}` } });
    if (res.ok) {
      const data = await res.json();
      setUser(data.user);
    } else {
      setUser(null);
      setToken(null);
      localStorage.removeItem('auth_token');
    }
  }

  useEffect(() => {
    if (token) fetchMe(token);
  }, [token]);

  const login = async (tok: string) => {
    localStorage.setItem('auth_token', tok);
    setToken(tok);
    await fetchMe(tok);
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}


