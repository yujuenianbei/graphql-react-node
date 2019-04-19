const elasticsearch = require('elasticsearch');
const { graphql, TypeComposer } = require( 'graphql-compose');
const { composeWithElastic } = require( 'graphql-compose-elasticsearch'); // from 'graphql-compose-elasticsearch';

const { GraphQLSchema, GraphQLObjectType } = graphql;

const novehicleMapping = {
    properties: {
        img:{type: 'text'},
        upper_type:{type: 'text'},
        push_times:{type: 'text'},
        lower_color:{type: 'text'},
        sex:{type: 'text'},
        rtype:{type: 'text'},
        headwear:{type: 'text'},
        hair:{type: 'text'},
        bicycletype:{type: 'text'},
        canopy:{type: 'text'},
        feature:{type: 'text'},
        cameraId:{type: 'text'},
        ori_img:{type: 'text'},
        lower_type:{type: 'text'},
        upper_colour:{type: 'text'},
        has_object:{type: 'text'}
    },
};

const NovehicleEs = composeWithElastic({
    graphqlTypeName: 'novehicle',
    elasticIndex: 'novehicle',   // 查询的es 索引
    elasticType: 'default',     // 查询索引的type
    elasticMapping: novehicleMapping,
    elasticClient: new elasticsearch.Client({
        host: 'http://localhost:9200',
        apiVersion: '5.3',
        log: 'trace',
    }),
    // pluralFields: ['skills', 'languages'], //pluralFields 指的是包含多个值
});

const ProxyTC = TypeComposer.create(`type ProxyDebugType { source: JSON }`);
ProxyTC.addResolver({
    name: 'showArgs',
    kind: 'query',
    args: {
        source: 'JSON',
    },
    type: 'ProxyDebugType',
    resolve: ({ args }) => args,
});

NovehicleEs.addRelation('showRelationArguments', {
    resolver: () => ProxyTC.getResolver('showArgs'),
    prepareArgs: {
        source: source => source,
    },
    projection: {
        name: true,
        salary: true,
    },
});

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            novehicleSearch: NovehicleEs.getResolver('search').getFieldConfig(),
            novehiccleSearchConnection: NovehicleEs.getResolver('searchConnection').getFieldConfig(),
        },
    }),
});

module.exports = schema;