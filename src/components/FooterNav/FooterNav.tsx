import * as React from 'react'
import { Component } from 'react'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import style from './style'

interface IFooterNavProps {
	openHome: () => void,
	openExplore: () => void,
	openNotifications: () => void,
	openSetting: () => void,
	selectedTab:
	'Home'
	| 'Explore'
	| 'Notifications'
	| 'Setting'
}

export default class FooterNav extends Component<IFooterNavProps>  {
	render() {
		return (
			<Footer style={style.footer}>
				<FooterTab style={style.footer}>
					<Button
						onPress={() => this.props.openHome()}
						style={this.props.selectedTab == "Home" ? style.buttonActive : {}}
						active={this.props.selectedTab == "Home" ? true : false}
					>
						<Icon name="home" />
					</Button>
					<Button
						onPress={() => this.props.openExplore()}
						style={this.props.selectedTab == "Explore" ? style.buttonActive : {}}
						active={this.props.selectedTab == "Explore" ? true : false}
					>
						<Icon name="search" />
					</Button>
					<Button
						onPress={() => this.props.openNotifications()}
						style={this.props.selectedTab == "Notifications" ? style.buttonActive : {}}
						active={this.props.selectedTab == "Notifications" ? true : false}
					>
						<Icon name="notifications" />
					</Button>
					<Button
						onPress={() => this.props.openSetting()}
						style={this.props.selectedTab == "Setting" ? style.buttonActive : {}}
						active={this.props.selectedTab == "Setting" ? true : false}
					>
						<Icon name="ios-settings" />
					</Button>
				</FooterTab>
			</Footer>
		);
	}
}