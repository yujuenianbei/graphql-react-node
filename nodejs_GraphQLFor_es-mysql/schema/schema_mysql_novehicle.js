const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');
// 案例2
//Query代表的是RootQuery，也就是一切query的根源，最重要的參數為fields；在fields中可以定義people、post這些自定義的路徑名，並對應不同的資料型態；在這些路徑之下又可對應args與resolveargs則表示該路徑可以識別的參數、resolve則表示回傳什麼資料，也就是對應資料庫的地方，這裡可以用Promise，另外稍微留意一下這裡用的是ORMreturn Db.models.post.findAll({ where: args });取回所有符合條件的貼文。
const Db = require('../database/mysqldb');

const Novehicle = new GraphQLObjectType({
    name: 'Novehicle',
    description: 'Novehicle sechema',
    fields() {
        return {
            id: {
                type: GraphQLInt, resolve(novehicle) {
                    return novehicle.id;
                }
            },
            cameraid: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.cameraid;
                }
            },
            rtype: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.rtype;
                }
            },
            entrytime: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.entrytime;
                }
            },
            leavetime: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.leavetime;
                }
            },
            ori_img: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.ori_img;
                }
            },
            img: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.img;
                }
            },
            sex: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.sex;
                }
            },
            canopy: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.canopy;
                }
            },
            headwear: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.headwear;
                }
            },
            bicycletype: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.bicycletype;
                }
            },
            has_object: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.has_object;
                }
            },
            hair: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.hair;
                }
            },
            lower_type: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.lower_type;
                }
            },
            lower_color: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.lower_color;
                }
            },
            upper_type: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.upper_type;
                }
            },
            upper_color: {
                type: GraphQLString, resolve(novehicle) {
                    return novehicle.upper_color;
                }
            }
        };
    }
});


const Query = new GraphQLObjectType({
    name: 'Query',
    description: 'Root query object',
    fields: () => {
        return {
            result_novehicle: {
                type: new GraphQLList(Novehicle),
                args: {
                    id: {type: GraphQLInt},
                    cameraid: {type: GraphQLString},
                    rtype: {type: GraphQLString},
                    entrytime: {type: GraphQLString},
                    leavetime: {type: GraphQLString},
                    ori_img: {type: GraphQLString},
                    img: {type: GraphQLString},
                    sex: {type: GraphQLString},
                    canopy: {type: GraphQLString},
                    headwear: {type: GraphQLString},
                    bicycletype: {type: GraphQLString},
                    has_object: {type: GraphQLString},
                    hair: {type: GraphQLString},
                    lower_type: {type: GraphQLString},
                    lower_color: {type: GraphQLString},
                    upper_type: {type: GraphQLString},
                    upper_color: {type: GraphQLString}
                },
                resolve(root, args) {
                    return Db.models.data.findAll({where: args});
                }
            }
        };
    }
});


const Schema = new GraphQLSchema({
    query: Query
});


// 可以看到adduser的resolve變成了Db.models.person.create()，而參數中有GraphQLNonNull，這表示此參數不可為Null。

module.exports = Schema;
