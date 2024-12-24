import React, { createContext, useContext, useState, ReactNode } from "react";

// ユーザー情報の型定義
type UserInfo = {
  id: string;
  username: string;
  email: string;
  accessToken: string;
};

// コンテキストの型定義
type UserContextType = {
  user: UserInfo | null;
  setUser: (user: UserInfo | null) => void;
};

// 初期値
const UserContext = createContext<UserContextType | undefined>(undefined);

// プロバイダーコンポーネント
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserInfo | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// カスタムフック
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
