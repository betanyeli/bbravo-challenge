import axios from 'axios';

const apiEndpoint = 'https://randomuser.me/api/?results=20';

export const getData = async () => {
    try {
        const result = await axios.get(apiEndpoint)
        console.log("result", result.data.results)
        return result.data.results
    } catch (error) {
        console.log("data error", error)
        return ["Data not found"]
    }
}
