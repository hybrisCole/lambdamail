/* eslint-disable no-console */
const aws = require('aws-sdk');
aws.config.update({
  region          : 'us-east-1',
  accessKeyId     : 'AKIAJMGM4SRPFNPVYT4Q',
  secretAccessKey : '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',
});
const ses = new aws.SES({apiVersion : '2012-10-17'});

exports.handler = function handler (event, context) {
  ses.sendEmail({
    Source      : 'acpii2005@gmail.com',
    Destination : { ToAddresses : 'acpii2005@gmail.com' },
    Message     : {
      Subject : {
        Data : '4Tius App',
      },
      Body : {
        Html : {
          Data : `
            <p>
              HOLA
            </p>
          `,
        },
      },
    },
  }, (err, data) => {
    if (err) {
      context.succeed(err);
    }
    context.succeed(null, data);
  });
};
