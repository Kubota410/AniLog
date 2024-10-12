import { View, Text, StyleSheet } from "react-native"

const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            {/* header */}
            <View  style={styles.headerInner}>
                <Text style={styles.headerTitle}>Memo App</Text>
                <Text style={styles.headerLogout}>ログアウト</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        // header全体
        backgroundColor: '#467FD3',
        height: 104,
        justifyContent: 'flex-end' // 下に寄せる
    },
    headerInner: {
        // 中の要素全体
        alignItems: 'center'
    },
    headerTitle: {
        marginBottom: 8,
        fontSize: 22,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    headerLogout: {
        position: 'absolute', // flexboxの制御を外し、任意の位置を指定する
        right: 16,
        bottom: 8,
        color: 'rgba(255,255,255,0.7)'
    }
})

export default Header
