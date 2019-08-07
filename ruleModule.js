module.exports = {


    // intercept before send request to server
    * beforeSendRequest(requestDetail) {
        console.log(requestDetail)
    },

    // deal response before send to client
    * beforeSendResponse(requestDetail, responseDetail) {
        console.log(requestDetail)
    },
    // if deal https request
    * beforeDealHttpsRequest(requestDetail) {
        console.log(requestDetail)
    },


    // error happened when dealing requests
    * onError(requestDetail, error) {
        console.log(requestDetail)
    },

    // error happened when connect to https server
    * onConnectError(requestDetail, error) {
        console.log(requestDetail)
    }
};