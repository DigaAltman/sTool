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
  }
}
