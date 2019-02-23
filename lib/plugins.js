'use strict';


exports.categories = {
    '授权': {
        'hapi-acl-auth': {
            url: 'https://github.com/charlesread/hapi-acl-auth',
            description: 'hapi 应用程序的身份验证，提供程序无关的授权插件'
        },
        'hapi-authorization': {
            url: 'https://github.com/toymachiner62/hapi-authorization',
            description: 'ACL 支持 hapi 应用程序'
        },
        'hapi-auth-ip-whitelist': {
            url: 'https://github.com/chamini2/hapi-auth-ip-whitelist',
            description: 'IP 白名单身份验证方案'
        },
        'hapi-rbac': {
            url: 'https://github.com/franciscogouveia/hapi-rbac',
            description: '用于 hapi 的基于规则的访问控制模块'
        },
        'hapi-view-models': {
            url: 'https://github.com/beyonk-adventures/hapi-view-models',
            description: '根据 credentials/roles 过滤响应有效负载'
        }
    },
    '认证': {
        bell: {
            url: 'https://github.com/hapijs/bell',
            description: '适用于 hapi 的第三方登录插件，内置 Facebook，GitHub，Google，Instagram，LinkedIn，Twitter，Yahoo，Foursquare，VK，ArcGIS Online 和 Windows Live 支持'
        },
        'hapi-auth-anonymous': {
            url: 'https://github.com/codedoctor/hapi-auth-anonymous',
            description: '支持匿名移动用户的身份验证策略'
        },
        'hapi-auth-basic': {
            url: 'https://github.com/hapijs/hapi-auth-basic',
            description: 'HTTP 基本身份验证方案'
        },
        'hapi-auth-bearer-simple': {
            url: 'https://github.com/Salesflare/hapi-auth-bearer-simple',
            description: '一种基于 bearer token 的简单认证方案'
        },
        'hapi-auth-bearer-token': {
            url: 'https://github.com/johnbrett/hapi-auth-bearer-token',
            description: '基于 bearer token 的认证方案'
        },
        'hapi-auth-cookie': {
            url: 'https://github.com/hapijs/hapi-auth-cookie',
            description: '基于 cookie 的会话认证方案'
        },
        'hapi-auth-extra': {
            url: 'https://github.com/asafdav/hapi-auth-extra',
            description: '适用于 HapiJS 的附加 auth 工具箱，包括 ACL 支持'
        },
        'hapi-auth-firebase': {
            url: 'https://github.com/dsdenes/hapi-auth-firebase',
            description: 'Firebase 身份验证插件'
        },
        'hapi-auth-hawk': {
            url: 'https://github.com/hapijs/hapi-auth-hawk',
            description: 'Hawk 身份验证插件'
        },
        'hapi-auth-jwt': {
            url: 'https://github.com/ryanfitz/hapi-auth-jwt',
            description: 'JSON Web Token (JWT) 身份验证插件'
        },
        'hapi-auth-jwt2': {
            url: 'https://www.npmjs.com/package/hapi-auth-jwt2',
            description: '简化的 JSON Web Token (JWT) 身份验证插件'
        },
        'hapi-jsonwebtoken': {
            url: 'https://github.com/odorisioe/hapi-jsonwebtoken',
            description: '带有身份验证插件的 Hapi.js v17+ 的 JsonWebToken 实现'
        },
        'hapi-auth-keycloak': {
            url: 'https://github.com/felixheck/hapi-auth-keycloak',
            description: '基于 JSON Web Token 的身份验证由 Keycloak 提供支持'
        },
        'hapi-auth-opentoken': {
            url: 'https://github.com/carbonrobot/hapi-auth-opentoken',
            description: 'Opentoken 身份验证插件'
        },
        'hapi-auth-signature': {
            url: 'https://github.com/58bits/hapi-auth-signature',
            description: '签名认证插件 - Joyent http 签名方案的包装器'
        },
        'hapi-now-auth': {
            url: 'https://github.com/puchesjr/hapi-now-auth',
            description: '用于简化 JSON Web Token (JWT) and Bearer auth tokens 的 Hapi v17 +插件'
        },
        'hapi-openid-connect': {
            url: 'https://github.com/gaaiatinc/hapi-openid-connect',
            description: '实现 OpenID-Connect 授权流程的 Hapi 插件'
        },
        'hapi-passport-saml': {
            url: 'https://github.com/molekilla/hapi-passport-saml',
            description: '一个 Hapi 插件，包含 SAML SSO 的 passport-saml'
        },
        'hapi-session-mongo': {
            url: 'https://github.com/Mkoopajr/hapi-session-mongo',
            description: 'MongoDB 会话存储和身份验证插件'
        },
        'hapi-tiny-auth': {
            url: 'https://github.com/elnaz/hapi-tiny-auth',
            description: '足够的身份验证使 API 成为私有'
        }
    },
    '文档': {
        'hapi-ending': {
            url: 'https://github.com/desirable-objects/hapi-ending.git',
            description: '一个简化的可浏览 api 文档生成器'
        },
        'hapi-swagger': {
            url: 'https://github.com/glennjones/hapi-swagger',
            description: 'hapi 的 swagger 文档 UI 生成器插件'
        },
        'hapi-swagger-models': {
            url: 'https://github.com/codeandfury/node-hapi-swagger-models',
            description: '从 swagger API 生成 Backbone 模型'
        },
        'hapi-swaggered': {
            url: 'https://github.com/z0mt3c/hapi-swaggered',
            description: '一个基于 hapi 路由和 joi 模式生成 swagger v2.0 兼容规范的插件'
        },
        'hapi-swaggered-ui': {
            url: 'https://github.com/z0mt3c/hapi-swaggered-ui',
            description: '一个服务和配置 swagger-ui 的插件'
        },
        lout: {
            url: 'https://github.com/hapijs/lout',
            description: '一个可浏览的文档生成器'
        }
    },
    '编码': {
        brok: {
            url: 'https://github.com/kanongil/brok',
            description: 'Brotli 编码器和解码器'
        }
    },
    '本地化/国际化': {
        'hapi-i18n': {
            url: 'https://github.com/codeva/hapi-i18n',
            description: '基于 mashpie 的 i18n 模块的 hapi 翻译模块'
        },
        'hapi-l10n-gettext': {
            url: 'https://github.com/maxnachlinger/hapi-l10n-gettext',
            description: 'HapiJS 的本地化插件'
        },
        'hapi-accept-language': {
            url: 'https://github.com/opentable/hapi-accept-language',
            description: '简单的 accept-language header 解析'
        },
        'hapi-locale': {
            url: 'https://github.com/ozum/hapi-locale',
            description: '可配置的插件，用于从 URL, Cookie, Query and Header 确定请求语言'
        }
    },
    '日志记录/指标': {
        'airbrake-hapi': {
            url: 'https://github.com/Wayfarer247/airbrake-hapi',
            description: '将内部服务器错误发送到 Airbrake.io'
        },
        blipp: {
            url: 'https://github.com/danielb2/blipp',
            description: '在启动时显示路由表'
        },
        epimetheus: {
            url: 'https://github.com/roylines/node-epimetheus',
            description: 'prometheus.io 监控解决方案的关键指标检测'
        },
        good: {
            url: 'https://github.com/hapijs/good',
            description: '一个日志插件，支持输出到控制台，文件和 udp/http 端点'
        },
        'good-influx': {
            url: 'https://github.com/fhemberger/good-influx',
            description: 'InfluxDB 广播用于良好的过程监控'
        },
        'good-logstash': {
            url: 'https://github.com/fhemberger/good-logstash',
            description: 'Logstash 用于良好进程监视器的 TCP/UDP 广播'
        },
        'good-kinesis-reporter': {
            url: 'https://github.com/vvondra/good-kinesis-reporter',
            description: 'AWS Kinesis 和 AWS Kinesis Firehose 的好记者'
        },
        'hapi-good-winston': {
            url: 'https://github.com/alexandrebodin/hapi-good-winston',
            description: 'Winston 记录好的过程监控器'
        },
        'hapi-graylog': {
            url: 'https://github.com/ubirajaramneto/hapi-graylog',
            description: 'hapi.js 的简单 graylog 界面'
        },
        'hapi-statsd': {
            url: 'https://github.com/mac-/hapi-statsd',
            description: '向 statsd 发送请求往返指标'
        },
        'hapi-plugin-traffic': {
            url: 'https://github.com/rse/hapi-plugin-traffic',
            description: '网络流量统计'
        },
        'hapi-alive': {
            url: 'https://github.com/idosh/hapi-alive',
            description: '您的 hapi.js 服务器的运行状况路由'
        },
        'hapi-pino': {
            url: 'https://github.com/mcollina/hapi-pino',
            description: '快速简单的 JSON 记录器'
        },
        'hapi-rollbar': {
            url: 'https://github.com/danecando/hapi-rollbar',
            description: 'Hapi 插件，用于精彩的 Rollbar 日志记录服务'
        },
        'hapijs-status-monitor':{
            url:'https://github.com/ziyasal/hapijs-status-monitor',
            description:'针对 Hapi.js 应用程序的实时监控解决方案，受 GitHub Status 的启发'
        },
        'laabr':{
            url:'https://github.com/felixheck/laabr',
            description:'hapi.js 的格式良好的 pino 记录器 - 灵感来自 morgan'
        },
        'opbeat':{
            url:'https://github.com/opbeat/opbeat-node',
            description:'性能监控和错误跟踪 - 为 Hapi.js 应用程序量身定制'
        }
    },
    '消息': {
        'hapi-rabbit': {
            url: 'https://github.com/aduis/hapi-rabbit',
            description: '一个简单的用于 hapi 的 rabbitMQ 集成插件'
        },
        'hapi-plugin-websocket': {
            url: 'https://github.com/rse/hapi-plugin-websocket',
            description: '通过将 WebSocket 消息作为 HTTP 请求注入，实现无缝 WebSocket 集成'
        },
        multines: {
            url: 'https://github.com/mcollina/multines',
            description: '支持 nes 的多进程发布/订阅'
        },
        susie: {
            url: 'https://github.com/mtharrison/susie',
            description: 'hapi 的服务器发送事件，支持流事件'
        },
        'hapi-wechat': {
            url: 'https://github.com/dhso/hapi-wechat',
            description: 'hapi 的微信插件'
        }
    },
    '安全': {
        blankie: {
            url: 'https://github.com/nlf/blankie',
            description: '一个使 Content-Security-Policy headers 易于使用的插件'
        },
        crumb: {
            url: 'https://github.com/hapijs/crumb',
            description: 'CSRF crumb 生成和 hapi 验证'
        },
        'hapi-api-secret-key': {
            url: 'https://github.com/justin-lovell/hapi-api-secret-key',
            description: '通过仅允许使用秘密令牌进行显式访问来保护您的微服务 API。 非常适合代理或 API 管理网关'
        },
        'ralphi': {
            url: 'https://github.com/yonjah/ralphi',
            description: '简单而最小的速率限制和强力保护'
        }
    },
    'Session': {
        'hapi-server-session': {
            url: 'https://github.com/btmorex/hapi-server-session',
            description: 'hapi 的简单服务器端 session 支持'
        },
        yar: {
            url: 'https://github.com/hapijs/yar',
            description: 'hapi session 插件和 cookie jar'
        }
    },
    '模板': {
        'hapi-dust': {
            url: 'https://github.com/mikefrey/hapi-dust',
            description: 'dust.js 的兼容性包装'
        },
        'hapi-react': {
            url: 'https://github.com/landau/hapi-react',
            description: 'express-react-views 的端口'
        },
        'hapi-react-views': {
            url: 'https://github.com/jedireza/hapi-react-views',
            description: 'React 组件的 hapi 视图引擎'
        },
        'hapi-themes': {
            url: 'https://github.com/carbonrobot/hapi-themes',
            description: '用于提供主题或白标签内容的 hapi 视图处理程序'
        },
        'hapi-consolidate': {
            url: 'https://github.com/Okoyl/hapi-consolidate',
            description: 'Hapi 模板渲染使用合并'
        },
        '@tanepiper/quorra': {
            url: 'https://github.com/tanepiper/quorra',
            description: 'Hapi 路由处理程序，使 react-router 成为您的同构服务器端路由器'
        }
    },
    '实用程序': {
        'acquaint': {
            url: 'https://github.com/genediazjr/acquaint',
            description: '通过 glob 模式自动加载路由，处理程序和方法'
        },
        'admin-bro-hapijs': {
            url: 'https://github.com/SoftwareBrothers/admin-bro-hapijs',
            description: 'AdminBro - 管理面板集成到您的 hapijs 路线'
        },
        akaya: {
            url: 'https://github.com/felixheck/akaya',
            description: '根据命名 hapi 路由其参数快速生成 URI'
        },
        bassmaster: {
            url: 'https://github.com/hapijs/bassmaster',
            description: '批处理端点可以轻松地将多个请求合并为一个请求'
        },
        bedwetter: {
            url: 'https://github.com/devinivy/bedwetter',
            description: '用于 hapi 中 Waterline 模型的自动生成的 CRUDdy 路径处理程序'
        },
        bissle: {
            url: 'https://github.com/felixheck/bissle',
            description: 'HapiJS 的极简主义 HALicious 分页回复界面'
        },
        configue: {
            url: 'https://github.com/AdrieanKhisbe/configue',
            description: 'Hapi 的配置插件'
        },
        cron: {
            url: 'https://github.com/antonsamper/hapi-cron',
            description: '内部 hapi.js 路由的 Cron 作业'
        },
        'cron-cluster': {
            url: 'https://github.com/Meg4mi/hapi-cron-cluster',
            description: '内部 hapi.js 路由的 Cron 作业与 leader election（mongodb或redis） - 集群模式'
        },
        crudy: {
            url : 'https://github.com/g-div/crudy',
            description: '使用 Dogwater 模型和 Bedwetter 的路由处理程序公开 RESTful CRUD 界面'
        },
        'disinfect': {
            url: 'https://github.com/genediazjr/disinfect',
            description: '请求 query, payload, 和 params 清理'
        },
        dogwater: {
            url: 'https://github.com/devinivy/dogwater',
            description: '一个集成 Waterline ORM 的 hapi 插件'
        },
        errorh: {
            url: 'https://github.com/genediazjr/errorh',
            description: '自定义错误页面'
        },
        glee: {
            url: 'https://github.com/nathanbuchar/hapi-glee',
            description: '为路由指定特定于环境的范围'
        },
        'hapi-arch': {
            url: 'https://github.com/AhmedAli7O1/hapi-arch',
            description: 'Hapi 插件，使用 cli 工具生成 MVC hapi 项目并自动加载几乎所有内容'
        },
        halacious: {
            url: 'https://github.com/bleupen/halacious',
            description: '用于 hapi 服务器的 HAL 处理器'
        },
        'hapi-algolia-search': {
            url: 'https://github.com/sigfox/hapi-algolia-search',
            description: 'hapi 插件集成 Algolia Search（搜索引擎即服务）'
        },
        'hapi-api-version': {
            url: 'https://github.com/p-meier/hapi-api-version',
            description: 'hapi 的 API 版本控制插件。'
        },
        'hapi-assets': {
            url: 'https://github.com/poeticninja/hapi-assets',
            description: '根据 node 环境在视图中加载资源'
        },
        'hapi-async-handler': {
            url: 'https://github.com/ide/hapi-async-handler',
            description: '使用 ES7 异步功能和 generator 生成器功能作为 hapi 路由处理程序'
        },
        'hapi-attempts-limiter': {
            url: 'https://github.com/acavestro/hapi-attempts-limiter',
            description: '一个 hapi.js 插件，用于限制每条路由的失败尝试次数'
        },
        'hapi-auto-route': {
            url: 'https://github.com/sitrakay/hapi-auto-route',
            description: '从目录中自动加载路由对象'
        },
        'hapi-aws': {
            url: 'https://github.com/ar4mirez/hapi-aws',
            description: '适用于 AWS 服务的 HapiJS 插件。'
        },
        'hapi-bookshelf-models': {
            url: 'https://github.com/lob/hapi-bookshelf-models',
            description: '加载，注册和公开 Bookshelf.js 模型'
        },
        'hapi-bookshelf-serializer': {
            url: 'https://github.com/lob/hapi-bookshelf-serializer',
            description: '序列化通过 Hapi 回复发送的 Bookshelf.js 模型'
        },
        'hapi-bookshelf-total-count': {
            url: 'https://github.com/lob/hapi-bookshelf-total-count',
            description: '计算并附加与查询匹配的 Bookshelf 模型实例的总数'
        },
        'hapi-boom-decorators': {
            url: 'https://github.com/brainsiq/hapi-boom-decorators',
            description: '通过 hapi 回复界面暴露出 boom 错误'
        },
        'hapi-cache-buster': {
            url: 'https://github.com/poeticninja/hapi-cache-buster',
            description: '浏览器资源缓存破坏者'
        },
        'hapi-decorators': {
            url: 'https://github.com/knownasilya/hapi-decorators',
            description: 'HapiJS 路线的装饰器'
        },
        'hapi-default-payload': {
            url: 'https://github.com/lob/hapi-default-payload',
            description: 'Hapi 插件将请求 payload 默认为空对象'
        },
        'hapi-dev-errors': {
            url: 'https://github.com/fs-opensource/hapi-dev-errors',
            description: '在开发过程中获取更好的错误详细信息，并跳过命令行往返以解决问题'
        },
        'hapi-dropbox-webhooks': {
            url: 'https://github.com/christophercliff/hapi-dropbox-webhooks',
            description: '用于接收来自 Dropbox webhooks API 的请求的 Hapi 插件'
        },
        'hapi-error': {
            url: 'https://www.npmjs.com/package/hapi-error',
            description: '自定义错误处理，能够传递对象并呈现自定义错误模板或在出错时重定向到特定URL。'
        },
        'hapi-gate': {
            url: 'https://github.com/captainjackrana/hapi-gate',
            description: '轻松处理 http 到 https 和 www/非 www 重定向'
        },
        'hapi-geo-locate': {
            url: 'https://github.com/fs-opensource/hapi-geo-locate',
            description: '通过 IP 定位请求并在路由处理程序中提供用户的位置'
        },
        'hapi-handlers': {
            url: 'https://github.com/ar4mirez/hapi-handlers',
            description: '允许自动加载处理程序，请在此处查看更多内容： http://hapijs.com/api#serverhandlername-method'
        },
        'hapi-heroku-helpers': {
            url: 'https://github.com/briandela/hapi-heroku-helpers',
            description: '一个 hapi.js 插件，它提供了一些基本功能，在 Heroku 上运行 hapi.js 站点时非常有用'
        },
        'hapi-hubspot': {
            url: 'https://github.com/asilluron/hapi-hubspot',
            description: '插件处理初始连接并为 node-hubspot 公开单个客户端实例（ HubSpot API 的 node.js 包装器）'
        },
        'hapi-imagemin-proxy': {
            url: 'https://github.com/fhemberger/hapi-imagemin-proxy',
            description: '使用`imagemin`服务优化图像的 Hapi 代理'
        },
        'hapi-info': {
            url: 'https://github.com/danielb2/hapi-info',
            description: '添加 route 以显示 hapi 版本和插件版本'
        },
        'hapi-io': {
            url: 'https://github.com/sibartlett/hapi-io',
            description: '一个 socket.io 插件，可以将 socket.io 事件转发到 hapi 路由'
        },
        'hapi-level-db': {
            url: 'https://github.com/maxnachlinger/hapi-level-db',
            description: 'HapiJS / LevelDB 集成'
        },
        'hapi-magic-filter': {
            url: 'https://github.com/ruiquelhas/hapi-magic-filter',
            description: 'Hapi.js 插件用于验证 multipart / form-data 文件内容'
        },
        'hapi-methods-injection': {
            url: 'https://github.com/amgohan/hapi-methods-injection',
            description: 'Hapi.js 插件可自动扫描并注册您的 hapi 方法'
        },
        'hapi-mongo-models': {
            url: 'https://github.com/jedireza/hapi-mongo-models',
            description: 'hapi 应用程序的 MongoDB 对象模型'
        },
        'hapi-mongodb': {
            url: 'https://github.com/Marsup/hapi-mongodb',
            description: '一个简单的 Hapi MongoDB 连接插件，通过服务器或请求属性访问一个或多个连接池'
        },
        'hapi-mongojs': {
            url: 'https://github.com/niqdev/hapi-mongojs',
            description: '用于 hapi 的 mongojs 连接插件'
        },
        'hapi-mongoose': {
            url: 'https://github.com/asilluron/hapi-mongoose',
            description: '适用于 Hapi 9+ 的轻量级 mongoose 连接和配置插件'
        },
        '@watchup/hapi-mongoose': {
            url: 'https://github.com/watchup/hapi-mongoose',
            description: 'Hapi.js 插件将 mongoose 模型映射到路由'
        },
        'hapi-mongoose-db-connector': {
            url: 'https://github.com/codedoctor/hapi-mongoose-db-connector',
            description: '连接到 mongodb 的 hapi 插件，用于 mongoose 应用程序'
        },
        'hapi-multi-mongo': {
            url: 'https://github.com/metoikos/hapi-multi-mongo',
            description: 'Hapi mongodb 连接插件，特别适用于多个连接'
        },
        'hapi-mysql2': {
            url: 'https://github.com/midnightcodr/hapi-mysql2',
            description: '另一个支持多个连接的 Hapijs mysql 插件，受到 Marsup / hapi-mongodb 的启发'
        },
        'hapi-named-routes': {
            url: 'https://github.com/poeticninja/hapi-named-routes',
            description: '将命名路由添加到视图模板'
        },
        'hapi-next' : {
            url: 'https://github.com/Pranay92/hapi-next',
            description: '为您的路由处理程序添加模块化'
        },
        'hapi-node-postgres': {
            url: 'https://github.com/jedireza/hapi-node-postgres',
            description: '使用 pg 连接包裹请求。 通过 `node-postgres` 使用连接池'
        },
        'hapi-nudge': {
            url: 'https://github.com/christophercliff/hapi-nudge',
            description: ' 一个 Hapi 插件，以防止 Heroku dynos 休眠'
        },
        hapio: {
            url: 'https://github.com/caligone/hapio',
            description: 'HapiJS 和 SocketIO 之间的简单桥接插件'
        },
        'hapi-octopus': {
            url: 'https://github.com/ar4mirez/hapi-octopus',
            description: '一个多用途插件，允许您使用简单的签名约定自动加载方法，处理程序，路由和装饰器。'
        },
        'hapi-paginate': {
            url: 'https://github.com/developmentseed/hapi-paginate',
            description: 'HapiJS 响应的简单分页'
        },
        'hapi-pagination': {
            url: 'https://github.com/fknop/hapi-pagination',
            description: '适用于 HapiJS 的简单/可自定义分页插件'
        },
        'hapi-plugin-co': {
            url: 'https://github.com/rse/hapi-plugin-co',
            description: '用于异步处理的基于协同例程的路由处理程序'
        },
        'hapi-plugin-header': {
            url: 'https://github.com/rse/hapi-plugin-header',
            description: '始终发送一个或多个自定义 HTTP 标头，与当前路由无关'
        },
        'hapi-pulse': {
            url: 'https://github.com/fs-opensource/hapi-pulse',
            description: '在 SIGINT 上正常停止 hapi 服务器（用于优雅的 PM2 重新加载）'
        },
        'hapi-rate-limiter': {
            url: 'https://github.com/lob/hapi-rate-limiter/',
            description: '一个 Hapi 插件，可以对 GET，POST 和 DELETE 请求进行速率限制。 可以在逐个路由的基础上为此插件配置自定义速率。'
        },
        'hapi-rate-limitor': {
            url: 'https://github.com/fs-opensource/hapi-rate-limitor',
            description: '易于使用速率限制，以防止暴力攻击'
        },
        'hapi-recaptcha': {
            url: 'https://github.com/cristobal151/hapi-recaptcha',
            description: '谷歌的 hapi 的 reCaptcha'
        },
        'hapi-redis': {
            url: 'https://github.com/sandfox/node-hapi-redis',
            description: '一个 Hapi 插件，提供 redis 客户端'
        },
        'hapi-redis2': {
            url: 'https://github.com/midnightcodr/hapi-redis2',
            description: '一个支持多个连接的 Hapijs redis 插件，受到 Marsup / hapi-mongodb 的启发'
        },
        'hapi-request-user': {
            url: 'https://github.com/fs-opensource/hapi-request-user',
            description: '一个 hapi 插件，将 “request.auth.credentials” 快捷键移到 “request.user”'
        },
        'hapi-response-time': {
            url: 'https://github.com/pankajpatel/hapi-response-time',
            description: '一个 Hapi 插件，用于为响应添加 “x-response-time” 标头'
        },
        'hapi-response-meta': {
            url: 'https://github.com/developmentseed/hapi-response-meta',
            description: '用于向 Hapi 响应添加元数据的 Hapi 插件'
        },
        'hapi-route-directory': {
            url: 'https://github.com/clarkie/hapi-route-directory',
            description: '一个轻量级的 json 路由目录'
        },
        'hapi-router': {
            url: 'https://github.com/bsiddiqui/hapi-router',
            description: '一个自动加载路由的插件'
        },
        'hapi-routes-status': {
            url: 'https://github.com/codedoctor/hapi-routes-status',
            description: '公开您的 node.js / hapi 项目的状态路由'
        },
        'hapi-sanitize-payload': {
            url: 'https://github.com/lob/hapi-sanitize-payload',
            description: 'Hapi 插件可以清理请求的 payload'
        },
        'hapi-sequelizejs': {
            url: 'https://github.com/valtlfelipe/hapi-sequelizejs',
            description: 'Sequelize 的 HAPI 插件（兼容v17）'
        },
        'hapi-sequelize-crud': {
            url: 'https://github.com/mdibaiee/hapi-sequelize-crud',
            description: '自动为您的模型生成 RESTful API ，取决于 hapi-sequelized'
        },
        'hapi-suricate': {
            url: 'https://github.com/viniciusbo/hapi-suricate',
            description: '为您的 Mongoose 模型提供简单灵活的 Hapi 路由 REST 处理程序'
        },
        'hapi-test': {
            url: 'https://github.com/klokoy/hapi-test',
            description: '使用链接方法调用和断言测试 hapi 插件'
        },
        'hapi-to': {
            url: 'https://github.com/mtharrison/hapi-to',
            description: '为命名路由生成动态 URL，支持查询和路径参数（包括通配符，可选和多参数）'
        },
        'hapi-webpack': {
            url: 'https://github.com/christophercliff/hapi-webpack',
            description: '用于构建和提供 Webpack 捆绑包的 Hapi 插件'
        },
        'hapi-webpack-dev-server': {
            url: 'https://github.com/atroo/hapi-webpack-dev-server-plugin',
            description: '开发服务器中间件的实现，以充当 hapi.js 服务器中的插件'
        },
        'haute-couture': {
            url: 'https://github.com/hapipal/haute-couture',
            description: '基于文件的 hapi 插件 composer'
        },
        hecks: {
            url: 'https://github.com/hapipal/hecks',
            description: '将您的 express 应用程序安装到您的 hapi 服务器上, aw heck!'
        },
        hodgepodge: {
            url: 'https://github.com/hapipal/hodgepodge',
            description: '插件依赖性解析器'
        },
        hpal: {
            url: 'https://github.com/hapipal/hpal',
            description: 'hapi pal CLI，用于搜索 hapi 文档，脚手架项目和运行自定义服务器命令'
        },
        k7: {
            url: 'https://github.com/thebergamo/k7',
            description: '使用简单的 Hapijs 连接您的数据库'
        },
        labbable: {
            url: 'https://github.com/devinivy/labbable',
            description: '毫不费力的 hapi 服务器测试'
        },
        loveboat: {
            url: 'https://github.com/devinivy/loveboat',
            description: '可插拔路由配置预处理器'
        },
        mrhorse: {
            url: 'https://github.com/mark-bradshaw/mrhorse',
            description: '用于向路由添加预处理程序和后处理程序的插件'
        },
        patova: {
            url: 'https://github.com/dschenkelman/patova',
            description: 'hapi 的限制插件，适用于速率限制/限制'
        },
        poop: {
            url: 'https://github.com/hapijs/poop',
            description: '在未捕获的异常之后进行进程转储和清理的插件'
        },
        'rate-limiter-flexible': {
            url: 'https://github.com/animir/node-rate-limiter-flexible',
            description: '成熟灵活的速率限制器，DDoS 和强制保护，可在任何规模处理内存，群集或 PM2，Redis，Memcached，MongoDb 等。阻止密钥持续一段时间，启用 Leaky Bucket 类比，使用保险选项管理故障转移，配置智能密钥阻止存储和许多其他。'
        },
        recourier: {
            url: 'https://github.com/ruiquelhas/recourier',
            description: '请求生命周期属性封闭'
        },
        reptile: {
            url: 'https://github.com/hapijs/reptile',
            description: '用于创建 REPL 的插件'
        },
        'rest-hapi': {
            url: 'https://github.com/JKHeadley/rest-hapi',
            description: '用于 hapi 的 RESTful API 生成器'
        },
        ridicule: {
            url: 'https://github.com/walmartlabs/ridicule',
            description: '用于模拟请求的插件'
        },
        schmervice: {
            url: 'https://github.com/hapipal/schmervice',
            description: 'hapi 的服务层'
        },
        schwifty: {
            url: 'https://github.com/hapipal/schwifty',
            description: 'hapi 集成异议 ORM 的模型层'
        },
        scooter: {
            url: 'https://github.com/hapijs/scooter',
            description: 'User-agent 信息插件'
        },
        spazy: {
            url: 'https://github.com/AlexanderElias/spazy',
            description: 'hapi 的静态文件和单页面应用程序（spa）插件'
        },
        tacky: {
            url: 'https://github.com/continuationlabs/tacky',
            description: 'hapi 的服务器端响应缓存'
        },
        therealyou: {
            url: 'https://github.com/briandela/therealyou',
            description: '用于根据 X-Forwarded-For 和 X-Forwarded-Port 标头设置 request.info.remoteAddress 和 request.info.remotePort 的插件'
        },
        toothache: {
            url: 'https://github.com/smaxwellstewart/toothache',
            description: '一个插件，旨在使用 MongoDB 为 Hapi 服务器创建 RESTful CRUD 端点变得非常简单'
        },
        tournesol: {
            url: 'https://github.com/vdeturckheim/tournesol',
            description: '一种旨在使 api 测试更清晰，更容易的工具'
        },
        tandy: {
            url: 'https://github.com/hapipal/tandy',
            description: '针对 Objection 模型的自动生成的，RESTful，CRUDdy 路由处理程序'
        },
        toys: {
            url: 'https://github.com/hapipal/toys',
            description: 'hapi 实用玩具箱'
        },
        tv: {
            url: 'https://github.com/hapijs/tv',
            description: 'hapi 服务器的交互式调试控制台插件'
        },
        underdog: {
            url: 'https://github.com/hapipal/underdog',
            description: '用于 hapi 的 HTTP / 2 服务器推送'
        },
        wozu: {
            url: 'https://github.com/felixheck/wozu',
            description: '服务器装饰器列出所有已定义的 hapi.js 路由'
        },
        wurst: {
            url: 'https://github.com/felixheck/wurst',
            description: '基于目录的路由自动加载器'
        }
    },
    '验证': {
        blaine: {
            url: 'https://github.com/ruiquelhas/blaine',
            description: '内存中原始请求有效负载的服务器级文件签名验证'
        },
        burton: {
            url: 'https://github.com/ruiquelhas/burton',
            description: '原始流请求有效负载的服务器级文件签名验证'
        },
        copperfield: {
            url: 'https://github.com/ruiquelhas/copperfield',
            description: '内存中已解析的请求有效负载的服务器级文件签名验证'
        },
        coutts: {
            url: 'https://github.com/ruiquelhas/coutts',
            description: '原始临时文件请求有效负载的服务器级文件签名验证'
        },
        fischbacher: {
            url: 'https://github.com/ruiquelhas/fischbacher',
            description: '已解析的临时文件请求有效负载的服务器级文件签名验证'
        },
        'hapi-plugin-ducky': {
            url: 'https://github.com/rse/hapi-plugin-ducky',
            description: '使用 DuckyJS JSON 验证语言验证有效负载'
        },
        henning: {
            url: 'https://github.com/ruiquelhas/henning',
            description: '已解析的请求有效内容文件流的服务器级文件签名验证'
        },
        houdin: {
            url: 'https://github.com/ruiquelhas/houdin',
            description: '内存中请求有效负载的路由级文件签名验证'
        },
        lafayette: {
            url: 'https://github.com/ruiquelhas/lafayette',
            description: '临时文件请求有效负载的路由级文件签名验证'
        },
        ratify: {
            url: 'https://github.com/mac-/ratify',
            description: '使用 JSON 模式指定有效的请求有效负载，查询，路径和标头，并从中生成 swagger'
        },
        supervizor: {
            url: 'https://github.com/ruiquelhas/supervizor',
            description: '服务器级请求有效负载验证'
        },
        thurston: {
            url: 'https://github.com/ruiquelhas/thurston',
            description: '请求有效负载文件流的路由级文件签名验证'
        },
        'hapi-seneca': {
            url: 'https://github.com/dhso/hapi-seneca',
            description: 'Seneca 为 hapi 提供微服务'
        }
    },
    '扩展的hapi空间': {
        boom: {
            url: 'https://github.com/hapijs/boom',
            description: 'HTTP 友好的错误对象'
        },
        confidence: {
            url: 'https://github.com/hapijs/confidence',
            description: 'A / B 测试的配置文档格式，API 和基础'
        },
        faketoe: {
            url: 'https://github.com/hapijs/faketoe',
            description: 'XML 到 JSON 转换器'
        },
        glue: {
            url: 'https://github.com/hapijs/glue',
            description: '服务器编写器'
        },
        h2o2: {
            url: 'https://github.com/hapijs/h2o2',
            description: '代理处理程序'
        },
        'hapi-graceful-pm2': {
            url: 'https://github.com/roylines/hapi-graceful-pm2',
            description: '在发出 pm2 gracefulReload 命令时处理真正的零停机重新加载'
        },
        'hapi-openapi': {
            url: 'https://github.com/krakenjs/hapi-openapi',
            description: 'hapi 插件用 OpenAPI（以前称之为 swagger）构建设计驱动的 apis。'
        },
        'hapi-plugin-graphiql': {
            url: 'https://github.com/rse/hapi-plugin-graphiql',
            description: '用于集成 GraphiQL 的 HAPI 插件，GraphiQL 是一个交互式 GraphQL 用户界面'
        },
        hoek: {
            url: 'https://github.com/hapijs/hoek',
            description: '通用节点实用程序'
        },
        inert: {
            url: 'https://github.com/hapijs/inert',
            description: '静态文件和目录处理程序'
        },
        joi: {
            url: 'https://github.com/hapijs/joi',
            description: 'JavaScript 对象的对象模式描述语言和验证器'
        },
        kilt: {
            url: 'https://github.com/hapijs/kilt',
            description: '将多个事件发射器组合到单个发射器中'
        },
        lab: {
            url: 'https://github.com/hapijs/lab',
            description: '一个带代码覆盖率分析的简单测试实用程'
        },
        makemehapi: {
            url: 'https://github.com/hapijs/makemehapi',
            description: '自我指导讲习班，教你 hapi'
        },
        nes: {
            url: 'https://github.com/hapijs/nes',
            description: '用于 hapi 路由的 WebSocket 适配器插件'
        },
        qs: {
            url: 'https://github.com/hapijs/qs',
            description: '查询字符串解析器，支持数组和对象'
        },
        rejoice: {
            url: 'https://github.com/hapijs/rejoice',
            description: 'hapi.js cli'
        },
        shot: {
            url: 'https://github.com/hapijs/shot',
            description: '将伪造的 HTTP 请求/响应注入节点服务器逻辑'
        },
        tarm: {
            url: 'https://github.com/kanongil/tarm',
            description: '添加 tarmount 处理程序以提供 tar 文件内容'
        },
        topo: {
            url: 'https://github.com/hapijs/topo',
            description: '具有分组支持的拓扑排序'
        },
        vision: {
            url: 'https://github.com/hapijs/vision',
            description: '模板渲染支持'
        },
        wreck: {
            url: 'https://github.com/hapijs/wreck',
            description: 'HTTP 客户端实用程序'
        }
    }
};
