const AnyProxy = require('anyproxy');
const options = {
    port: 8001,
    rule: require('./ruleModule'),
    webInterface: {
        enable: true,
        webPort: 8002
    },
    throttle: 10000,
    forceProxyHttps: false,
    wsIntercept: false,
    silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);
AnyProxy.utils.systemProxyMgr.enableGlobalProxy('127.0.0.1', '8001');

proxyServer.on('ready', () => {
    console.log("proxy server ready")
});
proxyServer.on('error', (e) => {
    console.log("error occured:" + e)
});
proxyServer.start();