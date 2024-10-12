import { Redirect } from "expo-router"

// 指定のページへリダイレクトする
const Index = (): JSX.Element => {
    return <Redirect href='screen/logIn' />
}

export default Index
