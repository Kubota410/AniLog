// ../types.ts

// ドロワーナビゲーションのパラメータリストの型定義
export type DrawerParamList = {
    // それぞれの画面名と、必要であればその画面に渡すパラメータを定義
    Home: undefined // 例：'Home' 画面にはパラメータが必要ない
    Settings: undefined // 例：'Settings' 画面にはパラメータが必要ない
    Profile: { userId: string } // 例：'Profile' 画面には userId を渡す
}
