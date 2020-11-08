export default {
  async setUser(context, user) {
    context.commit('setUser', user);
  }
}
