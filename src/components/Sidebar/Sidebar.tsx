import * as React from 'react'
import { Component } from 'react'
import { Container, Content, Text, List, ListItem, Header, Body, View } from 'native-base'
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
	},
	{
		title: 'Help Center',
		icon: 'question-circle',
		navigation: 'Help'
	},
	{
		title: 'Logout',
		icon: 'sign-out',
		navigation: 'Logout'
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
						<Body style={{ flexDirection:'row', marginTop: 15 }}>
							<View style={{ marginRight: 15 }}>
								<Text>
									<Text style={{ fontWeight: 'bold' }}>10</Text>
									<Text> Following</Text>
								</Text>
							</View>
							<View>
								<Text>
									<Text style={{ fontWeight: 'bold' }}>15</Text>
									<Text> Follower</Text>
								</Text>
							</View>
						</Body>
					</Header>
					<List
						dataArray={menuItems}
						renderRow={(item: MenuItem) => {
							return (
								<ListItem
									button
									noBorder
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