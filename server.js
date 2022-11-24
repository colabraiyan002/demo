const request = require('request')

;(async() => {

    request({
        url: 'https://ifconfig.me/ip',
        method: 'GET',
        followRedirect: false
    }, function(error, response, body) {
        if(error) {
            console.log('Error')
        } else {
            console.log(body)
        }
    })

})()
