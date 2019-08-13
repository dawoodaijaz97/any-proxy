const AnyProxy = require('anyproxy');
const options = {
    port: 8001,
    rule: require('./ruleModule'),
    webInterface: {
        enable: true,
        webPort: 8002
    },

    forceProxyHttps: true,
    wsIntercept: false,
    silent: false
};
const proxyServer = new AnyProxy.ProxyServer(options);
const exec = require('child_process').exec;

if (!AnyProxy.utils.certMgr.ifRootCAFileExists()) {
    console.log("Gooogleds ")
    AnyProxy.utils.certMgr.generateRootCA((error, keyPath) => {
        // let users to trust this CA before using proxy
        if (!error) {
            const certDir = require('path').dirname(keyPath);
            console.log('The cert is generated at', certDir);
            const isWin = /^win/.test(process.platform);
            if (isWin) {
                exec('start .', {
                    cwd: certDir
                });
                console.log("Is Win")
            } else {
                exec('open .', {
                    cwd: certDir
                });
                console.log("Is Not Win")
            }
        } else {
            console.error('error when generating rootCA', error);
        }
    });
}

proxyServer.on('ready', () => {
    console.log("proxy server ready")
});
proxyServer.on('error', (e) => {
    console.log("error occured:" + e)
});
proxyServer.start();