/* eslint-disable no-console */
/* eslint-disable no-var */
var aws = require('aws-sdk');
var ses = new aws.SES({apiVersion : '2012-10-17'});
aws.config.update({
  region          : 'us-east-1',
  accessKeyId     : 'AKIAJMGM4SRPFNPVYT4Q',
  secretAccessKey : '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',
});

/*
const lambda = new aws.Lambda({apiVersion: '2015-03-31'});
const params = {
  FunctionName: 'sendMail',
};
console.log('inkoking lambda');
lambda.invoke(params, function(err, data) {
  if (err) console.log(err, err.stack);
  else     console.log(data);
});
*/

exports.handler = function handler (event, context) {
  ses.sendEmail({
    Source      : 'acpii2005@gmail.com',
    Destination : { ToAddresses : ['acpii2005@gmail.com', 'acole@18techs.com'] },
    Message     : {
      Subject : {
        Data : '4Tius App',
      },
      Body : {
        Html : {
          Data : '<p>HOLA</p>',
        },
      },
    },
  }, function resolve (err, data) {
    if (err) {
      context.succeed(err);
    }
    context.succeed(null, data);
  });
};
