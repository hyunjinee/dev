const fs =require('fs')

var data = fs.readFile("app.txt", function(err,data) {
    if(err) {
        return
    }
    console.log(data)
})


var myCallback = function(err, data) {
    if (err) {
        throw err;

    }
    console.log(data)
}

var usingItNow =function (callback) {
    callback (new Error('error occured'))
}

usingItNow(myCallback)