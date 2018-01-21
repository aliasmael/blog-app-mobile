import { Blog } from '../Models'
import { IStreamService } from './IStreamService'
import blogs from '../fixtures/blogs'

export class MockService implements IStreamService {
  getStream(): Promise<Blog[]> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        let response: Blog[] = JSON.parse(JSON.stringify(blogs))
        return resolve(response)
      }, 3000)
    })
  }

}