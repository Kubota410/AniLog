import * as SecureStore from "expo-secure-store";

// アクセストークンを保存する関数
export const saveToken = async (token: string) => {
  try {
    await SecureStore.setItemAsync("accessToken", token);
    console.log("Access token saved securely : ", token);
  } catch (error) {
    console.error("Failed to save the token:", error);
  }
};

// アクセストークンを取得する関数
export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync("accessToken");
    if (token) {
      console.log("Access token retrieved:", token);
      return token;
    } else {
      console.log("No token found");
    }
  } catch (error) {
    console.error("Failed to retrieve the token:", error);
  }
  return null;
};
