import { Text, TextInput, View, StyleSheet } from 'react-native'
import { Text as ElementText } from 'react-native-elements'
import Header from '../../components/Header'
import Button from '../../components/Button'
import { Link } from 'expo-router'

// MemoListメイン画面
const LogIn = (): JSX.Element => {
  return (
    // 外枠
    <View style={styles.container}>
        {/* header枠 */}
        <Header />

        {/* body枠 */}
        <View style={styles.inner}>
            <Text style={styles.title}>ログイン</Text>
            <TextInput style={styles.input} value='Email Address'></TextInput>
            <TextInput style={styles.input} value='Password'></TextInput>
            <View>
                <Button>ログイン</Button>
            </View>
            <View style={{flexDirection:'row', marginTop:10}}>
                <Text>登録がまだの方はこちら：    </Text>
                {/* URLはindexから見た階層を指定する。 
                asChildを使って入れ子にすることで、子要素のスタイルを優先できる。
                押下時の色の変化などを統一したいため */}
                <Link href={'/auth/sign_up'} asChild>
                    <ElementText style={{ color: 'blue', textDecorationLine: 'underline' }}>
                        会員登録
                    </ElementText>
                </Link>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    // 全体背景色
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

    // 一つ内側の枠
    inner:{
        flex: 1,
        backgroundColor: 'aliceblue',
        padding: 20
    },

    // タイトル
    title:{
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom:10
    },

    // 入力欄
    input:{
        backgroundColor: 'white',
        borderWidth: 1, // 枠線の幅を指定
        borderColor: 'darkgray', // 枠線の色を指定
        paddingVertical: 20, // テキストの内側の余白
        paddingHorizontal: 10,
        marginBottom: 10
    }
})

export default LogIn
