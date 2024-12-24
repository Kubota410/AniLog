import React, { useCallback, useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLogin } from "../../hooks/useLogin";
import { useFocusEffect } from "@react-navigation/native";

// ログイン
const LoginScreenPage = (navigation: any): JSX.Element => {
  /**
   * ログインHook
   */
  const { user, errorMessage, promptAsync, initialize } = useLogin();

  // エラー時の対処法表示切替
  const [isErrorHelpVisible, setIsErrorHelpVisible] = useState(false);

  // 初期処理 ログアウトによって遷移してきたときも実行
  useFocusEffect(
    useCallback(() => {
      initialize();
    }, [initialize])
  );

  // エラー処理
  useEffect(() => {
    if (errorMessage.length > 0) {
      setIsErrorHelpVisible(true);
    } else {
      setIsErrorHelpVisible(false);
    }
  }, [errorMessage]);

  /**
   * ログイン処理　ユーザー情報取得に成功した場合ホーム画面へ遷移する
   */
  useEffect(() => {
    // ユーザー情報がある時のみ実行
    if (user) {
      // これ恐らく公式の誤字 そのうち修正されて影響受けるかも。
      navigation.navigattion.navigate("Home");
    }
  }, [user]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.outerContainer}>
          {/* ヘッダー */}
          <View style={styles.header}>
            <Text style={styles.welcomeText}>ANILOGへようこそ！</Text>
          </View>

          {/* メインメッセージ */}
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              このアプリは Annict（アニメ情報サイト）からデータを取得するため、
              アカウント連携が必須です。
            </Text>
            <Text style={styles.message}>
              以下の「連携」ボタンから、Annictへのログイン/登録をお願いします。
            </Text>
          </View>

          {/* 連携ボタン */}
          <TouchableOpacity style={styles.button} onPress={() => promptAsync()}>
            <Text style={styles.buttonText}>連携を開始する</Text>
          </TouchableOpacity>

          {/* エラーした場合表示 */}
          {isErrorHelpVisible && (
            <>
              {/* エラーメッセージ */}
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{errorMessage}</Text>
              </View>

              {/* 対処法のセクション */}
              <View style={styles.instructions}>
                <Text style={styles.subheading}>エラーした場合の対処法</Text>

                {/* 手順 1 */}
                <View style={styles.stepContainer}>
                  <Text style={styles.stepTitle}>
                    1. Annictアカウントを作成
                  </Text>
                  <Text style={styles.stepText}>
                    アカウント未作成の場合、こちらからAnnictアカウントを作成してください。
                  </Text>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL("https://annict.com/sign_up")
                    }
                  >
                    Annict 登録用サイト
                  </Text>
                </View>

                {/* 手順 2 */}
                <View style={styles.stepContainer}>
                  <Text style={styles.stepTitle}>2. アカウント作成後</Text>
                  <Text style={styles.stepText}>
                    連携ボタンをタップした後、メールを「送らずに」以下にIDとPassを入力してください。
                  </Text>
                  <Image
                    source={{ uri: "https://via.placeholder.com/150" }} // 適切な画像URLに置き換えてください
                    style={styles.image}
                  />
                </View>

                {/* 手順 3 */}
                <View style={styles.stepContainer}>
                  <Text style={styles.stepTitle}>3. 上手くいかない場合</Text>
                  <Text style={styles.stepText}>
                    標準ブラウザのキャッシュをクリアしてから、再度手順2をお試しください。
                  </Text>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL("https://support.apple.com/ja-jp/105082")
                    }
                  >
                    iosブラウザキャッシュクリア方法
                  </Text>
                  <Text
                    style={styles.link}
                    onPress={() =>
                      Linking.openURL(
                        "https://support.google.com/accounts/answer/32050?hl=ja&co=GENIE.Platform%3DAndroid"
                      )
                    }
                  >
                    Androidブラウザキャッシュクリア方法
                  </Text>
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f2ec",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  outerContainer: {
    flex: 1,
    paddingVertical: "10%",
    alignItems: "center",
    paddingHorizontal: "8%",
  },
  header: {
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5a3d2b",
    textAlign: "center",
  },
  messageContainer: {
    marginTop: 40,
    width: "100%",
  },
  message: {
    fontSize: 16,
    color: "#5a3d2b",
    marginBottom: 10,
    lineHeight: 22,
  },
  instructions: {
    backgroundColor: "#f1e8d0",
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 40,
    width: "100%",
  },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#5a3d2b",
    marginBottom: 20,
    textAlign: "center",
  },
  stepContainer: {
    marginBottom: 20,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#5a3d2b",
    marginBottom: 5,
  },
  stepText: {
    fontSize: 14,
    color: "#5a3d2b",
    lineHeight: 20,
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginVertical: 10,
  },
  link: {
    fontSize: 14,
    color: "#a67d5a",
    textAlign: "center",
    textDecorationLine: "underline",
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#a65b45",
    padding: 16,
    marginTop: 40,
    borderRadius: 50,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  errorContainer: {
    backgroundColor: "#d9534f",
    padding: 12,
    borderRadius: 8,
    marginTop: 60,
    alignSelf: "stretch",
    alignItems: "center",
    maxWidth: 600,
  },
  errorText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default LoginScreenPage;
