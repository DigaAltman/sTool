/**
 * global getter => state
 *
 * 我们可以通过 this.$store.getters.getUser 获取 state 中的 user 对象的数据信息
 */
export default {
  getUser(state) {
    return state.user;
  }
}
