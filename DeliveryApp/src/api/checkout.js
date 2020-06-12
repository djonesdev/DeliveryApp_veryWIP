import axios from 'axios'
import config from '../../config'

export default {
    postOrder: (payload) => {
        const url = `${config.baseURL}/express_backend`
        return axios({
            url: url,
            method: 'POST', 
            data: payload
        })
    }
}