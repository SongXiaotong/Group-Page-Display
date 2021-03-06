import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store();

export default new Vuex.Store({
  state:{
    pics: [
      {src: '/static/4.png', message:'XXX会议1'},
      {src: '/static/4.png', message:'XXX会议2'},
      {src: '/static/4.png', message:'XXX会议3'},
      {src: '/static/4.png', message:'XXX会议4'}
    ],
    links: [
      {pic: '/static/links/1.jpg', name: '中国计算机学会', link: 'https://www.ccf.org.cn/'},
      {pic: '/static/links/1.jpg', name: '中国计算机学会人工智能与模式识别专业委员会', link: 'https://www.ccf.org.cn/tc/zwmd/rgznymssb/'}
    ],
    notifications: [
      {
        id: 1,
        name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。',
        time: '2020-01-01 15:23',
        color: 'red',
        author: '委员会',
        link:'https://www.baidu.com/',
        detail: [
          "知识工程的概念由图灵奖获得者费根鲍姆(Feigenbaum)教授于1977年正式提出，并且成为人工智能的重要分支。知识工程的重要问题就是如何对知识进行表示以及采取什么方法对知识进行推理。近年来，随着知识图谱的兴起，知识表示和推理再次受到了广泛关注",
          "为了促进知识表示与推理在中国的发展，中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组成立大会将在南京举办学组成立大会，并邀请学组专家学者做学术报告。"
        ]
      },
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'red', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'red', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'}
    ],
    news: [
      {
        id: 1,
        name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。',
        time: '2020-01-01 15:23',
        color: 'red',
        author: '委员会',
        link:'https://www.baidu.com/',
        detail: [
          "知识工程的概念由图灵奖获得者费根鲍姆(Feigenbaum)教授于1977年正式提出，并且成为人工智能的重要分支。知识工程的重要问题就是如何对知识进行表示以及采取什么方法对知识进行推理。近年来，随着知识图谱的兴起，知识表示和推理再次受到了广泛关注",
          "为了促进知识表示与推理在中国的发展，中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组成立大会将在南京举办学组成立大会，并邀请学组专家学者做学术报告。"
        ]
      },
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能与模式识别专业委员会知识表示与推理学组将于1月12日成立。', time: '2020-01-01 15:23', color: 'red', link:'https://www.baidu.com/'},
      {name:'中国计算机学会人工智能。', time: '2020-01-01 15:23', color: 'black', link:'https://www.baidu.com/'},
    ],
    organization:[
      {key:'拟申请专业组', value:'知识表示与推理专业组'},
      {key:'专业组主任（拟）', value:'FangZhen Lin（林方真）教授 香港科技大学'},
      {key:'专业组副主任（拟）', value: '刘咏梅 教授 中山大学\n' +
          '沈一栋 教授 中国科学院软件研究所\n' +
          '漆桂林 教授 东南大学\n'},
      {key:'主要成员（拟）', value:'KeWen Wang（王克文）教授 Griffith University, Australia \n' +
          '冯志勇 教授 天津大学\n' +
          '朱其立 教授 上海交通大学\n' +
          'JiaHuai You（犹嘉槐）教授 University of Alberta, Canada\n' +
          '张明义 教授 贵州省科学院\n' +
          'Yan Zhang（张焰）教授 University of Western Sydney, Australia\n' +
          '陈华钧 教授 浙江大学\n' +
          '杜剑峰 教授 广东外语外贸大学\n' +
          '林作铨 教授 北京大学\n' +
          '高  阳 教授 南京大学\n' +
          '常  亮 教授 桂林电子科技大学\n' +
          '万  海 副教授 中山大学\n' +
          '吉建民 副教授 中国科学技术大学\n' +
          '张小旺 副教授 天津大学\n' +
          '王昊奋  CTO  狗尾草科技有限公司\n'},
      {key: '挂靠单位（拟）', value: '中山大学 数据科学与计算机学院\n' +
          '中山大学 逻辑与认知研究所\n'},
      {key:'专业组秘书（拟）', value:'万  海 副教授\n' +
          '手机号码：13512768378\n' +
          '电子邮箱：wanhai@mail.sysu.edu.cn\n'}
    ],
    members:[
      {
        img:'/static/members/linfangzhen.jpg',
        name: 'FangZhen Lin（林方真）',
        position:'教授',
        email: 'flin@cs.ust.hk',
        introduction:
          '林方真教授是香港科技大学计算机科学与工程系教授。1991年毕业于斯坦福大学计算机科学系，获博士学位。之后在多伦多大学进行博士后研究，于1996年进入香港科技大学任教。\n'+
          '林方真教授是知识表示与推理领域的国际知名专家，是国际著名人工智能刊物Journal of Artificial Intelligence Research （JAIR）副主编，是国际顶级会议IJCAI 2015 KR Track、KR2010、LPNMR2009程序委员会主席，以及国际顶级会议IJCAI、AAAI、KR、ECAI等程序委员会委员。林方真教授先后在国际著名人工智能刊物《Artificial Intelligence》、《Journal of Artificial Intelligence Research》以及著名人工智能国际会议IJCAI、AAAI、KR等发表70余篇论文，在非单调推理、自主机器人理论、逻辑程序设计和行动推理等领域均做出杰出贡献，先后获得世界人工智能大会最佳论文奖（1997）、美国人工智能年会最佳论文奖（2004）和“知识表示与推理”国际学术大会最佳论文奖（2000）等国际学术大奖。'

      },
      {
        img:'',
        name: '沈一栋',
        position:'教授',
        email: '暂无',
        introduction: '沈一栋教授是中国科学院软件研究所研究员、博士生导师，2013年起任计算机科学实验室主任及其国家重点实验室常务副主任。1991年获重庆大学计算机科学博士学位，1992-1993年法国Valenciennes理工学院博士后，1995-1996年美国Maryland大学高级计算机研究所访问学者，1998-2002年加拿大Alberta大学和Simon Fraser大学计算机系访问教授。1993-2002年任重庆大学教授，2002年起任中科院软件所研究员，2011年起任澳大利亚Griffith大学兼职教授。1998年入选国家百千万人才工程第一、二层次人选，1999年入选教育部跨世纪优秀人才培养计划。\n'+'沈一栋教授主要研究数据挖掘 （如 Association, Classification, Clustering 和 Relational Data Mining）, 人工智能（如 Bayesian Networks 和 Logic Reasoning）以及逻辑程序设计的理论、方法、系统及应用。在软件形式化方面，探讨用逻辑程序理论进行模型验证。主持973、863以及国家自然科学基金等课题多项，在Artificial Intelligence、ACM Transactions on Computational Logic、IEEE Transactions on Data and Knowledge Engineering、Journal of Automated Reasoning、Theoretical Computer Science, Theory and Practice of Logic Programming等国际学术期刊以及AAAI、IJCAI、WWW等国际学术会议发表论文多篇。曾担任AAAI、IJCAI、KDD、KR、ISWC等重要国际学术会议程序委员会委员。'
      },
      {
        img:'',
        name: '高  阳',
        position:'教授',
        email: '暂无',
        introduction: '高阳教授，博导。1993年从大连理工大学本科毕业并获学士学位；1996年从南京理工大学硕士研究生毕业并获硕士学位；2000年3月从南京大学计算机科学与技术系博士研究生毕业，同年6月获博士学位。2000年4月至今，在南京大学计算机科学与技术系任教，目前任计算机系副主任，人工智能教研室（和实验室）副主任，是南京大学计算机科学与技术系国家自然科学基金创新群体成员，2006年当选为南京大学青年骨干教师，2008年当选为南京大学中青年学术带头人，2008年入选江苏省青蓝工程青年骨干教师培养计划，2009年入选江苏省“333高层次人才培养工程”第二批中青年科学技术带头人，2009年获江苏省“六大人才高峰计划”B类项目资助，2010年入选教育部新世纪优秀人才计划。2003年6月至9月赴香港大学进行访问研究，2004年12月赴澳大利亚西悉尼大学进行访问研究，2005年1月至2月赴香港浸会大学进行访问研究，2006年12月赴新西兰Massey大学进行访问研究。高阳博士从1997年开始从事大数据、人工智能、机器学习、多Agent系统、图像和视频分析等方向的学术研究。参加过多项国家、省部级科研项目的研究工作。作为第一负责人主持国家自然科学基金重点项目一项，国家自然科学基金面上项目三项，青年项目一项。主持科技部国际合作专项一项，江苏省自然科学基金重点项目（江苏省973项目）一项。参加国家重大科技专项核高基项目一项、国家973重点研究计划二项、国家杰出青年基金研究各一项。基于所研究成果，在国际杂志、国际会议和国内一级刊物上发表学术论文数100余篇。获授权专利10项，国际PCT专利1项。高阳博士目前担任中国计算机学会理事，中国计算机学会粗糙集与软计算专业组副主任，中国计算机学会机器学习专业组秘书长，中国计算机学会大数据专家委委员，中国计算机学会人工智能与模式识别专业组委员，中国计算机学会学术工委通讯委员，中国计算机学会南京分部学术工委主任，江苏省计算机学会人工智能专业组副主任，IEEE南京分部计算机分会秘书长，WIC中国区主席'
      },
      {
        img:'',
        name: '漆桂林',
        position:'教授',
        email: '暂无',
        introduction: '漆桂林教授是东南大学计算机与工程学院的教授，目前专注于人工智能、语义Web和知识图谱（分布式推理、本体演化，本体推理）、知识挖掘（信息抽取、知识库构建、知识库清理）、大数据（情感分析、事件抽取）。现任中国中文信息学会语言与知识计算专业组副主任、CCF中文信息技术专业组委员、中国计算机协会会员、ACM会员。\n' +
          '漆桂林教授长期从事人工智能、语义Web和知识工程方面的科学研究及教学工作。截至目前,已经发表高质量学术论文100篇多篇,特别是在国际人工智能著名会议IJCAI、AAAI、KR、UAI以及国际语义Web著名会议ISWC、ESWC发表多篇会议文章，在国际著名杂志Information Science和 Fuzzy Sets and Systems等发表多篇杂志文章。其中，一篇文章在亚洲语义Web会议上获得最佳论文提名奖。获得欧盟第七框架Marie Curie Actions— International Research Staff Exchange Scheme （IRSES）资助（漆桂林为其中一个workpackage的负责人）。获得多项国家自然科学基金资助，其中两项为项目负责人。2014年获得百度主题研究项目资助。作为主要参与人参加了863大数据“类人类智能”方向的课题。\n' +
          '漆桂林教授是语义Web最权威杂志Journal of Web Semantics的编委（该期刊中国大陆第二位编委），是 Journal of Advances in Artificial Intelligence的副主编，并且是国际著名人工智能杂志 Annals of mathematics and Artificial Intelligence, Journal of Applied Logic, International Journal of Approxiamte Reasoning的客座主编。漆桂林教授在多个重要的国际会议中组织关于本体推理和本体动态性的研讨会，这些国际会议包括：欧洲语义Web会议ESWC\'08、欧洲人工智能会议 ECAI\'08、国际人工智能会议IJCAI\'09、欧洲人工智能会议ECAI\'10和国际语义Web会议ISWC\'10。漆桂林是多个国际著名会议（AAAI2011-2012，ISWC2009-2011，IJCAI2009，KR2012等）的程序委员会成员，同时是多个国际杂志（Artificial Intelligence Journal等）的审稿人。\n' +
          '目前，漆桂林教授已经与华为、百度等公司，以及德国的Karlsruhe大学、Ulm大学、美国Wright State University、澳大利亚Griffith University、法国图卢兹第一大学建立合作关系，包括学生互访和申请一些联合项目。'
      },
      {
        img:'',
        name: 'KeWen Wang（王克文）',
        position:'教授',
        email: '暂无',
        introduction: 'Kewen Wang教授为澳大利亚格里菲斯大学（Griffith University, Australia）School of Information and Communication Technology终身教授。2002年加入澳大利亚格里菲斯大学。创建了AI and Semantic Technologies Lab （AIST）实验室，并担任负责人至今。\n' +
          'Kewen Wang教授现任澳大利亚格里菲斯大学Program Director of Higher Degree Research。Kewen Wang教授研究主要集中在知识表示与推理，描述逻辑与本体论，语义网，回答集逻辑程序设计。他的研究获得多项澳大利亚自然科学基金ARC的资助。Kewen Wang教授及他的团队在人工智能著名杂志《Artificial Intelligence》、《Journal of Artificial Intelligence Research》，以及人工智能顶级国际会议IJCAI，AAAI，KR发表了多篇有影响力的论文。'
      },
      {
        img:'',
        name: '冯志勇',
        position:'教授',
        email: '暂无',
        introduction: '冯志勇教授，中国计算机学会理事会理事，中国计算机学会高级会员，中国计算机学会教育专业组资深常务委员，中国计算机学会软件工程专业组委员，中国计算机学会服务计算专业组常务委员，ACM（Association for Computing Machinery）会员。主持国家、省部及横向科研项目十多项，发表学术论文130多篇。\n' +
          '1996年获天津大学博士学位，博士期间主要研究计算机集成制造系统及相关软件技术，作为核心成员参加了国家“863”项目、国家自然科学基金项目、天津市自然科学基金项目等多个科研项目。1999年起作为负责人主持了“中外建发展有限公司CIMS应用工程”项目的一、二期工程开发和实施（1999-2004），指导了公司ERP系统的实施和CAD系统的二次开发，负责开发了中外建发展股份有限公司售后服务系统、计算机辅助工艺规划系统、数控机床刀具管理信息系统等应用软件。2001年作为实际负责人参加了天津市科技攻关计划项目“通用CSCW应用系统开发平台与工具组件”的研究，开发了一套面向企业内部协同工作的组件系统和开发平台。2003-2006年，负责IBM国际合作项目“Rapid Development Tools for Agent Based Information Systems（基于Agent的信息系统快速开发工具）”研究，以及天津市重点科技攻关项目“面向企业信息集成的开发平台研究”，完成了一个轻量级多代理系统的设计，并在Eclipse平台上完成了基于自定义Agent模式语言（APL, Agent Pattern Language）的集成开发环境设计和开发，并基于该环境开发了一个供应链系统原型。自2003年开始，在本体论、语义网和Web Services等方面开展探索性研究，2005-2007年主持天津市自然科学基金重点项目“面向语义网的新型软件体系及平台的研究”，自行开发了本体整合工具、基于本体描述的常用算法库、本体检索工具，以及基于本体的汽车供应链管理系统等软件。在国家 863 计划的资助下，提出了以服务网络（SN） 为基础的面向解决方案的服务架构（SoSA），开发了相应的服务计算支撑环境——服务网络系统，并在华为公司“开放能力适配及Qos 管理”项目中得到应用。在国家基金项目的资助下，提出了基于限定的本体和规则统一推理框架，指导开发了一套基于Wiki和开放本体的大规模分布式知识查询系统——Jingwei。'
      },
      {
        img:'',
        name: '刘咏梅',
        position:'教授',
        email: '暂无',
        introduction: '刘咏梅教授是中山大学数据科学与计算机学院教授，计算机科学系系主任。2007年加拿大多伦多大学计算机科学系获博士学位。2008年加入中山大学任教授。创建中山大学LIC研究室，并担任负责人至今。\n' +
          '刘咏梅教授长期专注于研究人工智能、知识表示与推理、认知机器人学、程序的调试和验证。她的研究获得多项国家自然科学基金的资助。刘咏梅教授及他的团队在人工智能顶级国际会议IJCAI，AAAI，KR发表了多篇有影响力的论文。曾担任AAAI、IJCAI、KR等重要国际学术会议程序委员会委员。'
      },
      {
        img:'',
        name: 'JiaHuai You（犹嘉槐）',
        position:'教授',
        email: '暂无',
        introduction: '犹嘉槐（Jia-Huai You）教授为加拿大阿尔伯塔大学（University of Alberta, Canada）计算机系终身教授。1985年毕业于美国犹他大学（University of Utah），获得博士学位。最初在美国莱斯大学（Rice University）任教，之后加入加拿大阿尔伯塔大学。\n' +
          '犹嘉槐（Jia-Huai You）教授现任加拿大阿尔伯塔大学校长中国事务顾问，中国教育部特邀海外评审专家。犹教授曾是国际著名人工智能杂志《Journal of Artificial Intelligence Research》（JAIR）的编委。近年来，犹教授的研究主要集中在对回答集程序模式的扩展、研究与其他约束满足式编程的关系，研究回答集编程嵌入约束元子的语义等问题，以及在生物信息方面和在Abduction推理中的应用。以上主要结果发表在国际一流杂志或会议论文集中（如AIJ , ACM TOCL, IEEE TDKE, IJCAI, AAAI, KR等） 。其中在AAAI07 的论文（与中科院软件所沈一栋教授合作）被评为优秀论文（top 5%）；在IJCAI03 的论文（与香港科技大学林方真教授合作） 被选为fast track 论文 （top 2%），经扩展后应邀发表在人工智能著名杂志《Artificial Intelligence》。'
      },
      {
        img:'',
        name: '张明义',
        position:'教授',
        email: '暂无',
        introduction: '张明义教授是贵州科学院应用数学室任研究员，院学术委员会副主任。贵州大学计算机科学与信息学院兼职教授，博士生导师，计算机软件与理论博士点指导小组副组长。曾任中国计算机学会理事，中国计算机学会西南计算机分会副理事长。任贵州省计算机学会副理事长与贵州省计算机用户协会理事长至今。担任欧洲人工智能协会主办的国际学术刊物《AI communication》编委和《贵州科学》编委。2003年作为大陆学者首次聘为国际权威的人工智能学术会议ijcai2003的程序委员会委员。先后聘为国际学术会议LPNMR-01，ISFST （99-02）的程序委员会委员和ISFST -2000的大会组织委员会主席。先后获省科技进步奖（个人）二等一项，三等四项，四等一项；集体奖三等两项；国家教委科技进步三等奖一项（个人）。1989年评为《国家中青年有突出贡献专家》；1990年评为《贵州省有突出贡献的优秀专家》；1998-现在两次评为贵州省省管专家；1991年获首批政府特殊津贴（国务院颁发证书）；1988，1989年两次评为省劳动模范；1990当选贵州省第六次党代会代表。'
      },
      {
        img:'',
        name: 'Yan Zhang（张焰）',
        position:'教授',
        email: '暂无',
        introduction: '张焰（Yan Zhang）教授为澳大利亚西悉尼大学（University of Western Sydney, Australia）School of Computing, Engineering & Math终身教授。1994年毕业于澳大利亚悉尼大学（University of Sydney），获得博士学位。1995年加入澳大利亚西悉尼大学。创建了Intelligent Systems Laboratory （ISL）实验室，并担任负责人至今。\n' +
          '张焰（Yan Zhang）教授现任澳大利亚西悉尼大学 School of Computing, Engineering & Math负责科研院长。张焰（Yan Zhang）教授研究主要集中在知识表示与推理，模型检测与更新，信息安全。研究获得多项澳大利亚自然科学基金ARC的资助。近年他专注于研究一阶回答集逻辑程序。张焰（Yan Zhang）教授及他的团队在人工智能著名杂志《Artificial Intelligence》、《Journal of Artificial Intelligence Research》，以及人工智能顶级国际会议IJCAI，AAAI，KR发表了多篇有影响力的论文。'
      },
      {
        img:'',
        name: '林作铨',
        position:'教授',
        email: '暂无',
        introduction: '林作铨教授是北京大学信息科学系教授，博士生导师。曾为美国加州大学洛杉矶分校等大学访问学者。1999年国家杰出青年科学基金获得者，曾多次获得人才、教学和科研奖励。负责完成十几项国家科研项目，在学术刊物发表论文一百余篇。兼任多种学术和社会职务。\n' +
          '长期专注于研究人工智能，特别是知识表示，推理和智能的原理，以及在常识推理，本体，知识库，知识系统， 互联网，语义网，网络服务，算机软件，特别是程序与软件形式化，软件工程，中间件，网络信息系统，电子商务和网络安全等；数理逻辑，特别是计算机科学与人工智能中的逻辑学，包括非经典逻辑，计算逻辑，非单调逻辑，超协调逻辑， 描述逻辑和逻辑程序设计等。其它软件主体，机器人，语言理解，信息检索，程序设计和程序语言等的应用；计兴趣包括信息经济，信息管理，网络管理，管理软件，企业及信息化战略规划等。'
      },
      {
        img:'',
        name: '陈华钧',
        position:'教授',
        email: '暂无',
        introduction: '陈华钧，浙江大学计算机科学与技术学院教授、博导。主要研究方向为语义互联网、大数据、生物信息计算等。担任浙江省大数据智能计算重点实验室副主任、Elsevier Journal of Big Data Research执行副主编、中国中文信息学会语言与知识计算专家委员会副主任等。2000年获浙江大学生物工程学士学位，2004年获得浙江大学计算机科学与技术博士学位。2006年，2007年分别赴耶鲁大学、卡耐基梅隆大学访问深造。曾获国际语义互联网会议ISWC最佳论文奖。在Elsevier，Springer等出版社出版英文专著或编著3部。作为主要参与者，获得教育部技术发明一等奖、国家科技进步二等奖等奖励。曾创办国际语义技术联合会议JIST,担任IEEE/ACM CPSCom等多个学术会议或研讨会主席。'
      },
      {
        img:'',
        name: '朱其立',
        position:'教授',
        email: '暂无',
        introduction: '朱其立 (Kenny Q. Zhu) 是上海交通大学教授、博士生导师。他分别于1999 年和2005 年在新加坡国立大学(NUS)获得电子工程学士（荣誉）学位和计算机科学博士学位并获Dean’s Graduate Award。他于2005 年到2007 年在美国微软从事软件设计工程师工作。从2007 年到2009 年他在美国普林斯顿大学担任博士后研究员和讲师。2010年3 月至9 月他获得微软亚洲研究院铸星计划资助并以访问教授身份访问微软。2009年9月进入上海交通大学计算机系工作，2010年获聘特别研究员，2016年获聘教授。朱其立的研究方向是人工智能、数据库和程序语言。已在国际顶级会议及杂志上发表论文50余篇，被引用1200多次。他是著名国际会议WWW, CIKM, ECML, COLING, SAC, WAIM, APLAS and NDBC等的程序委员会委员，并且是著名国际期刊PVLDB, TKDE, IEEE Transactions on Vehicular Technology，Artificial Intelligence in Engineering等的评委。他的研究迄今为止已获得国家自然科学基金、教育部、微软、谷歌、甲骨文、摩根士丹利、阿斯利康等机构和企业的资金支持。朱其立是2013年度Google Faculty Research Award以及著名数据库国际会议DASFAA 2014 Best Paper Award的获得者。'
      }
    ],
    studyArea: '人工智能（Artificial Intelligence，AI）是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门科学。人工智能是计算机科学的一个分支，通过了解人类智能的实质，设计出一种新的能以人类智能相似的方式工作的智能机器。\n' +
      '人工智能的主要学派分为：符号主义（Symbolicism）、联结主义（Connectionism）和行为主义（Actionism）。人工智能领域的知识表示与推理（knowledge representation and reasoning，KR）研究方向致力于探索人类智能最为关键的问题，即如何显示地、精简地表示知识，研究人类智能如何机械地处理知识，从而高效地获取隐式表示的知识。知识表示与推理是人工智能传统研究领域，也是人工智能符号主义学派最主要的研究内容，为人工智能的许多研究领域奠定了重要的理论基础。\n' +
      '知识表示与推理研究内容包括：逻辑表示法、产生式表示法、语义网络表示法、框架表示法、本体表示法等。也为形式化方法、数据库技术、可满足性问题、约束可满足性问题的提供技术基础。目前知识表示与推理研究领域致力于将抽象模糊的术语（如知识、本体、表达能力）赋予具体和形式化语义的工作，在学习、决策和规划等语境下讨论知识表示和推理的工作。\n' +
      '近年来，随着大数据技术和机器学习技术逐步成熟，人工智能成为新的研究热点，有更多的研究人员和学生愿意从事本方向的研究，也为知识表示与推理研究带来了新的挑战和历史机遇。针对传统的以机器学习为基础的人工智能通常采用基于统计的方法，其计算结果常常是近似的、不可解释的，难以应用于精确求解、可解释和精确控制的领域，知识表示与推理研究将致力于将统计学习方法与符号表示推理相结合，研究知识表达精简、可高效且精确求解、求解结果具有可解释性、可应用于精确推理和控制领域的理论框架和高效算法。\n' +
      '前国内对人工智能领域的理解大多停留在机器学习，对于应用计算机来模拟人的某些更重要的思维过程和智能行为（如推理、思考、和规划等）涉及不多。知识表示与推理研究是人工智能领域的传统研究方向，可以吸引更多的研究人员和学生从事基础理论研究，并为从事人工智能的应用研究打下良好的基础。\n' +
      '拟申请的知识表示与推理专业组主要成员单位和研究人员从事知识表示与推理研究具有悠久的历史，自2010年就由香港科技大学林方真教授发起，每年都召集国际知识表示与推理华人学者召开International Chinese Scholar Workshop on Knowledge Representation and Reasoning学术会议。通过国际国内研究人员的学术交流，拟申请的知识表示与推理专业组成员单位取得过很好的研究成果，在每届人工智能国际顶级学术会议都有多篇论文发表，促进了学术交流，选送多名研究生出国交流学习，在国际学术界具有良好的学术影响力。',
    studyReward:[
      {
        name: '图灵奖',
        data: {
          intro: '由于知识表示与推理研究对象是计算机科学领域的基础问题，研究成果多次获得图灵奖（A.M. Turing Award），具体列举如下：',
          list: [
            '\t2007 Edmund M. Clarke、Allen Emerson和Joseph Sifakis：在将模型检查发展为被硬件和软件业中所广泛采纳的高效验证技术上的贡献。',
            '\t1996 Amir Pnueli：在计算科学中引入temporal逻辑以及对编程和系统认证方面的杰出贡献。',
            '\t1994 Edward Feigen baum、Raj Reddy：设计和建造的大规模人工智能系统，证明了人工智能技术的重要性和其潜在的商业价值。',
            '\t1975 Allen Newell、Herbert A. Simon：在人工智能、人类识别心理和表处理的基础贡献。',
            '\t1971 John McCarthy：对人工智能领域的贡献。',
            '\t1969 Marvin Minsky：人工智能理论及软件。'
          ]
        }
      },
      {
        name: 'IJCAI/AAAI',
        data: {
          intro:  '知识表示与推理研究领域最好的研究结果通常发表在AAAI：AAAI Conference on Artificial Intelligence、IJCAI：International Joint Conference on Artificial Intelligence、KR：International Conference on Principles of Knowledge Representation and Reasoning。\n' +
            'AAAI、IJCAI是全球从事人工智能研究盛会，知识表示与推理的研究人员近年获得了多项研究奖项（典型的如：Distinguished Paper Award、Award for Research Excellence），代表了国际人工智能研究对知识表示与推理研究结果的重视。具体列举近五年获奖情况如下：',
          list: [
            '\tIJCAI-2016 Distinguished Paper Award：Javier Segovia, Sergio Jimenez and Anders Jonsson. Hierarchical Finite State Controllers for Generalized Planning.',
            '\tIJCAI-2015 Distinguished Paper Award Honorable Mention：Pierre Bourhis, Markus Krötzsch, and Sebastian Rudolph. Reasonable Highly Expressive Query Languages',
            '\tAAAI-11 Outstanding Paper Awards: Complexity of and Algorithms for Borda Manipulation. Jessica Davies, George Katsirelos, Nina Narodytska, Toby Walsh.',
            '\tAAAI-11 Outstanding Paper Awards: Computational Sustainability and Artificial Intelligence Track: Dynamic Resource Allocation in Conservation Planning. Daniel Golovin, Andreas Krause, Beth Gardner, Sarah J. Converse, Steve Morey.',
            '\tAAAI-10 Outstanding Paper Awards: A Novel Transition Based Encoding Scheme for Planning as Satisfiability. Ruoyun Huang, Yixin Chen, Weixiong Zhang （Washington University in St. Louis）.',
            '\tIJCAI-13 Award for Research Excellence: Hector Levesque, Professor of Computer Science at the Department of Computer Science of the University of Toronto. Professor Levesque is recognized for his work on a variety of topics in knowledge representation and reasoning, including cognitive robotics, theories of belief, and tractable reasoning.'
          ]
        }
      }
    ],
    studyMeeting: {
      intro: '本专业组从2010年开始，每年都召集国际知识表示与推理华人学者召开International Chinese Scholar Workshop on Knowledge Representation and Reasoning学术会议。至2016年共召开了5届。每次学术会议都报告本领域最新研究成果，这些成果在后续的IJCAI、AAAI发表。以下是这5届学术会议召开大致情况：',
      list: [
        '\t第1届：贵阳，贵州科学院、贵州大学，2010年8月22-28日',
        '\t第2届：贵阳，贵州科学院、贵州大学，2012年6月16-22日',
        '\t第3届：天津，天津大学，2013年8月19-21日',
        '\t第4届：广州，华南师范大学、中山大学，2015年1月4-8日',
        '\t第5届：桂林，桂林电子科技大学，2016年5月29-30日',
        '\t第6届：湖州，湖州师范学院，2017年6月17-20日',
        '\t第7届：重庆，西南大学，2018年6月23-27日（筹备）'
      ]
    },
    insitute: {
      intro: '中山大学是位于广东省的综合性大学，主校区位于广州市海珠区康乐园，医学部位于广州市越秀区（原东山区），另有广州大学城校区和珠海校区，此外，在广州市和其他一些省市还设有附属医院、研究机构和独立学院。中山大学是教育部直属重点大学高校，并位列985工程和211工程之中。',
      list: [
        {
          name: '中山大学数据科学与计算机学院',
          detail: '中山大学数据科学与计算机学院成立于2015年6月，由学校整合原信息科学与技术学院计算机科学系、软件学院、超级计算学院以及数学与计算科学学院计算数学方向（部分人员）等计算机相关专业的优势资源组建。学院将坚持面向学术前沿、坚持面向国家重大战略需求、坚持面向国家和区域经济社会发展，贯彻“理工结合，学科交叉”的发展战略，按照学校 “大平台、大团队、大项目”的部署，推动学术和科研的发展；围绕“德才兼备、领袖气质、家国情怀”的人才培养目标，致力于培养具有国际视野的应用型、复合型、创新型的高素质计算机人才和计算与数据分析处理人才。\n' +
            '  学院师资雄厚，现有在编教师83人，其中教授28人，副教授35人，高级讲师3人，讲师17人。其中包括中组部“千人计划”引进人才3名,教育部“长江学者”特聘教授1名，教育部“长江学者”讲座教授1名，国家杰出青年基金项目获得者2名, “中组部青年千人计划”引进人才1名，国家优秀青年基金项目获得者1名,教育部新世纪优秀人才4名。\n' +
            '学院具有本—硕—博完整的人才培养体系。现有计算机科学与技术博士后流动站。招收、培养研究生和本科生的学科专业包括：计算机科学与技术、软件工程等博士学位授权一级学科；计算数学博士点（同数学与计算科学学院共建）；计算机科学与技术、软件工程等硕士学位授权一级学科；计算数学硕士点（同数学与计算科学学院共建）；计算机技术、软件工程等工程硕士专业学位授权点；计算机科学与技术、网络工程、信息安全、信息与计算科学等本科专业。'
        },
        {
          name: '中山大学逻辑与认知研究所',
          detail: '中山大学逻辑与认知研究所成立于1997年。2000年，被列为教育部人文社会科学重点研究基地。该所实行“所长负责制”，所长为鞠实儿教授，副所长为梁庆寅教授、熊明辉教授。学术委员会主席为中国社会科学院张家龙教授。1998年获逻辑学博士学位授予权，1999年本学科点成为广东省重点学科，2002年被列为全国重点学科。在2004年教育部基地评估中，中山大学逻辑与认知研究所以“优秀”通过了评估。通过近7年的建设，中山大学逻辑与认知研究所已成为我国逻辑学科的科学研究、人才培养、资料信息、国内外学术交流、咨询服务和深化逻辑学科研体制改革的窗口。该所注重传统逻辑与现代逻辑结合、逻辑与认知结合、文理两条腿走路相结合、逻辑理论与逻辑应用相结合，面向国际前沿，勇于探索创新，成为全国逻辑学科建设和发展的一个模式，在国内哲学界享有很高的学术声望，并在国际同类领域具有一定的影响力。'
        }
      ]
    }
  }
});
