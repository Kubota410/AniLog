import { Linking } from 'react-native'

const OpenAnnict = () => {
    const url = 'https://example.com/'
    Linking.openURL(url).catch(err => console.error("Failed to open URL:", err))
}

export default OpenAnnict
