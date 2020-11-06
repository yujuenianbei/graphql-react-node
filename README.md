# graphql-react-node

前端使用fetch请求数据　没有使用apollo-client　

后端服务：graphql-express

前端服务：graphql-react

后端测试：graphql-react-node

es数据库样例　nodejs_GraphQLFor_es-mysql

http://www.cnblogs.com/rongfengliang/p/5966283.html

HASURA https://docs.hasura.io/1.0/graphql/manual/getting-started/docker-simple.html#step-2-run-hasura-graphql-engine-postgres

Prisma https://www.prisma.io/

GATSBY https://www.gatsbyjs.org/docs/gatsby-project-structure/


{
    "id": 3,
    "department_id": 6,
    "level_id": 10,
    "role_id": 4,
    "username": "sunfeng",
    "password": "$2y$13$pukMOocQueJKb/CXOkRL7evlE1/EQiIZeyv9NGmLIWz/2JmGzob0C",
    "name": "孙峰",
    "english_name": "Jason",
    "gender": "male",
    "birthday": "1983-02-23",
    "avatar": "1dff9bb31f1d1234ac001bde14fcf49a.jpg",
    "email": "sunf@shinetechsoftware.com",
    "skype": "sf0223cn",
    "msn": "sf0223cn@hotmail.com",
    "qq": "105857855",
    "wechat": "",
    "slack_member_id": "U8X1XE92M",
    "phone": "15129369052",
    "province_code": 80,
    "city_code": 8001,
    "district_code": 800110,
    "address": "",
    "longitude": "108.936901",
    "latitude": "34.157891",
    "join_date": "2011-05-03",
    "departure_date": null,
    "language": "zh-CN",
    "is_active": 1,
    "auth_key": "n-u89CVDlJ5hlK7STItihRqKcE9Ki5x8",
    "access_token": "plB-dA-8a3OM2li1ta5IhtkDWZMngiGLh-PBlUQ2Xqw12mG2mPbZZjHODbFDTXBS",
    "create_time": "2015-01-14 11:46:15",
    "update_time": "2020-11-04 11:34:24",
    "last_login_time": "2020-11-04 11:34:24",
    "last_login_ip": "127.0.0.1",
    "login_times": 109
}




{
    "items": [
        {
            "id": 1,
            "member_id": 3,
            "project_id": 8,
            "environment": "production",
            "action_type": "account",
            "subject": "修改订单地址电话",
            "reason": "<p>客户的订单里面地址电话里面存在空格，ERP说接收订单失败，需要修复</p>\r\n",
            "country": [
                "IN",
                "CN",
                "ID",
                "MX",
                "MY"
            ],
            "action": "<p>执行如下SQL：</p>\r\n\r\n<pre>\r\n<code class=\"language-sql hljs\">update `sales_order_address` set `telephone` = '61419266796' where `parent_id` = 40</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n",
            "impact": "<p>影响了订单的地址数据</p>\r\n",
            "execution_type": "immediately",
            "start_time": "2020-10-30 13:25:25",
            "end_time": "2020-10-31 00:00:25",
            "remark": "<p>FD：<br />\r\n<a href=\"https://hponlineapj.freshdesk.com/a/tickets/39084\" id=\"LPlnk801384\" rel=\"noopener noreferrer\" target=\"_blank\">https://hponlineapj.freshdesk.com/a/tickets/39084</a></p>\r\n",
            "priority": "urgent",
            "status": "pending",
            "first_approver_id": 17,
            "final_approver_id": 3,
            "executor_id": 11,
            "insiders": [
                "10",
                "33",
                "2"
            ],
            "final_responder_id": null,
            "created_at": "2020-10-30 13:13:11",
            "updated_at": "2020-10-31 16:20:03",
            "email_message_id": null,
            "slack_message_id": null
        },
        {
            "id": 2,
            "member_id": 3,
            "project_id": 8,
            "environment": "production",
            "action_type": "account",
            "subject": "Bootstrap 各种进度条详解",
            "reason": "<p>创建不同样式的进度条的步骤如下：</p>\r\n\r\n<ul>\r\n\t<li>添加一个带有 class&nbsp;<strong>.progress</strong>&nbsp;的 &lt;div&gt;。</li>\r\n\t<li>接着，在上面的 &lt;div&gt; 内，添加一个带有 class&nbsp;<strong>.progress-bar</strong>&nbsp;和 class&nbsp;<strong>progress-bar-*</strong>&nbsp;的空的 &lt;div&gt;。其中，* 可以是&nbsp;<strong>success、info、warning、danger</strong>。</li>\r\n\t<li>添加一个带有百分比表示的宽度的 style 属性，例如 style=&quot;60%&quot;; 表示进度条在 60% 的位置。</li>\r\n</ul>\r\n",
            "country": [
                "IN",
                "MX",
                "SG"
            ],
            "action": "<p>创建一个基本的进度条的步骤如下：</p>\r\n\r\n<ul>\r\n\t<li>添加一个带有 class&nbsp;<strong>.progress</strong>&nbsp;的 &lt;div&gt;。</li>\r\n\t<li>接着，在上面的 &lt;div&gt; 内，添加一个带有 class&nbsp;<strong>.progress-bar</strong>&nbsp;的空的 &lt;div&gt;。</li>\r\n\t<li>添加一个带有百分比表示的宽度的 style 属性，例如 style=&quot;60%&quot;; 表示进度条在 60% 的位置。</li>\r\n</ul>\r\n\r\n<p>让我们看看下面的实例：</p>\r\n\r\n<pre>\r\n<code class=\"language-html\">&lt;!DOCTYPE html&gt;\r\n&lt;html&gt;\r\n&lt;head&gt;\r\n&lt;title&gt;Bootstrap 实例 - 进度条&lt;/title&gt;\r\n&lt;link href=\"/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"&gt;\r\n&lt;script src=\"/scripts/jquery.min.js\"&gt;&lt;/script&gt;\r\n&lt;script src=\"/bootstrap/js/bootstrap.min.js\"&gt;&lt;/script&gt;\r\n&lt;/head&gt;\r\n&lt;body&gt;\r\n  \r\n&lt;div class=\"progress\"&gt;\r\n&lt;div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\"\r\naria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%;\"&gt;\r\n&lt;span class=\"sr-only\"&gt;40% 完成&lt;/span&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n  \r\n&lt;/body&gt;\r\n&lt;/html&gt;</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n",
            "impact": "<p>创建一个条纹的进度条的步骤如下：</p>\r\n\r\n<ul>\r\n\t<li>添加一个带有 class&nbsp;<strong>.progress</strong>&nbsp;和&nbsp;<strong>.progress-striped</strong>&nbsp;的 &lt;div&gt;。</li>\r\n\t<li>接着，在上面的 &lt;div&gt; 内，添加一个带有 class&nbsp;<strong>.<a href=\"http://www.itxm.cn/\" target=\"_blank\">progress-bar</a></strong>&nbsp;和 class&nbsp;<strong>progress-bar-*</strong>&nbsp;的空的 &lt;div&gt;。其中，* 可以是&nbsp;<strong>success、info、warning、danger</strong>。</li>\r\n\t<li>添加一个带有百分比表示的宽度的 style 属性，例如 style=&quot;60%&quot;; 表示进度条在 60% 的位置。</li>\r\n</ul>\r\n\r\n<p>让我们看看下面的实例：</p>\r\n",
            "execution_type": "immediately",
            "start_time": null,
            "end_time": null,
            "remark": "<p>这是一个<strong>测试审批</strong>，不需要回复和处理！！！</p>\r\n",
            "priority": "low",
            "status": "completed",
            "first_approver_id": 11,
            "final_approver_id": 3,
            "executor_id": 62,
            "insiders": [
                "74"
            ],
            "final_responder_id": 74,
            "created_at": "2020-10-31 14:52:25",
            "updated_at": "2020-11-01 22:14:11",
            "email_message_id": null,
            "slack_message_id": "1604233685.004000"
        },
        {
            "id": 3,
            "member_id": 3,
            "project_id": 8,
            "environment": "production",
            "action_type": "account",
            "subject": "Bootstrap 各种进度条详解 - 落叶的博客 - 博客园",
            "reason": "<p>Bootstrap 各种进度条详解 - 落叶的博客 - 博客园</p>\r\n",
            "country": [
                "KR"
            ],
            "action": "<p>Bootstrap 各种进度条详解 - 落叶的博客 - 博客园</p>\r\n\r\n<p>&nbsp;</p>\r\n",
            "impact": "<p>Bootstrap 各种进度条详解 - 落叶的博客 - 博客园</p>\r\n",
            "execution_type": "immediately",
            "start_time": null,
            "end_time": null,
            "remark": "<p>Bootstrap 各种进度条详解 - 落叶的博客 - 博客园</p>\r\n",
            "priority": "urgent",
            "status": "pending",
            "first_approver_id": 10,
            "final_approver_id": 11,
            "executor_id": 12,
            "insiders": [
                "68",
                "75",
                "83"
            ],
            "final_responder_id": null,
            "created_at": "2020-10-31 16:11:11",
            "updated_at": "2020-10-31 16:11:11",
            "email_message_id": null,
            "slack_message_id": null
        },
        {
            "id": 4,
            "member_id": 75,
            "project_id": 8,
            "environment": "production",
            "action_type": "configuration",
            "subject": "聚焦五中全会：这三个“根本”透露哪些重要信息？",
            "reason": "<p>聚焦五中全会：这三个&ldquo;根本&rdquo;透露哪些重要信息？</p>\r\n",
            "country": [
                "CN",
                "HK"
            ],
            "action": "<p>　　金秋时节，充满收获与希望。</p>\r\n\r\n<p>　　10月26日至29日，中国共产党第十九届中央委员会第五次全体会议在北京举行。全会听取和讨论了习近平总书记受中央政治局委托作的工作报告，审议通过了《中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议》。党的十九届四中全会以来中央政治局的工作被充分肯定，夺取全面建设社会主义现代化国家新胜利有了纲领性文件。</p>\r\n\r\n<p>　　于&ldquo;两个一百年&rdquo;奋斗目标的历史交汇期举旗定向、谋篇布局，于世界百年未有之大变局中育先机、开新局，这次全会举世瞩目、意义重大。</p>\r\n\r\n<p>　　为&ldquo;十四五&rdquo;时期经济社会发展规划主要目标、为二〇三五年基本实现社会主义现代化谋定远景目标，十九届五中全会为未来5年乃至15年的中国描绘出绚丽多彩的恢宏图景。</p>\r\n\r\n<p>　　&ldquo;以满足人民日益增长的美好生活需要为根本目的&rdquo;&ldquo;以改革创新为根本动力&rdquo;&ldquo;为实现高质量发展提供根本保证&rdquo;，这三个&ldquo;根本&rdquo;连接起来的中国，注定是一个温暖的中国、一个活力的中国、一个奋进的中国。</p>\r\n",
            "impact": "<p>以满足人民日益增长的美好生活需要为根本目的，建设温暖中国。</p>\r\n",
            "execution_type": "immediately",
            "start_time": null,
            "end_time": null,
            "remark": "<p>6000多字的公报中，&ldquo;人民&rdquo;一词出现23次。&ldquo;人民平等参与、平等发展权利得到充分保障&rdquo;&ldquo;人民精神文化生活日益丰富&rdquo;&ldquo;改善人民生活品质&rdquo;&ldquo;不断增强人民群众获得感、幸福感、安全感&rdquo;&ldquo;提高人民收入水平&rdquo;&ldquo;保障人民生命安全&rdquo;&hellip;&hellip;字字句句，都围绕着&ldquo;人民&rdquo;二字，映射出以习近平同志为核心的党中央，率领9000多万名中国共产党员为人民谋幸福、为民族谋复兴的奋斗图景。</p>\r\n",
            "priority": "high",
            "status": "pending",
            "first_approver_id": 45,
            "final_approver_id": 3,
            "executor_id": 11,
            "insiders": "",
            "final_responder_id": null,
            "created_at": "2020-10-31 18:05:14",
            "updated_at": "2020-10-31 18:20:22",
            "email_message_id": null,
            "slack_message_id": null
        },
        {
            "id": 5,
            "member_id": 75,
            "project_id": 8,
            "environment": "production",
            "action_type": "database",
            "subject": "侠客岛：美国1周增50万例， 法德封城，欧美第二波疫情有多猛？",
            "reason": "<p>过去一周，美国新增逾50万例确诊病例，欧洲多国单日新增确诊病例数超过1万。法国宣布二次&ldquo;全国封城&rdquo;，德国也迎来&ldquo;事实上的封城&rdquo;，西班牙年内再度进入&ldquo;国家紧急状态&rdquo;。</p>\r\n\r\n<p>同时，波兰总统、波兰国防部长、保加利亚总理、欧盟委员会副主席、国际足联主席等各界要员确诊新冠，许多高级官员因接触过新冠患者而自我隔离，包括欧盟委员会主席、俄外交部长等。</p>\r\n\r\n<p>用世卫组织总干事谭德塞10月23日的话说，<strong>全球疫情已处于&ldquo;关键时刻&rdquo;，尤其是北半球国家，&ldquo;未来几个月将非常艰难&rdquo;。</strong></p>\r\n\r\n<p>为何欧美疫情的反扑如此猛烈？</p>\r\n",
            "country": [
                "SG"
            ],
            "action": "<p>进入秋冬，欧美多国新冠感染人数大幅攀升。</p>\r\n\r\n<p>近日美国疾控中心发布报告称，2020年，美国死亡人数较往年多出近30万人。在&ldquo;超额死亡&rdquo;人数中，2/3直接归因于新冠肺炎。据美国《纽约时报》10月27日报道，<strong>过去一周，美国新增确诊病例超50万例。</strong></p>\r\n\r\n<p>10月27日，白宫冠状病毒特别工作组成员布雷特&middot;吉罗尔称：&ldquo;新冠肺炎确诊病例数上升，并非如白宫所说&lsquo;是由于新冠病毒检测次数增多&rsquo;。感染数确实正在上升。&rdquo;</p>\r\n\r\n<p>值得注意的是，美国儿童感染新冠病毒的情况尤为严重。该国儿科学会和儿童医院协会日前发布报告，自新冠疫情暴发以来，<strong>美国有近80万儿童确诊新冠肺炎，每10万人中，就有约1053例确诊病例。</strong></p>\r\n",
            "impact": "<p>欧洲疫情的反扑势头更猛。欧洲多国单日新增确诊病例超过1万例，数倍于4月份&ldquo;第一波&rdquo;疫情时的高峰水平。</p>\r\n\r\n<p>10月23日，欧洲疾控中心发出警告，欧盟27个成员国中除塞浦路斯、爱沙尼亚、芬兰和希腊外，其余成员国疫情均令人&ldquo;高度关注&rdquo;。</p>\r\n\r\n<p>10月26日，世卫组织卫生紧急项目负责人迈克尔&middot;瑞安表示，<strong>上周全球46%的新增确诊病例、约1/3新增死亡病例均来自</strong><strong>世卫组织</strong><strong>欧洲范围，欧洲成为当前全球疫情&ldquo;震中&rdquo;</strong>，呼吁欧洲各国加快行动避免全面封锁，并相信欧洲国家能够像春夏时一样成功遏制病毒传播。</p>\r\n",
            "execution_type": "immediately",
            "start_time": null,
            "end_time": null,
            "remark": "<p>为何欧洲第二波疫情这么来势汹汹？在世卫组织卫生紧急项目技术负责人玛丽亚&middot;范凯尔克霍弗看来，除了检测能力提高、范围扩大之外，欧洲这一现象尤其值得注意：与年初相比，欧洲年轻人的新冠感染率在上升。这可能导致老年人或其他高风险人群感染，推高重症病亡率。</p>\r\n",
            "priority": "urgent",
            "status": "pending",
            "first_approver_id": 41,
            "final_approver_id": 3,
            "executor_id": 68,
            "insiders": [
                "75"
            ],
            "final_responder_id": null,
            "created_at": "2020-10-31 18:06:54",
            "updated_at": "2020-10-31 18:06:54",
            "email_message_id": null,
            "slack_message_id": null
        },
        {
            "id": 6,
            "member_id": 28,
            "project_id": 8,
            "environment": "production",
            "action_type": "command",
            "subject": "一组数字读懂“十四五”规划建议的战略思维",
            "reason": "<p>今天上午的中共中央新闻发布会介绍了《中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议》的起草情况，一组数字带你了解</p>\r\n",
            "country": "",
            "action": "<p><strong>规划《建议》是在习近平总书记亲自领导下制定的。</strong></p>\r\n\r\n<p>今年3月，中共中央政治局决定党的十九届五中全会审议&ldquo;十四五&rdquo;规划建议，成立了文件起草组，由习近平总书记担任组长，李克强、王沪宁、韩正同志担任副组长。</p>\r\n\r\n<p>7个月来，习近平总书记先后主持召开两次中央政治局会议、三次中央政治局常委会会议、两次起草组会议，研究审议规划《建议》稿的总体框架、基本思路、指导原则和重要内容。</p>\r\n\r\n<p>习近平总书记发表一系列重要讲话，作出很多重要的批示指示，为规划《建议》稿的起草把握大方向、确定大思路、提出大战略。</p>\r\n",
            "impact": "<p>习近平总书记亲力亲为，多次到地方和基层深入调研，亲自听取社会各界的意见和建议，多次亲自修改审定文件稿，进行战略谋划，倾注了大量心血，确保了规划《建议》稿的起草得以高质量完成。</p>\r\n",
            "execution_type": "immediately",
            "start_time": null,
            "end_time": null,
            "remark": "<p>规划《建议》的一个重要特点是<strong>坚持发扬民主、开门问策、集思广益。</strong></p>\r\n\r\n<p>去年底，习近平总书记就要求党中央和国务院有关部门对&ldquo;十四五&rdquo;经济社会发展问题组织开展前期研究，中央财办和国家发改委委托国家高端智库等60多家研究机构和有关部门就37个重大课题开展了研究，形成了130多份研究报告。全国人大、全国政协组织开展专题研究讨论，形成了系列调研报告。</p>\r\n",
            "priority": "urgent",
            "status": "pending",
            "first_approver_id": 45,
            "final_approver_id": 3,
            "executor_id": 72,
            "insiders": "",
            "final_responder_id": null,
            "created_at": "2020-10-31 18:08:58",
            "updated_at": "2020-10-31 18:08:58",
            "email_message_id": null,
            "slack_message_id": null
        },
        {
            "id": 7,
            "member_id": 28,
            "project_id": 8,
            "environment": "production",
            "action_type": "account",
            "subject": "棱镜｜错过蚂蚁千万身家的人：有人曾看低支付宝，有人称离职是救赎",
            "reason": "<p>招股书显示，蚂蚁集团员工数有16660人。和方圆、杨云一样，在支付宝以及蚂蚁集团发展的10多年历程中，错过蚂蚁或在蚂蚁上市前离开的人们更是不计其数。</p>\r\n",
            "country": "",
            "action": "<p>出品 | 棱镜&middot;腾讯新闻小满工作室</p>\r\n\r\n<p>2009年，在上海从事金融工作的方圆接到了来自支付宝的面试邀请。方圆当时想都没想，一口拒绝。&ldquo;支付宝是啥公司啊，没怎么听说过。搞支付的不行，这能做大？还在杭州又要换城市好累，不去。&rdquo;</p>\r\n\r\n<p>2020年11月，支付宝母公司蚂蚁集团将在科创板和港交所主板上市，开启一场超级造富盛宴，大批早期员工身家或达数千万乃至上亿。</p>\r\n\r\n<p>&ldquo;选择比努力更重要。赚大钱靠命！&rdquo;如今，在上海某银行工作的方圆对作者说。</p>\r\n",
            "impact": "<p>同样家在上海的杨云2015年加入蚂蚁，并从此开始了每周在沪杭之间的奔波。2020年5月，在蚂蚁宣布启动上市前的1个多月，她选择了离职，主要原因是陪孩子的时间太少太少，孩子对此颇有怨言。</p>\r\n\r\n<p>五年下来，杨云攒下了几百张上海往返杭州的高铁票，也在离职前收获了数百万元的激励变现&mdash;&mdash;当然，如果继续坚持到上市，这笔激励有望达到2000万元。</p>\r\n",
            "execution_type": "schedule",
            "start_time": "2020-10-31 18:55:33",
            "end_time": "2020-11-02 18:05:33",
            "remark": "<p><strong>去支付宝需要巨大勇气，&ldquo;余额宝之父&rdquo;也曾被看低</strong></p>\r\n\r\n<p>在转发了一条&ldquo;蚂蚁上市造富创纪录&rdquo;的新闻后，杨明有些遗憾：2006年时曾有跳槽去支付宝创业的机会摆在面前，但没有珍惜。&ldquo;感觉错过了整个时代。&rdquo;</p>\r\n\r\n<p>杨明如今已是一家大型金融机构的高管。他告诉作者，当时没去的主要原因是，父母无法接受自己从北京去杭州，也无法接受自己从大型银行去互联网创业公司。</p>\r\n",
            "priority": "urgent",
            "status": "pending",
            "first_approver_id": 10,
            "final_approver_id": 3,
            "executor_id": 56,
            "insiders": [
                "14",
                "18"
            ],
            "final_responder_id": null,
            "created_at": "2020-10-31 18:11:26",
            "updated_at": "2020-10-31 18:11:26",
            "email_message_id": null,
            "slack_message_id": null
        },
        {
            "id": 8,
            "member_id": 18,
            "project_id": 8,
            "environment": "production",
            "action_type": "hotfix",
            "subject": "想退休后安享晚年？就别给孩子留太多钱",
            "reason": "<p>每次阅读那些自我完善或者自我提高的书籍或心灵鸡汤时，很多人都会感叹自己怎么这么差，有太多需要改进的地方。和读此类书籍后的感受一样，养老金充裕度调查的结果也会让很多人觉得自己的人生一塌糊涂，必须尽早纠正和完善，否则晚年生活会很悲惨。</p>\r\n\r\n<p>那么，究竟是什么让他们感觉如此糟糕？</p>\r\n",
            "country": [
                "KR"
            ],
            "action": "<p>很简单，有太多的人目光短浅且缺乏自制力，导致自己没有足够多的存款；他们没有详细且合理的退休计划，而现在制定这样的计划有点为时已晚。因为腰包不够鼓，在不久的将来，一个牛油果吐司都可能会让他们没钱换一副新的老花镜</p>\r\n",
            "impact": "<p><strong>养老，始终是一个全球难题</strong></p>\r\n\r\n<p>存款不够多，导致很多人不得不精打细算地生活。这里的精打细算，指的并不是理财师口中所说的最有效的理财方式之一，而是完全因为钱不够多的不得已而为之。不得不承认，在当今社会，没有钱，很多事情做不了。随之而来的是，不管是年轻人，还是老年人都极容易被负面情绪影响，满腹牢骚，抱怨命运不公，感叹自己为何没出在豪门，为什么不像那些科技大富豪一样满脑子都是可以创造巨额财富的想法。</p>\r\n",
            "execution_type": "immediately",
            "start_time": null,
            "end_time": null,
            "remark": "<p>与此同时，手头不宽裕的老年人，经常会被一种内疚感困扰，因为他们认为自己本应该能给孩子们留下一些钱，或者钱的等价物，但是他们却没办法做到。不但不能给孩子们留下点家产，这些老人连养活自己都很难，因为没有退休金，或退休金完全不够用。</p>\r\n\r\n<p>从全球范围来看，没有养老金的人不在少数。养老，始终是一个全球难题。举个例子，在印度，多达51%的民众没有退休计划，很多有养老计划的人过得也不好；在美国，Vanguard记录的500万个固定缴款账户中，有三分之一的账户2019年的余额不足1万美元。这些账户余额的中位数不足2.6万美元。需要指出的是，这些都是新冠疫情危机爆发前的数据。在危机期间，很多美国民众因收入减少，或失去收入而不得不动用存款。</p>\r\n",
            "priority": "medium",
            "status": "pending",
            "first_approver_id": 45,
            "final_approver_id": 3,
            "executor_id": 11,
            "insiders": "",
            "final_responder_id": null,
            "created_at": "2020-10-31 18:14:06",
            "updated_at": "2020-10-31 18:20:05",
            "email_message_id": null,
            "slack_message_id": null
        },
        {
            "id": 9,
            "member_id": 18,
            "project_id": 8,
            "environment": "staging",
            "action_type": "server",
            "subject": "新华网评：高起点开局 高质量推进",
            "reason": "<p>29日，中国共产党第十九届中央委员会第五次全体会议胜利闭幕并发布公报。翻开公报，有一个词多次出现，即&ldquo;高质量&rdquo;：我国已转向高质量发展阶段，以推动高质量发展为主题，实现更加充分更高质量就业，构建高质量发展的国土空间布局和支撑体系，建设高质量教育体系&hellip;&hellip;方方面面的要求和部署汇总起来，高质量发展的未来图景愈发清晰，一个&ldquo;迈上新的大台阶&rdquo;的中国的轮廓愈发清晰。</p>\r\n",
            "country": [
                "ID",
                "TH"
            ],
            "action": "<p>量积累到一定阶段，必然转向质的提升。当前我国已转向高质量发展阶段，继续发展具有多方面优势和条件，同时我国发展不平衡不充分问题仍然突出，重点领域关键环节改革任务仍然艰巨，创新能力不适应高质量发展要求，农业基础还不稳固，城乡区域发展和收入分配差距较大，生态环保任重道远，民生保障存在短板，社会治理还有弱项。基于此现状，如何准确识变、科学应变、主动求变，不断激活高质量发展的动力活力，不断催生高质量发展的新动能新优势，全会给出了明确的答案。全会提出的一系列战略性、创新性举措必将点燃高质量发展新引擎。</p>\r\n",
            "impact": "<p>这次全会审议通过的《中共中央关于制定国民经济和社会发展第十四个五年规划和二〇三五年远景目标的建议》，有一个突出特点，就是紧紧抓住我国社会主要矛盾，从各个领域提出一系列战略性、创新性举措。比如，确立全面建设社会主义现代化国家在&ldquo;四个全面&rdquo;战略布局中的引领地位，明确提出把科技自立自强作为国家发展的战略支撑，把扩大内需作为战略基点，强调把新发展理念贯彻到发展各领域和全过程，把安全发展贯彻到发展各领域和全过程等。这些举措，聚焦突出问题和明显短板，回应人民群众诉求和期盼，不但要确保经济的高质量发展，还要实现社会、生态、文化、国家治理体系的高质量发展，这对于牢牢把握发展主动权、重塑竞争新优势，确保在&ldquo;十四五&rdquo;期间我国继续沿着高质量之路阔步前进具有重大意义。</p>\r\n",
            "execution_type": "schedule",
            "start_time": "2020-11-01 18:10:12",
            "end_time": "2020-11-01 23:10:13",
            "remark": "<p>锐始者必图其终，成功者先计于始。作为一次具有里程碑意义的重要会议，五中全会擘画了&ldquo;十四五&rdquo;和全面建设社会主义现代化国家的宏伟蓝图，为中国这艘巨轮行稳致远确定了新的航标和方向。而要进一步实现&ldquo;十四五&rdquo;规划和二〇三五年远景目标，走好高质量发展之路，我们要办的事情还有很多。在新的历史起点上，我们要同心同德、顽强奋斗，高起点开局、高质量推进，夺取全面建设社会主义现代化国家新胜利。</p>\r\n",
            "priority": "urgent",
            "status": "pending",
            "first_approver_id": 11,
            "final_approver_id": 3,
            "executor_id": 72,
            "insiders": [
                "2"
            ],
            "final_responder_id": null,
            "created_at": "2020-10-31 18:15:49",
            "updated_at": "2020-10-31 18:15:49",
            "email_message_id": null,
            "slack_message_id": null
        },
        {
            "id": 10,
            "member_id": 18,
            "project_id": 8,
            "environment": "production",
            "action_type": "deployment",
            "subject": "《求是》发表习近平重要文章",
            "reason": "<p>新华社北京10月31日电11月1日出版的第21期《求是》杂志将发表中共中央总书记、国家主席、中央军委主席习近平的重要文章《国家中长期经济社会发展战略若干重大问题》。</p>\r\n\r\n<p>文章强调，当今世界正经历百年未有之大变局，这次疫情既是一次危机，也是一次大考。我们要举一反三，进行更有长远性的思考，完善战略布局，做到化危为机，实现高质量发展。</p>\r\n",
            "country": [
                "ID"
            ],
            "action": "<p>文章指出，要坚定实施扩大内需战略。牢牢把握扩大内需这一战略基点，使生产、分配、流通、消费各环节更多依托国内市场实现良性循环，国内循环越顺畅，越有利于构建以国内大循环为主体、国内国际双循环相互促进的新发展格局。</p>\r\n\r\n<p>文章指出，要优化和稳定产业链、供应链。产业链、供应链在关键时刻不能掉链子，这是大国经济必须具备的重要特征。要拉长长板，补齐短板，在关系国家安全的领域和节点构建自主可控、安全可靠的国内生产供应体系。</p>\r\n",
            "impact": "<p>文章指出，要完善城市化战略，把人民生命安全和身体健康作为城市发展的基础目标，更好推进以人为核心的城镇化，使城市更健康、更安全、更宜居。</p>\r\n",
            "execution_type": "schedule",
            "start_time": "2020-10-31 23:00:05",
            "end_time": "2020-11-01 02:00:05",
            "remark": "<p>文章指出，科技发展要坚持问题导向、目标导向，调整优化科技投入和产出结构，创新科技成果转化机制。要深化对人与自然生命共同体的规律性认识，站在人与自然和谐共生的高度来谋划经济社会发展。要加强公共卫生体系建设，从顶层设计上提高公共卫生体系在国家治理体系中的地位。</p>\r\n",
            "priority": "high",
            "status": "pending",
            "first_approver_id": 10,
            "final_approver_id": 3,
            "executor_id": 68,
            "insiders": [
                "2"
            ],
            "final_responder_id": null,
            "created_at": "2020-10-31 18:17:47",
            "updated_at": "2020-10-31 18:20:49",
            "email_message_id": null,
            "slack_message_id": null
        },
        {
            "id": 11,
            "member_id": 10,
            "project_id": 8,
            "environment": "production",
            "action_type": "account",
            "subject": "新建川藏铁路雅安至林芝段即将施工",
            "reason": "<p><strong>中国青年报客户端北京10月31日电（中青报&middot;中青网记者周伟）</strong>记者从中国国家铁路集团有限公司（以下简称国铁集团）获悉，10月31日，川藏铁路雅安至林芝段先期开工段&ldquo;两隧一桥&rdquo;及施工供电工程招标结果开始在北京市建设工程交易信息网上公示。这标志着川藏铁路建设即将进入工程实施阶段。</p>\r\n",
            "country": "",
            "action": "<p>川藏铁路工程建设指挥部负责人介绍，新建川藏铁路雅安至林芝段位于四川省、西藏自治区境内，新建线路起自既有成都至雅安铁路雅安站，经四川省雅安市、甘孜藏族自治州，西藏自治区昌都市、林芝市，接入在建拉萨至林芝铁路林芝站。线路为国家Ⅰ级双线铁路，设计时速120公里至200公里。新建正线长度1011公里，全线共设26座车站。配套建设临时施工道路885公里、电力线路2000公里，以及成都、林芝运营保障基地等。项目估算总投资约3198亿元。项目由国铁集团负责组织实施，设立川藏铁路工程建设指挥部具体组织工程建设，成立川藏铁路有限公司作为项目法人负责项目管理。</p>\r\n",
            "impact": "<p>该负责人介绍，自2018年10月10日中央财经委员会第三次会议决定全面启动川藏铁路规划建设以来，国铁集团认真贯彻落实党中央决策部署，按照&ldquo;科学规划、技术支撑、保护生态、安全可靠&rdquo;的总体思路，与相关部门、单位和地方党委政府协调配合，全力推进川藏铁路规划建设工作。一是强化组织保障。成立了川藏铁路工程建设指挥部，全面负责建设工作的组织实施；组建了川藏铁路公司和现场项目部，现场技术管理人员已经到位。二是集中开展地质勘察大会战。组织调集国内最优秀的勘察设计和科研力量，采用世界先进的勘察设计技术，克服高寒缺氧、交通条件恶劣等重重困难，确保了地质勘察工作的质量和进度。三是加强方案比选优化。开展工程地质、线路方案等专题研究，稳定了线路方案。针对复杂地质条件下长大隧道和大跨高墩桥梁，制定了有效可靠的工程技术措施，保障建设和运营安全。四是推进重大科技攻关。聚焦川藏铁路重大科研项目，开展重大科技攻关；系统总结梳理国内外铁路、公路、水利等类似工程经验，形成多项技术总结报告和设计施工标准，国内院士、专家深度参与，为规划建设工作提供了有力技术支撑。五是强化环保措施。线路绕避多处环境敏感区，对全线隧道出渣按照减量化、资源化、无害化等原则进行综合利用。组织开展野生动植物保护调查研究，形成了生态保护方案。六是坚持统筹规划。线路规划充分考虑与机场、公路的有机衔接，推动综合交通运输体系建设；开展站城融合和土地综合开发方案研究，发挥川藏铁路带动作用和效益，努力改善沿线群众生产生活条件，服务经济社会发展。</p>\r\n",
            "execution_type": "immediately",
            "start_time": null,
            "end_time": null,
            "remark": "<p>该负责人表示，新建川藏铁路雅安至林芝段可研报告经党中央、国务院批准后，国铁集团会同四川省和西藏自治区9月21日召开了川藏铁路工程建设誓师动员会，动员各有关方面坚决响应党中央号令，统一思想、明确目标，压实责任、团结奋战，以高度的政治责任感和历史使命感，进一步细化优化川藏铁路工程建设实施方案，深入扎实做好各项开工准备工作，确保高起点高标准高质量启动工程建设。</p>\r\n",
            "priority": "urgent",
            "status": "pending",
            "first_approver_id": 41,
            "final_approver_id": 3,
            "executor_id": 45,
            "insiders": [
                "48",
                "54",
                "57"
            ],
            "final_responder_id": null,
            "created_at": "2020-10-31 18:19:35",
            "updated_at": "2020-10-31 18:19:35",
            "email_message_id": null,
            "slack_message_id": null
        }
    ],
    "_links": {
        "self": {
            "href": "http://fd.shinetechxian.com/api/approvals?token=otJHN4WQnH9OCay-UYZ3xZXKtIgHynnH-fi07z8Gn86jy5A90_mwBPOoZE9UdDoU&page=1"
        },
        "first": {
            "href": "http://fd.shinetechxian.com/api/approvals?token=otJHN4WQnH9OCay-UYZ3xZXKtIgHynnH-fi07z8Gn86jy5A90_mwBPOoZE9UdDoU&page=1"
        },
        "last": {
            "href": "http://fd.shinetechxian.com/api/approvals?token=otJHN4WQnH9OCay-UYZ3xZXKtIgHynnH-fi07z8Gn86jy5A90_mwBPOoZE9UdDoU&page=1"
        }
    },
    "_meta": {
        "totalCount": 11,
        "pageCount": 1,
        "currentPage": 1,
        "perPage": 20
    }
}








{
    "id": 2,
    "member_id": 3,
    "project_id": 8,
    "environment": "production",
    "action_type": "account",
    "subject": "Bootstrap 各种进度条详解",
    "reason": "<p>创建不同样式的进度条的步骤如下：</p>\r\n\r\n<ul>\r\n\t<li>添加一个带有 class&nbsp;<strong>.progress</strong>&nbsp;的 &lt;div&gt;。</li>\r\n\t<li>接着，在上面的 &lt;div&gt; 内，添加一个带有 class&nbsp;<strong>.progress-bar</strong>&nbsp;和 class&nbsp;<strong>progress-bar-*</strong>&nbsp;的空的 &lt;div&gt;。其中，* 可以是&nbsp;<strong>success、info、warning、danger</strong>。</li>\r\n\t<li>添加一个带有百分比表示的宽度的 style 属性，例如 style=&quot;60%&quot;; 表示进度条在 60% 的位置。</li>\r\n</ul>\r\n",
    "country": [
        "IN",
        "MX",
        "SG"
    ],
    "action": "<p>创建一个基本的进度条的步骤如下：</p>\r\n\r\n<ul>\r\n\t<li>添加一个带有 class&nbsp;<strong>.progress</strong>&nbsp;的 &lt;div&gt;。</li>\r\n\t<li>接着，在上面的 &lt;div&gt; 内，添加一个带有 class&nbsp;<strong>.progress-bar</strong>&nbsp;的空的 &lt;div&gt;。</li>\r\n\t<li>添加一个带有百分比表示的宽度的 style 属性，例如 style=&quot;60%&quot;; 表示进度条在 60% 的位置。</li>\r\n</ul>\r\n\r\n<p>让我们看看下面的实例：</p>\r\n\r\n<pre>\r\n<code class=\"language-html\">&lt;!DOCTYPE html&gt;\r\n&lt;html&gt;\r\n&lt;head&gt;\r\n&lt;title&gt;Bootstrap 实例 - 进度条&lt;/title&gt;\r\n&lt;link href=\"/bootstrap/css/bootstrap.min.css\" rel=\"stylesheet\"&gt;\r\n&lt;script src=\"/scripts/jquery.min.js\"&gt;&lt;/script&gt;\r\n&lt;script src=\"/bootstrap/js/bootstrap.min.js\"&gt;&lt;/script&gt;\r\n&lt;/head&gt;\r\n&lt;body&gt;\r\n  \r\n&lt;div class=\"progress\"&gt;\r\n&lt;div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"60\"\r\naria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%;\"&gt;\r\n&lt;span class=\"sr-only\"&gt;40% 完成&lt;/span&gt;\r\n&lt;/div&gt;\r\n&lt;/div&gt;\r\n  \r\n&lt;/body&gt;\r\n&lt;/html&gt;</code></pre>\r\n\r\n<p>&nbsp;</p>\r\n",
    "impact": "<p>创建一个条纹的进度条的步骤如下：</p>\r\n\r\n<ul>\r\n\t<li>添加一个带有 class&nbsp;<strong>.progress</strong>&nbsp;和&nbsp;<strong>.progress-striped</strong>&nbsp;的 &lt;div&gt;。</li>\r\n\t<li>接着，在上面的 &lt;div&gt; 内，添加一个带有 class&nbsp;<strong>.<a href=\"http://www.itxm.cn/\" target=\"_blank\">progress-bar</a></strong>&nbsp;和 class&nbsp;<strong>progress-bar-*</strong>&nbsp;的空的 &lt;div&gt;。其中，* 可以是&nbsp;<strong>success、info、warning、danger</strong>。</li>\r\n\t<li>添加一个带有百分比表示的宽度的 style 属性，例如 style=&quot;60%&quot;; 表示进度条在 60% 的位置。</li>\r\n</ul>\r\n\r\n<p>让我们看看下面的实例：</p>\r\n",
    "execution_type": "immediately",
    "start_time": null,
    "end_time": null,
    "remark": "<p>这是一个<strong>测试审批</strong>，不需要回复和处理！！！</p>\r\n",
    "priority": "low",
    "status": "completed",
    "first_approver_id": 11,
    "final_approver_id": 3,
    "executor_id": 62,
    "insiders": [
        "74"
    ],
    "final_responder_id": 74,
    "created_at": "2020-10-31 14:52:25",
    "updated_at": "2020-11-01 22:14:11",
    "email_message_id": null,
    "slack_message_id": "1604233685.004000"
}
