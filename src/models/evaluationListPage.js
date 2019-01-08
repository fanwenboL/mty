import { getEvaluationList } from '../services/evaluationList';

export default {
  namespace: 'evaluationListPage',

  state: {
    evaluationList: [],
  },

  effects: {
    // 获取评估列表数据
    *getEvaluationList(_, { call, put }) {
      const data = yield call(getEvaluationList);
      if (data && data.success === true) {
        yield put({
          type: 'save',
          payload: {
            evaluationList: data.items,
          },
        });
      }
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    clear() {
      return {
      };
    },
  },
};
