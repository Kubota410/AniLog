import React, { useState, useEffect } from 'react'
import { Modal, View, Text, StyleSheet, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native'
import { CONST_DIMENSIONS, CONST_SIZES } from '../../constants/styleConstants'
import SideMenuButton from '../atoms/Button'
import { CONST_SLIDE_ANIMATION } from '../../constants/animationConstants'

const { width } = Dimensions.get('window')
const initialPosition = -width * 0.8

interface SideMenuModalProps {
  isVisible: boolean
  onClose: () => void
}

const SideMenuModal: React.FC<SideMenuModalProps> = ({ isVisible, onClose }) => {
  const [slideAnim] = useState(new Animated.Value(initialPosition))

  // モーダルを開く関数
  const openModal = () => {
    Animated.timing(slideAnim, {
      toValue: CONST_SLIDE_ANIMATION.toValueSlideIn, //スライドインアニメーション終了位置
      duration: CONST_SLIDE_ANIMATION.duration, //アニメーション時間
      useNativeDriver: true
    }).start()
  }

  // モーダルを閉じる関数
  const closeModal = () => {
    Animated.timing(slideAnim, {
      toValue: CONST_SLIDE_ANIMATION.toValueSlideOut, //スライドインアウトアニメーション終了位置
      duration: CONST_SLIDE_ANIMATION.duration, //アニメーション時間
      useNativeDriver: true
    }).start(() => {
      onClose()
    })
  }

  useEffect(() => {
    if (isVisible) {
      openModal()
    } else {
      closeModal()
    }
  }, [isVisible, slideAnim])


  return (
    <Modal
      transparent={true}
      animationType="none"
      visible={isVisible}
      onRequestClose={closeModal}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.modalBackground}>
          <TouchableWithoutFeedback>
            <Animated.View style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}>
              <View style={styles.sideMenuHeader}>
                <Text style={styles.headerText}>Anilog</Text>
              </View>
              {/* ボタンにhandleNavigationを割り当て */}
              <SideMenuButton title="ホーム" onPress={closeModal} destination="/" />
              <SideMenuButton title="ボタン設定" onPress={closeModal} destination="/screen/setting_Button_Screen" />
              <SideMenuButton title="ホーム" onPress={closeModal} destination="/" />
              <SideMenuButton title="ホーム" onPress={closeModal} destination="/" />
              <SideMenuButton title="ホーム" onPress={closeModal} destination="/" />
              <SideMenuButton title="ホーム" onPress={closeModal} destination="/" />
              <SideMenuButton title="ホーム" onPress={closeModal} destination="/" />
{/* 
              <SideMenuButton title="" onPress={() => handleNavigation('/screen/setting_Button_Screen')} />
              <SideMenuButton title="通知設定" onPress={() => handleNavigation('/screen/setting_Notify_Screen')} />
              <SideMenuButton title="アプリを紹介する（感謝）" onPress={() => handleNavigation('/')} />
              <SideMenuButton title="アプリをレビューする（感謝）" onPress={() => handleNavigation('/')} />
              <SideMenuButton title="アカウント（annict）" onPress={() => handleNavigation('/')} />
              <SideMenuButton title="アプデ日記" onPress={() => handleNavigation('/screen/releaseNotes_Screen')} /> */}
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  sideMenuItem: {
    height: 56,
    width: '100%',
    paddingVertical: 17,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    justifyContent: 'center'
  },
  sideMenuItemText: {
    fontSize: CONST_SIZES.M
  },
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  menu: {
    width: width * 0.8,
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: 0
  },
  sideMenuHeader: {
    height: CONST_DIMENSIONS.headerHeight + 50,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray'
  },
  headerText: {
    fontSize: CONST_SIZES.L
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center'
  },
  menuText: {
    fontSize: 18
  }
})

export default SideMenuModal
