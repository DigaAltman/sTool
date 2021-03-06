/**
 * global data => state
 *
 * 我们可以通过 this.$store.state.user 获取 state 中的 user 对象的数据信息
 *
 */
export default {
  // 当前登录用户
  user: null,

  // 加载动画, 默认不显示
  loadingStatus: false,

  // 全局宽度
  appWidth: document.body.clientWidth,

  // 全局高度
  appHeight: window.innerHeight,

  // dialog 对象
  dialog: {
    // Dialog 类型
    type: '',
    // Dialog 描述信息
    message: '',
    // 是否显示 dialog
    status: false,
    // 取消函数
    cancel: function() {},
    // 下一步函数
    continue: function() {}
  },

  // 当前用户的数据库组
  databaseGroupList: [],

  // 当前用户点击的数据库组, 默认是第一个
  currentDatabaseGroupIndex: 0,

  // 当前选择的数据库组对应的数据库信息
  databaseList: []

}


