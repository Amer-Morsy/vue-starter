import axios from 'axios';
import { BASE_URL, API_DEFULT_TIMEOUT, STATUS } from "../utils/constants";

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = API_DEFULT_TIMEOUT;

interface response {
  status: number | undefined,
  msg: string | undefined,
  data: any | undefined,
}

export const METHOD = {
  GET: 'get',
  POST: 'post',
};

export async function request(url: string, method: string, params: any): Promise<any> {
  let response: response;
  let apiResponse;
  try {
    if (method === METHOD.GET) {
      apiResponse = await axios.get(url, { params });
    } else if (method === METHOD.POST) {
      apiResponse = await axios.post(url, params);
    }
    response = {
      status: STATUS.SUCCESS,
      msg: apiResponse?.statusText,
      data: apiResponse?.data,
    }
    return response;
  } catch (error) {
    // Handle any errors that occurred during the API call
    console.error('API call error:', error);
    response = {
      status: STATUS.NO_RESPONSE,
      msg: 'No Response',
      data: null,
    }
    return response;
    // throw error; // Optionally, you can re-throw the error to handle it higher up the call stack
  }
}