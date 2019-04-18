//require `babel/register` to handle JavaScript code

require('babel-register') ({
    presets: [ 'env',"stage-0" ]
})

require('babel-polyfill');
// require('./graphql-port/postMutation')
// require('./graphql-port/GraphQLSchema')
require('./app')