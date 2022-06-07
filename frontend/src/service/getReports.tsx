import {reportBaseURL} from '.';

const getReportsService = async () => {
    const response = await reportBaseURL.get('/reports')
    
    return response.data;
}

export default getReportsService