import axios from "axios"


class Service {
  private host = 'localhost:8080'
  private apiPrefix = 'api'
  private apiVersion = '1.0'
  private baseUrl = this.host + '/' + this.apiPrefix + '/' + this.apiVersion

  fetchBlogs() {
    return axios.get(this.baseUrl + '/blog')
  }

}

export const service = new Service 