console.log('loading function')
exports.handler = function(event, context) {
    console.log('hello from semaphore');
    console.log(event.key1);
    console.log(event.key2);
    console.log(event.key3);
    context.succeed(event.key1);
};
