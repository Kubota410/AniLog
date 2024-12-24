import axios from "axios";
import { useUser } from "../context/UserContext";
import { AuthInfo } from "../constants/apiConstants";
import { PostTokenRevoke } from "../constants/apiUrls";

/**
 * アクセストークンを失効させる
 */
export const revokeToken = async () => {
  console.log("revoke1");

  // ユーザーコンテキスト
  const { user } = useUser();
  console.log("revoke2");

  if (user) {
    try {
      const response = await axios.post(
        PostTokenRevoke,
        new URLSearchParams({
          client_id: AuthInfo.CLIENT_ID,
          client_secret: AuthInfo.CLIENT_SECRET,
          token: user.accessToken,
        }),
        {
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("トークンを失効させました:", response.status);
    } catch (error) {
      console.error("トークンの失効に失敗しました:", error);
    }
  }
  console.log("revoke完了");
};
