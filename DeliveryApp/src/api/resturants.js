import axios from 'axios'

export default {
    getResturants: () => {
        console.log('api called!')
        const url = `http://localhost:5000/express_backend`
        return axios({
            url: url,
            method: 'GET', 
        })
    }
}