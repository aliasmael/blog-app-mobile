import * as React from 'react'
import { Component } from 'react'
import { Container, Content, Text, List, ListItem, Header, Body } from 'native-base'
import style from './style'
import { User } from '../../models/Models'
import { MenuItem } from './Models'
import { Image } from 'react-native'
import CustomIcon from '../CustomIcon'

interface ISidebarProps {
	navigation: any
}

const menuItems: MenuItem[] = [
	{
		title: 'Profile',
		icon: 'user',
		navigation: 'Profile'
	},
	{
		title: 'Dashboard',
		icon: 'home',
		navigation: 'Home'
	},
	{
		title: 'Explore',
		icon: 'search',
		navigation: 'Explore'
	},
	{
		title: 'Settings',
		icon: 'wrench',
		navigation: 'Settings'
	}
]

const user: User = {
	id: 'user-id',
	username: 'aliismael',
	firstname: 'Ali',
	lastname: 'Ismael',
	title: 'Software Developer',
	company: '',
	profileimage: require('../../../assets/images/user_default.png'),
}

export default class Sidebar extends Component<ISidebarProps> {
	render() {
		return (
			<Container style={style.sidebar}>
				<Content>
					<Header style={style.sidebarHeader}>
						<Image 
							source={require('../../../assets/images/user_default.png')} 
							style={style.profileImage}
							/>
						<Body style={style.sidebarBody}>
							<Text style={style.userInfo}>{user.firstname + ' ' + user.lastname}</Text>
							<Text style={style.userInfo} note>{user.title}</Text>
							<Text style={style.username} note>@{user.username}</Text>
						</Body>
					</Header>
					<List
						dataArray={menuItems}
						renderRow={(item: MenuItem) => {
							return (
								<ListItem
									button
									style={style.menuItem}
									onPress={() => this.props.navigation.navigate(item.navigation)}>
									<CustomIcon name={item.icon} family='FontAwesome' style={style.menuItemIcon} />
									<Text style={style.menuItemText}>{item.title}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}