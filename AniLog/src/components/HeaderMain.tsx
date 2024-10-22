import { AntDesign } from "@expo/vector-icons"
import SegmentedControl from "@react-native-community/segmented-control"
import { useState } from "react"
import { View, StyleSheet } from "react-native"

// メイン画面ヘッダー
const HeaderMain = (): JSX.Element => {
    const [selectedIndex, setSelectedIndex] = useState(0)

    // segmentedControlの値が変更されたことを検知する
    const handleValueChange = (index) => {
        setSelectedIndex(index)
    }
    return (
        <View style={styles.header}>
            {/* 設定アイコン */}
            <View>
                <AntDesign name='setting' size={30}/>
            </View>
            
            {/* 中央コントロールタブ */}
            <View  style={styles.segmentedControlContainer}>
                <SegmentedControl
                values={['今期', '全期']}
                selectedIndex={selectedIndex}
                onChange={(event: { nativeEvent: { selectedSegmentIndex: any } }) => {
                    const index = event.nativeEvent.selectedSegmentIndex
                    handleValueChange(index)
                }}
                style={styles.segmentedControl}
                />
            </View>
            
            {/* フィルターアイコン */}
            <View style={styles.fillterIcon}>
                <AntDesign name='filter' size={30}/>
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
    // 中央コントロールコンテナ
    segmentedControlContainer:{
        width:180,
        height:40,
        justifyContent: 'center',
        borderRadius: 8 //角を丸める
    },
    segmentedControl:{
        backgroundColor: '#B2B2B2',
        height: '100%'
    },
    // 設定アイコン
    settingIcon:{

    },
    // フィルターアイコン
    fillterIcon:{

    }
})

export default HeaderMain
