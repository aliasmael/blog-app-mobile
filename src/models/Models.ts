import { IStreamState } from '../components/Stream/Models'

export interface Signature {
	at: string,
	by: string
}

export interface Trace {
	created: Signature,
	updated: Signature
}

export interface User {
	id: string,
	username: string,
	firstname: string,
	lastname: string,
	title: string,
	profileimage: string,
	company?: string
}

export interface AppStore {
	stream: IStreamState
}