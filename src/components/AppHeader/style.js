import { StyleSheet } from 'react-native'

const textColor = '#0e0a1a'
const activeColor = '#944a8e'

const style = StyleSheet.create({
	header: {
		backgroundColor: '#fff'
	},
	left: {
		flex: 1
	},
	right: {
		flex: 1
	},
	body: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: activeColor
	},
	icon: {
		color: textColor
	}
})

export default style