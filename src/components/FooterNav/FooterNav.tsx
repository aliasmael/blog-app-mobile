import * as React from 'react'
import { Component } from 'react'
import { Footer, FooterTab, Button, Icon, Text } from 'native-base'
import style from './style'
import { FooterItem } from './Models'

interface IFooterNavProps {
	navigation: any,
	screen:
	'Home'
	| 'Explore'
	| 'Notifications'
	| 'Settings'
}

const footerItems: FooterItem[] = [
	{
		title: 'Home',
		icon: 'home',
		screen: 'Home'
	},
	{
		title: 'Explore',
		icon: 'search',
		screen: 'Explore'
	},
	{
		title: 'Notifications',
		icon: 'notifications',
		screen: 'Notifications'
	},
	{
		title: 'Settings',
		icon: 'ios-settings',
		screen: 'Settings'
	},
]

export default class FooterNav extends Component<IFooterNavProps>  {
	render() {
		return (
			<Footer style={style.footer}>
				<FooterTab style={style.footer}>
					{
						footerItems.map((item: FooterItem) => {
							return (
								<Button
									key={item.screen}
									onPress={() => this.props.navigation.navigate(item.screen)}
									style={this.props.screen == item.screen ? style.buttonActive : {}}
									active={this.props.screen == item.screen ? true : false}
								>
									<Icon
										style={this.props.screen == item.screen ? style.iconActive : style.icon}
										name={item.icon}
									/>
									<Text
										style={this.props.screen == item.screen ? style.iconTextActive : style.iconText}
									>
										{item.title}
									</Text>
								</Button>
							)
						}, footerItems)
					}
				</FooterTab>
			</Footer>
		);
	}
}