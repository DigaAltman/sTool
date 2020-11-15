export default {
  async setUser(context, user) {
    context.commit('setUser', user);
  },

  /**
   * 显示加载动画
   * @param context
   */
  showLoading(context) {
    context.commit('showLoading');
  },

  /**
   * 隐藏加载动画
   */
  hideLoading(context) {
    context.commit('hideLoading');
  },

  /**
   * 显示 Dialog
   */
  showDialog({commit}, dialog) {
    dialog.status = true;
    commit('setDialog', dialog);
  },

  /**
   * 隐藏 Dialog
   */
  hideDialog({commit}) {
    commit('setDialog', {
      type: null,
      status: false,
      message: null,
      cancel: null,
      continue: null
    });
  },

  /**
   * 设置当前用户的数据库组信息
   */
  setDatabaseGroupList({commit}, databaseGroupList) {
    commit('setDatabaseGroupList', databaseGroupList);
  },

  /**
   *设置当前选中的数据库组索引
   *
   * @param commit
   * @param index
   */
  setCurrentDatabaseGroupIndex({commit}, index) {
    commit('setCurrentDatabaseGroupIndex', index);
  },

  /**
   * 设置当前的数据库列表
   *
   * @param commit
   * @param databaseList
   */
  setDatabaseList({commit}, databaseList) {
    commit('setDatabaseList', databaseList);
  },


}
