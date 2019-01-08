import fetch from 'isomorphic-fetch';
import { browserHistory } from 'react-router';
// import cookie from 'js-cookie';

// conse errorMessages = (res) => { `${res.status} ${res.statusText}` };

function check401(res) {
    if (res.status === 401) {
        location.href = '/401';
    }
    return res;
}
function check404(res) {
    if (res.status === 404) {
        return message(`${res.status} ${res.statusText}`)
    }
    return res;
}
function jsonParse(res) {
    return res.json().then(jsonResult => ({ ...res, jsonResult }));
}
function errorMessageParse(res) {
    const { success, message } = res.jsonResult;
    if (res.jsonResult.errCode === '' || res.jsonResult.errCode) {
        //跳转到首页
    }
    return res;
}
function xFetch(url, options) {
    const opts = { ...options };
    opts.credentials = 'include';
    opts.headers = {
        ...opts.headers,
        // authorization: cookie.get('authorization') || '',
    };
    opts.headers["Content-Type"] = "application/json;charset=UTF-8";
    if (opts.isForm) {
        opts.headers["Content-Type"] = "application/x-www-form-urlencoded;charset=UTF-8";
    }
    // opts.body='{user}'
    return fetch(url, opts)
        .then(check401)
        .then(check404)
        .then(jsonParse)
        .then(errorMessageParse);
}
export default xFetch;