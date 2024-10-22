import { AntDesign } from "@expo/vector-icons"
import { Text, View, StyleSheet } from "react-native"
import { Link } from 'expo-router'

// 引数
interface Props{
    subTitleStr: string
}

// サブ画面ヘッダー
const HeaderSub = (props: Props): JSX.Element => {
    const {subTitleStr} = props
    return (
        <View style={styles.header}>
            {/* 設定アイコン */}
            <View>
                <Link href={'/'}>
                    <AntDesign name='back' size={30}/>
                </Link>            
            </View>
            
            {/* サブヘッダータイトル */}
            <View>
                <Text style={styles.subTitle}>{subTitleStr}</Text>
            </View>
            
            {/* フィルターアイコン 使用しないが、配置調整がめんどくさいので透明にして配置しておく */}
            <View style={styles.fillterIcon}>
                <AntDesign name='filter' size={30} color={'transparent'}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // ヘッダー
    header:{
        height: 60,
        backgroundColor: 'white',
        paddingBottom: 8,
        paddingHorizontal: 16,
        flexDirection: 'row', // 中の要素を横並び
        alignItems: 'flex-end', // 下揃え
        justifyContent: 'space-between' // 中央、左端、右端に配置
    },

    // サブタイトル
    subTitle:{
        fontSize: 30,
        fontWeight: 'bold'
    },

    // 設定アイコン
    settingIcon:{

    },
    // フィルターアイコン
    fillterIcon:{

    }
})

export default HeaderSub
