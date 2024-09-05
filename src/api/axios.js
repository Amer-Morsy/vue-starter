import axios from "axios";
import { BASE_URL, API_DEFULT_TIMEOUT } from "../utils/constants";

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = API_DEFULT_TIMEOUT;
// --------------------------------------------------------



// import qs from 'qs';
// import { BASE_URL, STATUS, API_DEFULT_TIMEOUT } from '../utils/constants';
// import { checkOnlineStatus } from '../utils/functions';

// axios.defaults.baseURL = BASE_URL;
// axios.defaults.timeout = API_DEFULT_TIMEOUT;

// const METHOD = {
//   GET: 'get',
//   POST: 'post',
// };

// interface CustomHeaders {
//   [key: string]: string;
// }

// async function request(url: string, method: string, params: any, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
//   const headers: CustomHeaders = {
//     userAuthorizeToken: '123',
//     authorizeLanguage: 'ar',
//   };

//   if (!checkOnlineStatus()) {
//     const response: AxiosResponse<any> = {
//       data: {
//         status: STATUS.NO_INTERNET,
//         msg: 'internetConnectionFailed',
//       },
//       status: STATUS.NO_INTERNET,
//       statusText: 'No Internet',
//       headers: {},
//       config: {} as AxiosRequestConfig, // Provide a default empty object as config
//     };

//     return response;
//   } else {
//     try {
//       let response: AxiosResponse<any>;
//       switch (method) {
//         case METHOD.POST:
//           response = await axios.post(url, params, {
//             ...config,
//             headers: { ...config?.headers, ...headers },
//           });
//           break;
//         case METHOD.GET:
//         default:
//           response = await axios.get(url, {
//             params,
//             paramsSerializer: (params) => {
//               return qs.stringify(params, { arrayFormat: 'repeat' });
//             },
//             ...config,
//             headers: { ...config?.headers, ...headers },
//           });
//           break;
//       }

//       switch (response.data.status) {
//         case STATUS.INVALID_TOKEN:
//           // handle invalid token
//           break;
//         case STATUS.INVALID_LOGIN_CODE:
//           // handle invalid login code
//           break;
//       }

//       return response;
//     } catch (error) {
//       console.log(error);
//       console.log(axios.defaults.timeout);
//       const response: AxiosResponse<any> = {
//         data: {
//           status: STATUS.NO_RESPONSE,
//           msg: 'serverNoResponse',
//         },
//         status: STATUS.NO_RESPONSE,
//         statusText: 'No Response',
//         headers: {},
//         config: {} as AxiosRequestConfig, // Provide a default empty object as config
//       };
//       return response;
//     }
//   }
// }

// export { METHOD, request };