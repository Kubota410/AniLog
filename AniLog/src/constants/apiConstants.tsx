import * as AuthSession from 'expo-auth-session';

// 開発環境
const devAuthInfo = {
    CLIENT_ID: 'I85V06NQkO1HlQUB5GtzP28BLTCpdGFe97kW9VwF1Fo',
    CLIENT_SECRET: '3E7QWc_oKASPfv-FqxjxO4jG3GwG3HvLrNtwA0Cb8W0',
    REDIRECT_URI: AuthSession.makeRedirectUri({ preferLocalhost: false }) // Expo Goの認証プロキシ用URIを生成 exp://192.168.11.29:8081
}

// 本番環境
const prodAuthInfo = {
    CLIENT_ID: 'I85V06NQkO1HlQUB5GtzP28BLTCpdGFe97kW9VwF1Fo',
    CLIENT_SECRET: '3E7QWc_oKASPfv-FqxjxO4jG3GwG3HvLrNtwA0Cb8W0',
    REDIRECT_URI: 'anilog://oauthredirect'
    // REDIRECT_URI: AuthSession.makeRedirectUri({ scheme: "anilog" })
}

export const AuthInfo = {
    AUTHORIZATION_ENDPOINT: 'https://annict.com/oauth/authorize',
    TOKEN_ENDPOINT: 'https://annict.com/oauth/token',
    API_URL: 'https://annict.com/oauth/token/info',
    GrapQL_URL: 'https://api.annict.com/graphql',
    ...(__DEV__ ? devAuthInfo : prodAuthInfo)
}