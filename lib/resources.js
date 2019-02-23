'use strict';


exports.categories = {
    '书籍': {
        'Developing a hapi Edge': {
            url: 'http://www.amazon.com/Developing-hapi-Edge-Framework-Services-ebook/dp/B013CWI3MY',
            description: '这本书向您展示了如何使用 hapi 服务和应用程序框架构建企业质量的 web 应用程序。通过浏览真实 web 应用程序 hapi-plugins.com 的创建过程，您将了解如何配置和启动 hapi、构建 api、执行身份验证、验证、缓存等等。您还将发现在生产 hapi 部署中使用的有关插件、测试、调试和安全性的提示和技巧。hapi 是在沃尔玛内部开发并使用的，在一年中电子商务网站最关键的日子——黑色星期五，它经受了考验。它已经证明自己不仅可以轻松处理极高的生产负载，而且工作起来也很愉快。该框架的目标是解决在其他已经建立的框架中存在的缺陷，而且它已经成功地做到了这一点。'
        },
        'Getting Started with hapi.js': {
            url: 'https://www.packtpub.com/web-development/getting-started-hapijs',
            description: '本书介绍了 hapi.js ，并使用 hapi.js 提供的开箱即用功能来创建您的第一个工作应用程序。本书包含了实际问题和示例，涵盖了 hapi.js 和 Node.js 的一些基本概念，并带您了解开发应用程序时将面临的典型过程。从更简单的概念开始，例如路由请求，构建服务于 JSON 的 API ，使用模板构建网站和应用程序，以及连接数据库，然后我们继续讨论更复杂的问题，例如身份验证，模型验证，缓存以及构建代码库的技术优雅地扩大规模。您还将开发技能，通过测试，代码覆盖和日志记录确保应用程序的可靠性。在本书的最后，您将掌握构建第一个功能齐全的应用程序所需的所有技能。如果您正在研究 Node.js 框架或计划在下一个项目中使用 hapi.js ，那么这本书将是非常宝贵的。'
        },
        'hapi.js in Action': {
            url: 'http://manning.com/harrison',
            description: '本书提供了许多示例，从您的第一个简单服务器开始，介绍了构建完整应用程序所需的技能。在本文中，您将学习如何构建网站和 api 、实现缓存、身份验证、验证、错误处理等等。您还将探索生产应用程序的关键技术，如测试、监视、部署和文档。'
        },
        'hapi with Typescript': {
            url: 'http://hapibook.jjude.com',
            description: '本书将 Typescript 引入到使用 hapi 开发 web 应用程序中。Typescript 是微软开发的一种语言，它给 Javascript 带来了强类型和面向对象编程的好处。通过大量的代码示例，这本书教会了用 Typescript 在 hapi 中开发 web 应用程序的各个方面。它还介绍了 hapidock ，这是一个 docker 容器，具有在 hapi 中开发所需的所有组件。使用 hapidock ，您可以在类似生产的环境中开发和测试 hapi 应用程序。通过这本书，您将了解如何构建稳定的企业级服务器应用程序。这本书可以在 http://hapibook.jjude.com 上免费阅读。电子图书( pdf 、 mobi 和 epub )和完全可执行的代码示例可以在购买后获得。'
        }
    },
    '要点和代码示例': {
        'Code style tips': {
            url: 'https://gist.github.com/hueniverse/a06f6315ea736ed1b46d',
            description: '简单的 node.js 代码风格提示，提高代码质量'
        },
        'rate-limiter-flexible-plugin-example': {
            url: 'https://github.com/animir/node-rate-limiter-flexible/wiki/Hapi-plugin',
            description: '带有速率限制器 - 灵活包的速率限制和 DDoS 保护的插件示例'
        },
        'Walmart Mobile node.js setup': {
            url: 'https://gist.github.com/hueniverse/7686452',
            description: '深入了解如何在沃尔玛使用 hapi.js'
        }
    },
    Boilerplates: {
        appy: {
            url: 'https://github.com/JKHeadley/appy',
            description: '利用 rest-hapi 引导应用程序的用户系统。'
        },
        aqua: {
            url: 'https://github.com/jedireza/aqua',
            description: '网站和用户系统。 使用 React 和 Flux 实现。'
        },
        frame: {
            url: 'https://github.com/jedireza/frame',
            description: '用户系统 API 。 带上你自己的前端。'
        },
        'generator-hapi-service': {
            url: 'https://github.com/normative/generator-hapi-service',
            description: '用于 hapi Web 服务的 Yeoman 生成器。'
        },
        'generator-hapi-style': {
            url: 'https://github.com/jedireza/generator-hapi-style',
            description: 'Yeoman 生成器用于脚手架 hapi 应用程序和插件。'
        },
        'hanx.js': {
            url: 'https://github.com/youhusam/hanx.js',
            description: '带有 Node.js ， hapi ， PostgreSQL 和 AngularJS （ MEAN.js 端口）的全栈样板'
        },
        'hapi-angular-quickstart': {
            url: 'https://github.com/ptpaterson/hapi-angular-quickstart',
            description: 'Angular2 快速启动的例子包装成一个 Hapi 插件。'
        },
        'hapi-api': {
            url: 'https://github.com/rjmreis/hapi-api',
            description: '精益的 hapi API 样板，对项目结构有自己的看法'
        },
        'hapi-cli': {
            url: 'https://github.com/AMoreaux/hapi-cli',
            description: 'hapi 与 mongodb, mongoose 的样板。与 Hapi V17 一起工作.'
        },
        'hapi-dash': {
            url: 'https://github.com/smaxwellstewart/hapi-dash',
            description: '带有前端仪表板的样板 hapi Web 和 API 服务器示例'
        },
        'hapi-moon': {
            url: 'https://github.com/metoikos/hapi-moon',
            description: '固执己见的 hapi.js (V >= 17) 服务器样板'
        },
        'hapi-ninja': {
            url: 'https://github.com/poeticninja/hapi-ninja',
            description: 'hapi 服务器示例的样板。 Node.js ，hapi 和 Swig 。'
        },
        'hapi-react-starter-kit': {
            url: 'https://github.com/Dindaleon/hapi-react-starter-kit',
            description: '一个 hapi React Starter 套件，带有 react-router ，redux ， react-transform 。'
        },
        'hapi-starter-kit': {
            url: 'https://github.com/Codigami/hapi-starter-kit',
            description: '基于 Hapi.js 的 REST 样板，它使用最新的 ES7 / ES8 功能（异步/等待）和代码覆盖率，并遵循最佳实践'
        },
        'hapi-struct': {
            url: 'https://github.com/MarcHanin/hapi-struct',
            description: '具有用户身份验证的简单 Hapi 服务器样板（ MongoDB ）'
        },
        'hapitodo': {
            url: 'https://github.com/genediazjr/hapitodo',
            description: '一个带有 Hapi 后端的 TodoMVC jQuery 前端。'
        },
        jolly :{
            url : 'https://github.com/ravisuhag/jolly',
            description : 'hapi.js 的生产就绪样板'
        },
        mullet: {
            url: 'https://github.com/lynnaloo/mullet',
            description: '带有 Facebook 和 React 的 hapi 服务器样板'
        },
        'the pal boilerplate': {
            url: 'https://github.com/hapipal/boilerplate',
            description: '一个友好的，经过验证的下一个 hapi 插件或部署的起点'
        },
        'rest-hapi': {
            url: 'https://github.com/JKHeadley/rest-hapi',
            description: '围绕 hapi 框架和 mongoose ODM.t 构建的 RESTful API 生成器'
        },
        rutha: {
            url: 'https://github.com/molekilla/rutha',
            description: 'hapi （ server ，api ）和 Angular （客户端）的前端堆栈'
        },
        'snowflake-hapi-openshift': {
            url: 'https://github.com/bartonhammond/snowflake-hapi-openshift',
            description: '在 MongoDB 和 Redis 支持的 OpenShift / local 上运行的 Hapi 服务器 - 使用 BlazeMeter 和 JMeter 测试性能'
        },
        'start-hapiness': {
            url: 'https://github.com/thebergamo/start-hapiness',
            description: '帮助您使用 Hapi + MongoDB 快速创建项目的样板'
        },
        'testing-hapi': {
            url: 'https://github.com/pashariger/testing-hapi',
            description: '带有 Swagger 文档，测试和 Travis CI 的 Hapi API 服务器'
        },
        'typehapily': {
            url: 'https://github.com/tejzpr/typehapily',
            description: '一个基于 Typescript 的带有 TypeORM 和动态 Linting 的 HAPIJS 样板'
        }
    },
    '使用 hapi.js 构建的项目': {
        'Colonizers': {
            url: 'https://github.com/colonizers/colonizers',
            description: '一款 HTML5 多人游戏，基于 Klaus Teuber 的热门桌面游戏《 Catan 》。'
        },
        'MasteryJS': {
            url: 'https://github.com/labibramadhan/mastery',
            description: '可扩展的 API 服务器框架构建于 Hapi 和 Sequelize 之上。'
        },
        'Paydash': {
            url: 'https://github.com/hks-epod/paydash',
            description: '印度的就业保障计划 MGNREGA 的员工薪酬仪表盘。'
        },
        'Postmile': {
            url: 'https://github.com/hueniverse/postmile',
            description: 'Postmile是一个使用 hapi.js ， Node.js 和 MongoDB 构建的协作列表制作工具。'
        }
    },
    '教程': {
        'Authentication and Authorization with hapi': {
            url: 'https://medium.com/@poeticninja/authentication-and-authorization-with-hapi-5529b5ecc8ec',
            description: '关于如何保护 hapi 应用程序的文章。'
        },
        'Build a RESTful API using hapi.js and MongoDB': {
            url: 'http://mph-web.de/build-a-restful-api-using-hapi-js-and-mongodb/',
            description: '关于如何使用 mongojs 模块创建一个使用MongoDB 作为数据库的基本 RESTful API 的教程。'
        },
        'Building a Chat Application with hapi.js, Socket.io and Redis': {
            url: 'https://github.com/dwyl/hapi-socketio-redis-chat-example',
            description: '使用 hapi.js ， Socket.io 和 Redis Pub / Sub 构建的实时聊天应用程序，具有端到端测试。'
        },
        'Handling plugin dependencies': {
            url: 'https://hapipal.com/best-practices/handling-plugin-dependencies',
            description: '为了庆祝 hapi 插件边界，我们在这里提供了一种驯服插件间依赖关系的具体方法。'
        },
        'hapi tutorial series (30+ tutorials)': {
            url: 'https://futurestud.io/tutorials/hapi-get-your-server-up-and-running',
            description: '这篇关于 hapi 的深入教程系列涵盖了路由设置，身份验证，插件，请求和响应处理等等。'
        },
        'hapi.js tutorials covering various topics': {
            url: 'https://content.nanobox.io/tag/hapi.js/',
            description: '越来越多的教程包括 hapi.js 应用程序开发，部署，优化和生产管理（扩展，监控等）。'
        },
        'How to create a REST API with hapi': {
            url: 'http://blog.webkid.io/how-to-create-a-rest-api-with-hapi/',
            description: '关于如何使用 Dogwater ( Waterline ORM )和 Bedwetter 插件创建 RESTful API 的教程。'
        },
        'The joys of server / plugin separation': {
            url: 'https://hapipal.com/best-practices/server-plugin-separation',
            description: '将应用程序插件与其部署分离的快乐行为将使您的 hapi 应用程序更加便携，更易于测试。'
        },
        'Realtime timeline with hapi.js, nes and RethinkDB': {
            url: 'http://mph-web.de/realtime-timeline-with-hapi-js-nes-and-rethinkdb/',
            description: '本教程展示了如何使用 hapi 的 nes 插件构建实时时间轴。'
        },
        'Run hapi.js on Google Cloud Platform': {
            url: 'https://cloud.google.com/nodejs/resources/frameworks/hapi',
            description: '教程和可复制的示例应用程序，展示了如何在 Google App Engine 上创建和部署 hapi.js 应用程序。'
        },
        'Social Login with Twitter using hapi.js': {
            url: 'http://mph-web.de/social-signup-with-twitter-using-hapi-js/',
            description: '使用 bell 插件和 hapi-auth-cookie 在 Twitter 上进行身份验证的 Playground 项目。'
        },
        'Using hapi.js with Socket.io': {
            url: 'http://matt-harrison.com/using-hapi-js-with-socket-io/',
            description: '关于如何将 Socket.io 与 hapi.js 集成的教程'
        }
    },
    '视频': {
        'Hapi Days Conf 2014 Videos': {
            url: 'https://www.youtube.com/playlist?list=PLzc1AUDlJ7WvcMnv3NaEwgh0i2nJKl0GX',
            description: 'hapi days 是一个为期一天的会议，专注于 hapi 和使用它的人。'
        },
        'Nodevember Conf 2014 hapi.js Workshop': {
            url: 'https://www.youtube.com/watch?v=TEKFocYepFY',
            description: '来自 Stratch 教程的 hapi 教程由 Nodevember 的 Ben Acker 和 Wyatt Preul 撰写。'
        }
    }
};
