// import { stringify } from 'qs';
import request from '../utils/request';
import { HOST } from '../utils/static';

export async function queryDepartmentList() {
  return request(`${HOST}/authority/queryDepartmentList.json`);
}
