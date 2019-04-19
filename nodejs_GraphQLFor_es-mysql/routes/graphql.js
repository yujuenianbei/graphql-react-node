const express = require('express');
const router = express.Router();
const graphqlHTTP = require('express-graphql');
// const elasticsearch_novehicle =  require('../schema/elasticsearch_novehicle');
const mysql_novehicle = require('../schema/schema_mysql_novehicle');

const graphqlModule_mysql = graphqlHTTP((request) => ({
    // schema: Schema,
    // schema: es_graphql_Schema,
    schema: mysql_novehicle,
    pretty: true,
    graphiql: true,
    context: {platform: request.query.platform},
    formatError: error => ({
        type: 'graphql',
        path: error.path,
        message: error.message,
        locations: error.locations ? error.locations[0] : null
    }),
}));

// const graphqlModule_elasticsearch = graphqlHTTP((request) => ({
//     // schema: Schema,
//     // schema: es_graphql_Schema,
//     schema: elasticsearch_novehicle,
//     pretty: true,
//     graphiql: true,
//     context: {platform: request.query.platform},
//     formatError: error => ({
//         type: 'graphql',
//         path: error.path,
//         message: error.message,
//         locations: error.locations ? error.locations[0] : null
//     }),
// }));

router.all('/mysql', graphqlModule_mysql);
// router.all('/elasticsearch', graphqlModule_elasticsearch);


module.exports = router;
