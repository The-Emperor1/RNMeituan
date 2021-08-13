import axios from 'react-native-axios';
// import JSONbig from 'json-bigint';

// axios配置
const instance = axios.create({
  timeout: 1000 * 12,
  withCredentials: true, // true: 允许携带cookie; false 禁止携带cookie
});

// 将BigInt转为String
// instance.defaults.transformResponse = [(data) => JSONbig({ storeAsString: true }).parse(data)];

// 请求拦截
instance.interceptors.request.use(
  (config) => config,
  (err) => Promise.reject(err),
);

// 响应拦截
instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      // 接口返回session.timeout时认为登录状态过期，跳转至登录页
      if (response.data.code === 'session.timeout') {
        window.location.replace(`${basePath}login.html`);
      }
      return Promise.resolve(response.data);
    }
    return Promise.reject(response.data);
  },
  (error) => {
    if (error.response && error.response.status) {
      // do something when response failed
    }
    return Promise.reject(error.response);
  },
);

// 解析参数
const formatParams = (execObj) => {
  const contentType = execObj.contentType ? execObj.contentType : 'json';
  const method = execObj.method ? execObj.method.toUpperCase() : 'GET';
  const {
    data, 
    onUploadProgress, 
    requestCanceler,
  } = execObj;

  // headers配置
  const headers = {
    'Content-Type': `${contentType === 'json' ? 'application/json' : 'multipart/form-data'}; charset=UTF-8`,
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    'Access-Control-Allow-Credentials': 'true',
  };

  let mainparams;
  const params = data || {};

  switch (method) {
    case 'POST':
      mainparams = {
        headers,
        method,
        data: params,
      };
      break;
    case 'PUT':
      mainparams = {
        headers,
        method,
        data: params,
      };
      break;
    case 'PATCH':
      mainparams = {
        headers,
        method,
        data: params,
      };
      break;
    case 'DELETE':
      mainparams = {
        headers,
        method,
        data: params,
      };
      break;
    case 'GET':
      mainparams = {
        headers,
        method,
        params,
      };
      break;
    default:
      mainparams = {
        headers,
        method: 'GET',
        params,
      };
      break;
  }

  onUploadProgress && (mainparams.onUploadProgress = onUploadProgress);

  if (requestCanceler?.enable) {
    mainparams.cancelToken = new axios.CancelToken((c) => {
      requestCanceler.cancel = c;
    });
  }

  return mainparams;
};

const Request = (requestData) => {
    const params = formatParams(requestData);
    params.url = requestData.url;
    const promise = instance(params);

    return promise;
};

export { instance, Request };
