const urlMetadata = require('url-metadata')

export default (url = '') =>
    urlMetadata(url).then(
        function (metadata) { // success handler
            console.log(metadata)
        },
        function (error) { // failure handler
            console.log(error)
        })


