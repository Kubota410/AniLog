import { StyleSheet, TouchableWithoutFeedback, View, Text } from 'react-native'
import { CONST_SIZES } from '../../constants/styleConstants'
import { useRouter } from 'expo-router'  // 画面遷移用のフックをインポート
import { CONST_SLIDE_ANIMATION_NAVIGATION } from '../../constants/animationConstants'

// サイドメニューのボタン
interface SideMenuItemProps {
    title: string,
    onPress: () => void,
    destination: string  // 遷移先のパスを指定するためのdestinationプロパティ
}

export const SideMenuItem = (props: SideMenuItemProps) => {
    const { title, onPress, destination } = props
    const router = useRouter()  // 画面遷移を行うためのフック

    // ボタンが押されたときにサイドメニューを閉じた後に画面遷移を行う
    const handlePress = () => {
        onPress()  // サイドメニューを閉じる処理
        // アニメーションが完了してから画面遷移を行いたい場合、setTimeoutを使って遅延させる
        setTimeout(() => {
            router.push(destination)  // 遷移先をdestinationで指定
        }, CONST_SLIDE_ANIMATION_NAVIGATION.duration)  // アニメーション時間に合わせて画面遷移の実行を遅延
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.sideMenuItem}>
                <Text style={styles.sideMenuItemText}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    // サイドメニュースタイル
    sideMenuItem: {
        height: 56,
        width: '100%',
        paddingVertical: 17, // 縦余白
        paddingLeft: 30, // 横余白
        borderBottomWidth: 1,
        borderColor: 'lightgray',
        justifyContent: 'center'
    },
    sideMenuItemText: {
        fontSize: CONST_SIZES.M
    }
})

export default SideMenuItem
