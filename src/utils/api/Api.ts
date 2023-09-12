// import axios from 'axios'

// let api_url = 'https://civitai.com/api/v1/models'

// let params = {
//   username: 'Jelosus1',
//   period: 'Day'
// }

// try {
//   axios
//     .get(api_url, { params: params })
//     .then((res) => {
//       let data = res.data

//       for (let model of data.items) {
//         console.log(`${model.name}: ${model.stats.downloadCount} downloads`)
//       }
//     })
//     .catch((err) => {
//       console.log('Something went wrong')
//     })
// } catch (err) {
//   console.log('Something went wrong')
// }

import AxiosBase from './AxiosBase'

let axiosBase = new AxiosBase()

export default class Api {
  async getModelStats(params: { username: string; period: string; limit?: number }) {
    params.limit = params.limit || 100
    const response = await axiosBase.makeRequest(params)
    return response
  }
}
