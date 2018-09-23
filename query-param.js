exports.handler = (event, context, callback) => {
    var name = event.queryStringParameters.name;
    callback(null, {
        statusCode: '200',
        body: 'Good Morning '  + name,
    });
};