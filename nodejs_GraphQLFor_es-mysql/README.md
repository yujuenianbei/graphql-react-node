使用nodeJs搭建基于GraphQL规范的项目，用于查询Mysql与ElasticSearch
-------------------------


nodejs_GraphQLFor_es-mysql

------------------------
this is demo for graphql with query mysql and query es

---
 node v8.9.4
---
 npm v5.6.0

--- 下载依赖

npm install

------- 创建数据源 在data文件里的es-data 和 mysql-data 里生成不同数据源
在schema里定义的

            mysql为 localhost:3306

            elasticsearch 为 localhost:9200  这个使用的版本为5.3.0

1:创建表或索引
  见目录data文件夹

2：插入数据
  见目录data文件夹

--- 启动项目

npm start

-------使用查询

mysql

loclahost:3000/graphql/mysql

es

localhost:3000/graphql/elasticsearch



