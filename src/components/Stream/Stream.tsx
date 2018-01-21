import * as React from 'react'
import { Component } from 'react'
import { Image, View } from 'react-native'
import { Container, Content, Card, CardItem, Thumbnail, Text, Left, Body, Right } from 'native-base'
import * as moment from 'moment'
import { Blog } from './Models'
import { Loader } from '../Loader/Loader'
import style from './style'

import { connect } from 'react-redux'
import { fetchStream } from './redux/actions'
import { AppStore } from '../../models/Models'
import store from '../../redux/store'

interface IStreamProps {
	blogs: Blog[],
	fetching: boolean,
	fetched: boolean,
	error: boolean
}

class Stream extends Component<IStreamProps> {
	componentWillMount() {
		store.dispatch(fetchStream())
	}

	render() {
		const { blogs, fetching } = this.props

		if(fetching) {
			return (
				<Loader />
			)
		}

		return (
			blogs.map(blog => (
				<Container key={blog.id} style={style.container}>
					<Content>
						<Card>
							<CardItem style={style.cardContent}>
								<Body>
									<Image source={blog.data.coverImage} style={style.coverImage} />
									<View style={style.cardDetails}>
										<Text style={style.title}>
											{blog.data.title}
										</Text>
										<Text style={style.description} note>
											{blog.data.decription}
										</Text>
									</View>
								</Body>
							</CardItem>
							<CardItem>
								<Left>
									<Thumbnail source={require('../../../assets/images/user_default.png')} />
									<Body>
										<Text>{blog.data.user.firstname + ' ' + blog.data.user.lastname}</Text>
										<Text note>{moment(blog.trace.created.at).format('MMM D')}</Text>
									</Body>
								</Left>
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

function select(state: AppStore): IStreamProps {
	return {
		blogs: state.stream.blogs,
		fetching: state.stream.fetching,
		fetched: state.stream.fetched,
		error: state.stream.error
	};
}

export default connect(
	select
)(Stream)