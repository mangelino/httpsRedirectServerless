# Serverless HTTPS Redirect

A really simple HTTPS to HTTP redirect service to be used when developing SPA on localhost which have to interact with web services that only accept HTTPS redirect URI. As an example, if you are developing an application using Amazon Cognito Hosted UI functionality for the authentication of the users, you will need to provide an HTTPS URI as for the redirection of the successful authentication and for the logout. This is fine when you have deployed your application on a real server, but if you are developing on your local machine you have to create a certificate and serve your app from an https server. 

If you do not want to bother with all that, you can use this simple serverless application that runs behind Amazon API Gateway which provides an HTTPS endpoint. You only need to specify the base URI you want to redirect to as an environment variable of the Lambda function in the SAM template. 

After you have deployed the application via Cloudformation you can obtain the HTTPS endpoint base URI from the stack output

`aws cloudformation describe-stacks --stack-name <your-stack> --query "Stacks[0].Outputs[0].{Endpoint:OutputValue}"`

## How it works

When the redirect HTTPS URI is invoked, API Gateway passes the request as-is to the Lambda function (using Lambda proxy integration) that extracts the path and query of the requests and appends them to the URI which has been configured (eg http://localhost:8082/).




