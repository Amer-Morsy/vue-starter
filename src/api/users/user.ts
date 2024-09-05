import { METHOD, request } from '../request';
import { Users } from '../links';

// async function login(data) {
//   return request(Users.login, METHOD.POST, data);
// }

export async function getDetails(params: any): Promise<any> {
  return request(Users.getDetails, METHOD.GET, params);
}


