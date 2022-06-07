import {orderBaseURL} from './index';

const getPatientsService = async (url: string) => {
    const response = await orderBaseURL.get(url)
    return response.data
}

export default getPatientsService