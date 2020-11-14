function build(type, message, status = true, cancel = function() {}, next = function() {}) {
  return {
    type,
    message,
    status,
    cancel,
    continue: next
  }
}


export const SUCCESS = build('SUCCESS', '请求成功', true, null, null);
export const ERROR = build('ERROR', '请求失败', false, null, null);
export const WARN = build('WARN', '警告, 下面操作十分危险', false, null, null);


