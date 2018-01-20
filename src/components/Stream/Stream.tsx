import * as React from 'react'
import { Component } from 'react'
import { Image } from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'
import * as moment from 'moment'
import { Blog } from './Models'
import style from './style'
import { service } from '../../services/MockService'

interface IStreamProps {

}

interface IStreamState {
	blogs: Blog[]
}

let initialState: IStreamState = {
	blogs: []
}

export default class Stream extends Component<IStreamProps, IStreamState> {
	componentWillMount() {
		this.setState(initialState)
		let response: Blog[] = service.fetchBlogs()
		this.setState({ blogs: response })
	}

	render() {
		return (
			this.state.blogs.map(blog => (
				<Container key={blog.id} style={style.container}>
					<Content style={{padding: 0}}>
						<Card style={{ flex: 0, padding: 0 }}>
							<CardItem>
								<Left>
									<Thumbnail source={require('../../../assets/images/user_default.png')} />
									<Body>
										<Text>{blog.data.user.firstname + ' ' + blog.data.user.lastname}</Text>
										<Text note>{moment(blog.trace.created.at).format('MMM D')}</Text>
									</Body>
								</Left>
							</CardItem>
							<CardItem>
								<Body>
									<Image source={blog.data.coverImage} style={style.coverImage} />
									<Text style={style.title}>
										{blog.data.title}
									</Text>
									<Text style={style.description} note>
										{blog.data.decription}
									</Text>
								</Body>
							</CardItem>
							<CardItem>
								<Left>
									<Button transparent>
										<Icon active name="thumbs-up" />
										<Text>12 Likes</Text>
									</Button>
								</Left>
								<Body>
									<Button transparent>
										<Icon active name="chatbubbles" />
										<Text>4 Comments</Text>
									</Button>
								</Body>
								<Right>
									<Text>4 min read</Text>
								</Right>
							</CardItem>
						</Card>
					</Content>
				</Container>
			))
		)
	}
}