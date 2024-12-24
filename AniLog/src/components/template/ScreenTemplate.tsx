import React, { useCallback, useRef, useMemo } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import Header from "../molecules/Header";
import AnimeListScreenPage from "../pages/AnimeListScreenPage";
import SettingButtonScreenPage from "../pages/SettingButtonScreenPage";
import SettingNotifyScreenPage from "../pages/SettingNotifyScreenPage";
import UpdateDiaryScreenPage from "../pages/UpdateDiaryScreenPage";
import { CONST_COLORS } from "../../constants/styleConstants";
import BottomSheet, {
  BottomSheetView,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";
import LoginScreenPage from "../pages/LoginScreenPage";

// ログイン画面
export const LoginScreenTemplate = ({ navigation }: any) => (
  <SafeAreaView style={styles.container}>
    <LoginScreenPage navigattion={navigation} />
  </SafeAreaView>
);

// メイン画面
export const AnimeListScreenTemplate = ({ navigation }: any) => {
  // ===============BottomSheet================ そのうち分離する
  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // モーダルが開く高さのポイントを定義
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);

  // callbacks
  const handleSheetChange = useCallback((index: any) => {
    // snapPointsが0番の高さに来たらクローズ
    if (index == 0) {
      sheetRef.current?.close();
    }
  }, []);
  const handleSnapPress = useCallback((index: any) => {
    sheetRef.current?.snapToIndex(index);
  }, []);

  // renders
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1} // モーダルが閉じるとBackdropを非表示にする
        appearsOnIndex={0} // モーダルが開くとBackdropを表示する
      />
    ),
    []
  );
  // ===============BottomSheet================

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} onPress={() => handleSnapPress(1)} />
      <AnimeListScreenPage />

      <BottomSheet
        index={-1}
        ref={sheetRef}
        snapPoints={snapPoints}
        backdropComponent={renderBackdrop}
        enableDynamicSizing={false}
        onChange={handleSheetChange}
      >
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
};

// ボタン設定
export const SettingButtonScreenTemplate = ({ navigation }: any) => (
  <SafeAreaView style={styles.container}>
    <Header navigation={navigation} />
    <SettingButtonScreenPage />
  </SafeAreaView>
);

// 通知設定
export const SettingNotifyScreenTemplate = ({ navigation }: any) => (
  <SafeAreaView style={styles.container}>
    <Header navigation={navigation} />
    <SettingNotifyScreenPage />
  </SafeAreaView>
);

// アプデ日記
export const UpdateDiaryScreenTemplate = ({ navigation }: any) => (
  <SafeAreaView style={styles.container}>
    <Header navigation={navigation} />
    <UpdateDiaryScreenPage />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONST_COLORS.backGroundMain, // アプリ全体の背景色
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: "center",
  },
});
