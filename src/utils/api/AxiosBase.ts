import axios from 'axios'

class AxiosBase {
  private api_url: string

  constructor() {
    this.api_url = 'https://civitai.com/api/v1/models'
  }

  // make request based on the method and error handling
  async makeRequest(params: any) {
    try {
      let response = await axios.get(this.api_url, { params: params })
      console.log(response.data)
      return response.data
    } catch (err) {
      console.log('Something went wrong')
    }
  }
}

export default AxiosBase
