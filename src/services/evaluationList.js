// import { stringify } from 'qs';
import request from '../utils/request';
import { HOST } from '../utils/static';

export async function getEvaluationList() {
  return request(`${HOST}/evaluation/queryEvaluationForPage.json`);
}
