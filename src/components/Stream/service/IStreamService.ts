import { Blog } from '../Models'

export interface IStreamService {
  getStream(): Promise<Blog[]>
}