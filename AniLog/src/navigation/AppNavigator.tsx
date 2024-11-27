import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import ReviewApp from './ReviewApp'
import ShareApp from './ShareApp'
import OpenAnnict from './OpenAnnict'
import { AnimeListScreenTemplate, SettingButtonScreenTemplate, SettingNotifyScreenTemplate, UpdateDiaryScreenTemplate } from '../components/template/ScreenTemplate'
import { CONST_DIMENSIONS } from '../constants/styleConstants'

// ドロワーナビゲーターを作成
const Drawer = createDrawerNavigator()

// カスタムドロワーのコンテンツを定義（左Navigation）
const CustomDrawerContent = (props: any) => (
    // ドロワーのスクロール可能な領域を提供
    <DrawerContentScrollView {...props}>
        {/* ヘッダー */}
        <View style={styles.sideMenuHeader}>
            <Text style={styles.headerText}>Anilog</Text>
        </View>

        {/* 画面遷移ボタン */}
        <DrawerItem label="ホーム" onPress={() => props.navigation.navigate('Home')} />
        <DrawerItem label="ボタン設定" onPress={() => props.navigation.navigate('ButtonSetting')} />
        <DrawerItem label="通知設定" onPress={() => props.navigation.navigate('NotifySetting')} />
        <DrawerItem label="アプデ日記" onPress={() => props.navigation.navigate('UpdateDiary')} />
        
        {/* 外部サイトへのリンク */}
        <View style={styles.sectionHeader}>
            <Text style={styles.headerText}>＜以下外部リンク＞</Text>
        </View>
        <DrawerItem label="アプリを紹介する（感謝）" onPress={ShareApp} />
        <DrawerItem label="アプリをレビューする（感謝）" onPress={ReviewApp} />
        <DrawerItem label="アカウント（annict）" onPress={OpenAnnict} />
    </DrawerContentScrollView>
)

// アプリ全体のナビゲーションコンテナを定義
const AppNavigator = () => (
    <NavigationContainer>
        {/* ドロワーナビゲーターの定義 */}
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />} // カスタムドロワーコンテンツを適用
            screenOptions={{ headerShown: false }} // 各画面でヘッダーを非表示に設定
            initialRouteName="Home"
        >
            {/* 各ドロワー画面の設定 */}
            <Drawer.Screen name="Home" component={AnimeListScreenTemplate} />
            <Drawer.Screen name="ButtonSetting" component={SettingButtonScreenTemplate} />
            <Drawer.Screen name="NotifySetting" component={SettingNotifyScreenTemplate} />
            <Drawer.Screen name="UpdateDiary" component={UpdateDiaryScreenTemplate} />
        </Drawer.Navigator>
    </NavigationContainer>
)

const styles = StyleSheet.create({
    sideMenuHeader: {
        height: CONST_DIMENSIONS.headerHeight + 40,
        justifyContent: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },
    sectionHeader: {
        marginVertical: 10,
        paddingHorizontal: 16
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#555'
    }
  })

export default AppNavigator
