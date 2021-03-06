import { StyleSheet } from 'react-native'

const textColor = '#0e0a1a'
const activeColor = '#944a8e'

const style = StyleSheet.create({
	container: {
		height: 'auto',
		padding: 0
	},
	cardContent: {
		paddingTop: 0,
		paddingLeft: 0,
		paddingRight: 0
	},
	cardDetails: {
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20
	},
	coverImage: {
		height: 200,
		width: '100%',
		flex: 1
	},
	title: {
		fontSize: 22,
		fontWeight: "800"
	},
	description: {
		fontSize: 15,
		paddingTop: 10
	}
})

export default style