import * as apiUrls from "../constants/apiUrls";

/**
 * Annictからユーザー情報を取得
 * @param accessToken アクセストークン
 * @returns API レスポンス JSON
 */
const getUserInfo = async (accessToken: string) => {
  try {
    // Annict APIのユーザー情報取得エンドポイント
    const endpoint = apiUrls.GetUserInfo;

    // リクエスト設定
    const response = await fetch(endpoint, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, // アクセストークンをヘッダーにセット
        "Content-Type": "application/json", // JSON形式でリクエスト
      },
    });

    // レスポンスの確認
    if (!response.ok) {
      throw new Error(
        `APIリクエスト失敗: ${response.status} ${response.statusText}`
      );
    }

    // JSONデータを取得
    const data = await response.json();

    return data; // ユーザー情報データを返す
  } catch (error) {
    console.error("ユーザー情報の取得中にエラーが発生しました:", error);
    return null; // エラー時はnullを返す
  }
};

export default getUserInfo;
