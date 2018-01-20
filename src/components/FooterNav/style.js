import { StyleSheet } from 'react-native'

const textColor = '#757575'
const activeColor = '#944a8e'

const style = StyleSheet.create({
	footer: {
		backgroundColor: '#fff'
	},
	buttonActive: {
		backgroundColor: '#fff'
	},
	icon: {
		color: textColor
	},
	iconActive: {
		color: activeColor		
	},
	iconText: {
		color: textColor,
		fontSize: 8
	},
	iconTextActive: {
		color: activeColor,
		fontSize: 8
	}

})

export default style