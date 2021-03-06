import axios from 'axios'
import config from '../../config'

export default {
    getResturants: () => {
        const url = `${config.baseURL}/express_backend`
        return axios({
            url: url,
            method: 'GET', 
        })
    }
}