/**
 * global mutations => state
 *
 * 我们可以通过 this.$store.mutations.setUser 设置 state 中的 user 对象的数据信息
 */
export default {

  /**
   * 设置当前用户信息
   *
   * @param state 共享数据
   * @param user  当前用户
   */
  setUser: function (state, user) {
    state.user = user;
  },

  /**
   * 显示加载动画
   * @param state
   */
  showLoading: function (state) {
    state.loadingStatus = true
  },

  /**
   * 隐藏加载动画
   * @param state
   */
  hideLoading: function (state) {
    state.loadingStatus = false
  },

  bodyWidthMutations(state, width) {
    state.appWidth = width;
  },

  bodyHeightMutations(state, height) {
    state.appHeight = height;
  },

  /**
   * 设置当前的 Dialog 对象
   */
  setDialog(state, dialog) {
    state.dialog = dialog;
  },

  /**
   * 设置当前用户对应的数据库组
   *
   * @param state
   * @param databaseGroupList
   */
  setDatabaseGroupList(state, databaseGroupList) {
    state.databaseGroupList = databaseGroupList;
  },

  /**
   * 设置当前选中的数据库组索引
   *
   * @param state
   * @param index
   */
  setCurrentDatabaseGroupIndex(state, index) {
    state.currentDatabaseGroupIndex = index;
  },

  /**
   * 设置当前数据库列表
   *
   * @param state
   * @param databaseList
   */
  setDatabaseList(state, databaseList) {
    state.databaseList = databaseList;
  }
}
