exports.handler = (event, context, callback) => {
    var name = event.pathParameters.productname;
    callback(null, {
        statusCode: '200',
        body: 'Your Product name is '  + name,
    });
};