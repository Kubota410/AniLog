import React, { useCallback, useEffect, useState } from "react";
import * as AuthSession from "expo-auth-session";
import { AuthInfo } from "../constants/apiConstants";
import { useUser } from "../context/UserContext";
import getUserInfo from "../services/getUserInfo";

/**
 * ログインhooks
 */
export const useLogin = () => {
  // エラーメッセージ
  const [errorMessage, setErrorMessage] = useState("");

  // 認可コード
  const [authorizationCode, setAuthorizationCode] = useState("");

  // アクセストークン
  const [accessToken, setAccessToken] = useState("");

  // ユーザーコンテキスト
  const { user, setUser } = useUser();

  /**
   * OAuth認証フック
   * @request 認証依頼リクエスト
   * @response 認証結果
   * @promptAsync OAuth 認証フローを開始し、外部の認証画面を起動する
   */
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: AuthInfo.CLIENT_ID,
      redirectUri: AuthInfo.REDIRECT_URI,
      scopes: ["read", "write"], // 必要な権限
    },
    { authorizationEndpoint: AuthInfo.AUTHORIZATION_ENDPOINT }
  );

  /**
   * 初期処理　一度だけ実行
   */
  const initialize = useCallback(async () => {
    // ログアウト処理
    setUser(null);
    setAuthorizationCode("");
    setAccessToken("");
    setErrorMessage("");
  }, []);

  /**
   * 認証レスポンスの監視、認可コード発行
   */
  useEffect(() => {
    setErrorMessage("");

    // 認証中、レスポンスなし
    if (response?.type === undefined) return;

    // 認可コード取得
    if (response?.type === "success") {
      // 成功
      setErrorMessage("");
      setAuthorizationCode(response.params.code);
    } else {
      // エラー
      setErrorMessage(
        "認証中にエラーが発生しました...すみませんが以下の対処法の実施をお願いします。"
      );
      console.error("***エラー時のリクエスト： ", request);
      console.error("***エラー時のレスポンス： ", response);
    }
  }, [response]);

  /**
   * 認可コード発行後、アクセストークンを取得
   */
  useEffect(() => {
    setErrorMessage("");

    // 認可コードがあればアクセストークンを発行
    if (authorizationCode) {
      getAccessToken(authorizationCode)
        .then((successResult) => {
          // アクセストークン発行成功
          setAccessToken(successResult);
        })
        .catch((errorResult) => {
          // アクセストークン発行失敗
          setErrorMessage(
            `アクセストークン発行中にエラーが発生しました...すみませんが以下の対処法の実施をお願いします。`
          );
          console.error(
            `アクセストークン発行中にエラーが発生しました。err: ${errorResult}`
          );
        });
    }
  }, [authorizationCode]);

  /**
   * アクセストークン発行後、ユーザー情報を取得
   */
  useEffect(() => {
    setErrorMessage("");

    // アクセストークンがあればユーザー情報を取得
    if (accessToken) {
      getUserInfo(accessToken)
        .then((result) => {
          // 成功　コンテキスト更新
          setUser({
            id: result?.id,
            username: result?.username,
            email: result?.email,
            accessToken: accessToken,
          });
        })
        .catch((errorResult) => {
          // 失敗　エラー表示
          setErrorMessage(
            `ユーザー情報取得中にエラーが発生しました...すみませんが以下の対処法の実施をお願いします。`
          );
          console.error(
            `ユーザー情報取得中にエラーが発生しました。err: ${errorResult}`
          );
        });
    }
  }, [accessToken]);

  return {
    user,
    errorMessage,
    promptAsync,
    initialize,
  };
};

// 認可コードを受け取り、アクセストークンを発行する
const getAccessToken = async (authorizationCode: any) => {
  try {
    // POSTリクエストのボディを設定
    const body = new URLSearchParams({
      client_id: AuthInfo.CLIENT_ID,
      client_secret: AuthInfo.CLIENT_SECRET,
      code: authorizationCode,
      redirect_uri: AuthInfo.REDIRECT_URI,
      grant_type: "authorization_code",
    });

    // アクセストークンのリクエストを送信
    const response = await fetch(AuthInfo.TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });

    // レスポンスをJSONで処理
    if (response.ok) {
      const data = await response.json();
      return data.access_token; // アクセストークンを返す
    } else {
      throw new Error(`response: ${response}`);
    }
  } catch (error) {
    console.dir("***アクセストークン発行に失敗しました:", error);
  }
};
