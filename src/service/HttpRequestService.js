import axios from 'axios';

/**
 * 处于底层的通用请求方法类型.
 *
 * @param type    请求类型
 * @param header  请求头信息
 * @param url     请求的服务器路径
 * @param params  请求携带的参数
 * @param loading 请求时触发的回调函数
 * @param success 请求成功并且响应成功时的回调函数
 * @param error   请求失败触发的回调函数
 * @param server  请求成功但是响应失败触发的回调函数
 * @param final   请求结束时执行的回调函数
 */
function request({type = 'GET', header = {'Content-Type': 'application/json'}, url, params = {}, loading, success, error, server, final}) {

  return new Promise(function (resolve, reject) {
    let promise;

    //  触发 loading 函数
    loading instanceof Function && loading();

    // 根据请求类型进行不同的业务处理
    switch (type) {
      case GET:
        promise = axios.get(url, {
          params: params,
          headers: header
        });

        break;

      case POST:
        promise = axios.post(url, {
          params: params,
          headers: header
        });

        break;

      default:
        console.error('不支持的请求类型');
        return;
    }

    // 请求成功
    promise.then(function (response) {
      resolve(response.data);

      // 响应成功
      if (response.data.status === 200) {
        success instanceof Function && success(response.data);
        final instanceof Function && final();
        return;
      }

      // 响应失败
      server instanceof Function && server(response.data);
      final instanceof Function && final();
    });

    // 请求失败
    promise.catch(function (e) {
      //  触发 error 函数
      error instanceof Function && error(e);
      reject('404 ERROR');
      final instanceof Function && final();
    });


  });
}

// HTTP 请求类型
const GET = 'GET', POST = 'POST';


export default {

  /**
   * GET 请求
   *
   * @param url     请求路径
   * @param params  请求携带参数
   * @param loading 请求时触发的回调函数
   * @param success 请求成功并且响应成功时的回调函数
   * @param error   请求失败触发的回调函数
   * @param server  请求成功但是响应失败触发的回调函数
   * @param final   请求结束时执行的回调函数
   */
  get: function (
    {
        url,
        params  = {},
        loading = function() {},
        success = function() {},
        error   = function() {},
        server  = function() {},
        final   = function() {}
    }) {
    return request({url, params, loading, success, error, server, final});
  },

  /**
   * POST 请求, 请求头为 application/json
   *
   * @param url     请求路径
   * @param params  请求携带参数
   * @param loading 请求时触发的回调函数
   * @param success 请求成功并且响应成功时的回调函数
   * @param error   请求失败触发的回调函数
   * @param server  请求成功但是响应失败触发的回调函数
   * @param final   请求结束时执行的回调函数
   */
  post: function (
    {
      url,
      params = {},
      loading = function() {},
      success = function() {},
      error   = function() {},
      server  = function() {},
      final   = function() {}
    }) {
    return request({type: POST, url, params, loading, success, error, server, final});
  },

  /**
   * POST 请求, 请求头为 multipart/form-data . 适用于表单提交
   *
   * @param url     请求路径
   * @param params  请求携带参数
   * @param loading 请求时触发的回调函数
   * @param success 请求成功并且响应成功时的回调函数
   * @param error   请求失败触发的回调函数
   * @param server  请求成功但是响应失败触发的回调函数
   * @param final   请求结束时执行的回调函数
   */
  form: function (
    {
                    url,
                    params  = {},
                    loading = function() {},
                    success = function() {},
                    error   = function() {},
                    server  = function() {},
                    final   = function() {}
    }) {
    return request({type: POST, header: {'Content-Type': 'multipart/form-data'}, url, params, loading, success, error, server, final});
  }

}
