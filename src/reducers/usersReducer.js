import _ from 'lodash';

import {GET_USERS, GET_USERS_LOADING} from '../actions/types';

const INITIAL_STATE = {
  users: [],
  loading: false,
  shouldLoadMore: true,
  refreshing: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS_LOADING:
      return {
        ...state,
        loading: action.payload?.loading,
        refreshing: action.payload?.refreshing,
      };

    case GET_USERS:
      const usersList = _.uniqBy([...state.users, ...action.payload], 'id');
      return {
        ...state,
        users: usersList,
        shouldLoadMore: action.payload?.length ? true : false,
      };

    default:
      return state;
  }
};
