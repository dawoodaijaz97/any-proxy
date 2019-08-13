module.exports = {


    // intercept before send request to server
    * beforeSendRequest(requestDetail) {
        console.error("--------------------------")
        console.log(requestDetail.hostname)
        console.log(requestDetail.protocol)
        console.log(requestDetail.port)
        console.log(requestDetail.method)
        return null
    },

    // deal response before send to client
    * beforeSendResponse(requestDetail, responseDetail) {
        return null;
    },
    // if deal https request
    * beforeDealHttpsRequest(requestDetail) {
        console.error("--------------------------")
        console.log(requestDetail.hostname)
        console.log(requestDetail.protocol)
        console.log(requestDetail.port)
        console.log(requestDetail.method)
        return true
    },

    // error happened when dealing requests
    * onError(requestDetail, error) {
        console.log(requestDetail)
        return null;
    },

    // error happened when connect to https server
    * onConnectError(requestDetail, error) {
        console.log(requestDetail)
        return null;
    }
}