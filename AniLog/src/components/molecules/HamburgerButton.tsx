import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { HamburgerMenuIcon } from '../atoms/Icons'
import SideMenuModal from '../molecules/SideMenu'

// ハンバーガーボタン 押下時に色を半透明にする
const HamburgerButton = () => {
	// ボタンのオンオフを追跡する
	const [isActive, setIsActive] = useState(false)

	// ボタン押下時の処理
	const handlePress = () => {
		setIsActive(!isActive)
	}

	return (
		<>
			{/* // ボタンがアクティブの時、透明度をつける */}
			<TouchableOpacity onPress={handlePress} style={{ opacity: isActive ? 0.6 : 1 }}>
				<HamburgerMenuIcon />
			</TouchableOpacity>

			{/* サイドメニューがオープンしているときだけ表示 */}
			{isActive && <SideMenuModal isVisible={isActive} onClose={() => setIsActive(false)} />}
		</>    
	)
}

export default HamburgerButton
