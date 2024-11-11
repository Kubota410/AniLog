import React, { useState , useEffect } from 'react'
import { Modal, View, Text, StyleSheet, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { CONST_DIMENSIONS, CONST_SIZES } from '../../constants/styleConstants'
import SideMenuButton from '../atoms/Button'

// 画面の幅を取得
const { width } = Dimensions.get('window')

// サイドメニューの初期位置を画面幅の-80%に設定（画面外に配置）
const initialPosition = -width * 0.8

interface SideMenuModalProps {
  isVisible: boolean
  onClose: () => void
}

const SideMenuModal: React.FC<SideMenuModalProps> = ({ isVisible, onClose }) => {
  // スライドアニメーションのためのアニメーション値（初期位置は画面外）
  const [slideAnim] = useState(new Animated.Value(initialPosition))

  // モーダルを開く関数
  const openModal = () => {
      // サイドメニューをスライドイン（0位置にアニメーション）
      Animated.timing(slideAnim, {
        toValue: 0,  // 画面内に表示
        duration: 300,  // アニメーションの速度（ミリ秒）
        useNativeDriver: true  // パフォーマンス向上のため、ネイティブドライバを使用
      }).start()
  }

  // モーダルを閉じる関数
  const closeModal = () => {
    // サイドメニューをスライドアウト（画面外に戻す）
    Animated.timing(slideAnim, {
      toValue: initialPosition,  // 初期位置（画面外）に戻す
      duration: 300,  // アニメーションの速度
      useNativeDriver: true  // ネイティブドライバを使用
    }).start(() => {
      // アニメーションが終了したら非表示にする
      onClose()
    })
  }

  useEffect(() => {
    if (isVisible) {
      openModal()
    } else {
      closeModal()
    }
  }, [isVisible, slideAnim])  // `isVisible` が変わった時にアニメーションを実行

  return (
    <Modal
      transparent={true}  // 背景を透過させる
      animationType="none"  // デフォルトのアニメーションを無効化
      visible={isVisible}  // 親コンポーネントから渡された状態で表示・非表示を制御
      onRequestClose={closeModal}  // Androidのバックボタンでモーダルを閉じる
    >
      {/* 背景をタッチしてモーダルを閉じるためにTouchableWithoutFeedbackを使用 */}
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalBackground}>
          {/* サイドメニュー内をタッチした時にcloseModalが発火しないようにTouchableWithoutFeedbackを被せる */}
          <TouchableWithoutFeedback>
            {/* サイドメニューをスライドアニメーション付きで表示 */}
            <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
              {/* サイドメニューのヘッダー */}
              <View style={styles.sideMenuHeader}>
                <Text style={styles.headerText}>Anilog</Text>
              </View>
              {/* 各種ボタン */}
              <SideMenuButton href='/' title='ホーム'  onPress={closeModal} />
              <SideMenuButton href='/screen/setting_Button_Screen' title='ボタン設定'  onPress={closeModal} />
              <SideMenuButton href='/screen/setting_Notify_Screen' title='通知設定'  onPress={closeModal} />
              <SideMenuButton href='/' title='アプリを紹介する（感謝）'  onPress={closeModal} />
              <SideMenuButton href='/' title='アプリをレビューする（感謝）'  onPress={closeModal} />
              <SideMenuButton href='/' title='アカウント（annict）'  onPress={closeModal} />
              <SideMenuButton href='/screen/releaseNotes_Screen' title='アプデ日記'  onPress={closeModal} />
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  sideMenuItem:{
    height: 56,
    width: '100%',
    paddingVertical: 17, //縦余白
    paddingLeft: 30, //横余白
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'center'
  },
  sideMenuItemText:{
    fontSize: CONST_SIZES.M
  },
  // メニューを開くボタンのスタイル
  openButton: {
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 5,
    marginTop: 50,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  },
  // モーダルの背景スタイル
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // 背景を少し暗くしてモーダルを強調
    justifyContent: 'flex-start',  // 上から配置
    alignItems: 'flex-start'  // 左寄せ
  },
  // サイドメニューのスタイル
  menu: {
    width: width * 0.8,  // サイドメニューの幅を画面の80%に設定
    height: '100%',  // 高さは画面の全体に
    backgroundColor: '#fff',  // 白い背景色
    position: 'absolute',
    top: 0,  // 上端に配置
    left: 0  // 左端に配置
  },
  // ヘッダー
  sideMenuHeader: {
    height: CONST_DIMENSIONS.headerHeight + 50, //内カメラなどの分下に下げる
    justifyContent: 'flex-end',
    paddingHorizontal: 20, //横方向余白
    paddingVertical: 10, //縦方向余白
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  headerText:{
    fontSize: CONST_SIZES.L
  },
  // メニューを閉じるボタンのスタイル
  closeButton: {
    padding: 10,
    backgroundColor: '#e74c3c',  // 赤い背景色
    borderRadius: 5,
    marginBottom: 20,  // 下にスペースを空ける
    alignItems: 'center'  // ボタンを中央に配置
  },
  // メニュー内のテキストスタイル
  menuText: {
    fontSize: 18
  }
})

export default SideMenuModal
