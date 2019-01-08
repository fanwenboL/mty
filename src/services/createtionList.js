// import { stringify } from 'qs';
import request from '../utils/request';
import { HOST } from '../utils/static';

export function getCreatetionList() {
  return request(`${HOST}/evaluation/getInnerEvaluationSelectorsInfo.json`);
}
