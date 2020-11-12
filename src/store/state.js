/**
 * global data => state
 *
 * 我们可以通过 this.$store.state.user 获取 state 中的 user 对象的数据信息
 *
 */
export default {
  // 当前登录用户
  user: {

  },

  // 加载动画, 默认不显示
  loadingStatus: false,

  // 全局宽度
  appWidth: document.body.clientWidth,

  // 全局高度
  appHeight: document.body.clientHeight === 0 ? 700 : document.body.clientHeight

}
