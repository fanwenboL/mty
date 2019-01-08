import fetch from 'dva/fetch';
import { notification } from 'antd';
import xFetch from './xFetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  notification.error({
    message: `请求错误 ${response.status}: ${response.url}`,
    description: response.statusText,
  });
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (newOptions.method === 'POST' || newOptions.method === 'PUT') {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  return fetch(url, newOptions)
    .then(checkStatus)
    .then(response => response.json())
    .catch((error) => {
      if (error.code) {
        notification.error({
          message: error.name,
          description: error.message,
        });
      }
      if ('stack' in error && 'message' in error) {
        notification.error({
          message: `请求错误: ${url}`,
          description: error.message,
        });
      }
      return error;
    });
}

export var interfaceUrl = {}
export async function getData(interfaceUrl, parameter = {}, method, errorCallback) {
  var type = typeof (parameter);
  var urlparams = "";
  if (type == "undefined") {
    paramenter = {}
  } else if (type == "object") {
    var params = "";
    for (var key in parameter) {
      params += "&" + key + "=" + encodeURIComponent(parameter[key])
    }
    urlparams = "&" + params.substr(1)
  } else {
    urlparams = "&" + parameter
  } if (!method) {
    method = "get"
  }
  var ajaxUrl = interfaceUrl;
  if (method.toLowerCase() == "post") {
    return xFetch(ajaxUrl, {
      method: method,
      body: JSON.stringify(parameter)
    }).catch(err => {
      if (errorCallback) {
        errorCallback()
      } else {
        console.warn(err)
      }
    })
  } else {
    ajaxUrl += urlparams;
    return xFetch(ajaxUrl, {
      method: method
    }).catch(err => {
      if (errorCallback) {
        errorCallback()
      } else {
        console.warn(err)
      }
    })
  }
}
export async function getFormData(interfaceUrl, parameter = {}, errorCallback) {
  var type = typeof (parameter);
  var urlparams = "";
  if (type == "object") {
    var params = "";
    for (var key in parameter) {
      params += "&" + key + "=" + encodeURIComponent(parameter[key])
    }
    urlparams = "&" + params.substr(1)
  }
  var ajaxUrl = interfaceUrl;
  return xFetch(ajaxUrl, {
    method: "post",
    body: urlparams,
    isForm: true
  }).catch(err => {
    if (errorCallback) {
      errorCallback()
    } else {
      console.warn(err)
    }
  })
}