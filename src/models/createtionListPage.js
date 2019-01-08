import { getCreatetionList } from '../services/createtionList';

export default {
  namespace: 'createtionListPage',

  state: {
    createtionList: [],
  },

  effects: {
    // 获取评估列表数据
    *getCreatetionList(_, { call, put }) {
      const data = yield call(getCreatetionList);
      if (data && data.success === true) {
        yield put({
          type: 'save',
          payload: {
            createtionList: data.itemsc,
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
