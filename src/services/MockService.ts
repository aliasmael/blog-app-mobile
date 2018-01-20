import blogs from './fixtures/blogs'

class MockService {

  fetchBlogs() {
    return JSON.parse(JSON.stringify(blogs))
  }

}

export const service = new MockService 