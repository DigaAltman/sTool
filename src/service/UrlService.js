export default {

  resolvedURL: function (url) {
    let link = document.createElement('a');
    link.href = url;

    let {protocol, host, hostname, port, pathname, search, hash} = link;

    return {
      protocol,
      host,
      hostname,
      port,
      pathname,
      search,
      hash
    };
  },

  getSearchParams: function (url) {
    let {search} = this.resolvedURL(url);
    if (search.startsWith("?")) {
      let res = {};
      search = search.substr(1);
      search.split("&").forEach(kv => {
        let [k,v] = kv.split("=");
        res[k] = v;
      });
      return res;
    }
    return {};
  }
}
