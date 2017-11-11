var serialize = function(obj) {
    var str = [];
    for(var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return '?'+str.join("&");
  }
  
exports.handler = (event, context, callback) => {
    
    var response = {
        statusCode: 302,
        headers: {
            Location: process.env.URI+event.pathParameters.proxy+serialize(event.queryStringParameters)
        }
    }
    callback(null, response);
};