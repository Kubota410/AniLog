import { Linking } from 'react-native'


const ShareApp = () => {
    const url = 'https://example.com/'
    Linking.openURL(url)
}

export default ShareApp
