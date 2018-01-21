import { Trace, User } from '../../models/Models'
import { ImageURISource } from 'react-native'

interface BlogData {
	title: string,
	decription: string,
	coverImage: ImageURISource,
	user: User
}

export interface Blog {
	id: string,
	data: BlogData,
	trace: Trace
}

export interface IStreamState {
	blogs: Blog[],
	fetching: boolean,
	fetched: boolean,
	error: boolean
}