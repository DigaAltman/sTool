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
  }
}
