import {GET_USERS, GET_USERS_LOADING} from './types';
import {makeAPIRequest} from '../helper/global';
import {api, GET} from '../helper/apiConstants';

export const getUsers =
  ({since, refreshing}) =>
  async dispatch => {
    dispatch({
      type: GET_USERS_LOADING,
      payload: {loading: true, refreshing: !!refreshing},
    });

    const params = {since};
    makeAPIRequest({
      method: GET,
      url: api.users,
      params,
    })
      .then(response => {
        dispatch({type: GET_USERS, payload: response?.data || []});
        dispatch({
          type: GET_USERS_LOADING,
          payload: {loading: false, refreshing: false},
        });
      })
      .catch(() => {
        dispatch({
          type: GET_USERS_LOADING,
          payload: {loading: false, refreshing: false},
        });
      });
  };
