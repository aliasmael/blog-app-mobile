import { StyleSheet } from 'react-native'

const backgroundColor = '#ffffff'
const textColor = '#0e0a1a'
const activeColor = '#944a8e'

const style = StyleSheet.create({
	sidebar: {
		backgroundColor: backgroundColor
	},
	sidebarHeader: {
		backgroundColor: backgroundColor,
		height: 130,
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		borderBottomColor: activeColor		
	},
	sidebarBody: {
		flex: 1, 
		justifyContent: 'center', 
		alignItems: 'center',
		marginTop: 15
	},
	profileImage: {
		width: 40,
		height: 40,
		marginRight: 10
	},
	userInfo: {
		color: textColor,
		textAlign: 'center'
	},
	username: {
		color: activeColor,
		textAlign: 'center'
	},
	menuItem: {
		backgroundColor: backgroundColor,
		borderBottomColor: activeColor
	},
	menuItemText: {
		color: textColor
	},
	menuItemIcon: {
		color: textColor,
		marginRight: 10,
		fontSize: 15		
	},
	subItem: {
		backgroundColor: '#333a49'
	},
})

export default style