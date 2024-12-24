import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FilterIcon, HamburgerMenuIcon } from "../atoms/Icons";
import { CONST_DIMENSIONS } from "../../constants/styleConstants";

interface HeaderProps {
  navigation: any;
  onPress?: () => void;
}

const Header = (props: HeaderProps) => {
  const { navigation, onPress } = props;

  // 現在のナビゲーション状態から画面名を取得
  const currentScreenName =
    navigation.getState().routes[navigation.getState().index].name;

  // Home以外の場合フィルターを表示しない
  let disabledFlag;
  if (currentScreenName === "Home") {
    disabledFlag = true;
  } else {
    disabledFlag = false;
  }

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <HamburgerMenuIcon />
      </TouchableOpacity>
      <Text style={styles.title}>App Title</Text>
      {/* Home以外の場合フィルターを表示しないが、配置（space-between）の関係で透明にして残しておく */}
      <TouchableOpacity
        onPress={onPress}
        disabled={disabledFlag ? false : true}
        style={{ opacity: disabledFlag ? 1 : 0 }}
      >
        <FilterIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ヘッダー全体のスタイル
  header: {
    height: CONST_DIMENSIONS.headerHeight,
    paddingBottom: 8,
    paddingHorizontal: 16,
    flexDirection: "row", // 中の要素を横並び
    alignItems: "flex-end", // 下揃え
    justifyContent: "space-between", // 中央、左端、右端に配置
  },
  // ヘッダー内のタイトルテキストのスタイル
  title: {
    // フォントサイズを18pxに設定
    fontSize: 18,
    // テキストを太字に設定
    fontWeight: "bold",
  },
});

export default Header;
