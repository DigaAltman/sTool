export default {
  changeLoading : function(load) {
    load.success = load.error = load.server = false;
    load.loading = true;
  },

  changeFinal   : function(load) {
    load.loading = load.success = load.error = load.server = false;
  },

  changeError   : function(load) {
    load.loading = load.success = load.server = false;
    load.error = true;
  },

  changeServer  : function(load) {
    load.loading = load.success = load.error = false;
    load.server = true;
  },

  changeSuccess : function(load) {
    load.loading = load.error = load.server = false;
    load.success = true;
  }
};
