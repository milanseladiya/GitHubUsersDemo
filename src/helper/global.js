import axios from 'axios';
import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';

import {baseURL} from './apiConstants';
import {isIos} from './constants';

export const makeAPIRequest = ({method, url, data, headers, params}) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method: method,
      baseURL: baseURL,
      url: url,
      data: data,
      headers: headers,
      params: params,
    };
    await axios(options)
      .then(response => {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(async error => {
        reject(error);
      });
  });

export const getHitSlop = (val = 10) => ({
  top: val,
  left: val,
  bottom: val,
  right: val,
});

export const requestLocationPermission = async () => {
  const PERMISSION_NAME = isIos
    ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
    : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

  return check(PERMISSION_NAME)
    .then(checkResult => {
      if (checkResult === RESULTS.DENIED) {
        return request(PERMISSION_NAME).then(reqResult => {
          return reqResult === RESULTS.GRANTED;
        });
      } else if (checkResult === RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    })
    .catch(() => false);
};
