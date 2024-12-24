import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import * as SecureStore from "expo-secure-store";
import getUserInfo from "../services/getUserInfo";

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

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true); // ローディング状態を管理

  // ユーザー情報を初期化する関数
  const initializeUser = async () => {
    try {
      console.log("コンテキスト初期処理開始");
      const accessToken = await SecureStore.getItemAsync("accessToken");
      console.log("コンテキスト初期処理 accesToken: ", accessToken);
      if (accessToken) {
        // ユーザー情報を取得してセット
        const result = await getUserInfo(accessToken);
        setUser({
          id: result?.id,
          username: result?.username,
          email: result?.email,
          accessToken: accessToken,
        });
        console.log("コンテキスト初期処理：ユーザー情報取得成功");
      }
    } catch (error) {
      console.error("Error initializing user:", error);
    } finally {
      setIsLoading(false); // 初期化完了後にローディング状態を解除
    }
  };

  useEffect(() => {
    // コンポーネントがマウントされたときにユーザー情報を初期化
    initializeUser();
  }, []);

  // ローディング状態がtrueの場合は何も表示せず、完了したら子コンポーネントを表示
  if (isLoading) {
    return null; // ここで何かローディングインディケーターを表示しても良い
  }

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
