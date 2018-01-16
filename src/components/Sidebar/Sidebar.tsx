import * as React from 'react'
import { Component } from 'react'
import { Text } from 'react-native'
import { Content } from 'native-base'
import style from './style'

interface ISidebarProps {
	
}

export default class Sidebar extends Component<ISidebarProps> {
	render() {
		return (
			<Content style={style.sidebar}>
				<Text>Drawer</Text>
			</Content>
		);
	}
}