# hapijs.com

<a href="https://www.packet.net"><img src="https://www.packet.net/assets/images/logo-main.png" height="80px" align="right"/></a>

这是 [hapijs.com](http://hapijs.com) 的主页。

主要维护者： [Jonas Pauthier](https://github.com/Nargonath)

**hapijs.com** 由 [packet](https://www.packet.net) 慷慨托管。

## Running/developing

* 首先，从 github [here](https://github.com/settings/tokens/new) 获取一个令牌并选择仅检查的范围（仅两个）

  - [ ] **repo**              :   *完全控制私有存储库*
    - [x] **repo status**     :   *访问提交状态*
    - [ ] **repo_deployment** :   *访问部署状态*
    - [x] **public_repo**     :   *访问公共存储库*
    - [ ] **repo:invite**     :   *访问存储库邀请*
 


* 将 `config/default.json` 复制到 `config/local.json`，并将您的github令牌放在 `local.json` 的 `githubToken` 字段中。注意：请不要提交包含真正的github令牌的文件。这将使其公开，并允许任何人查看此回购并使用您的令牌，就像他们是您一样。

* Run the following commands

```bash
npm install
make
npm start or npm run dev (for automatic code reload)
```

您现在可以在浏览器中访问 `http://localhost:3000` 来查看该站点。

服务器还运行文件监视器，在文件更改时自动重建内容。

注意：对于提交，您需要包含make过程中生成的 public / * 文件。 部署不做 make 。

## Add a translation for the tutorials
在目录 `lib/tutorials` 中，我们有一些目录，其中包含翻译的语言名称，要添加新的翻译，只需在 `lib / tutorials` 中添加一个新文件夹即可。
如果您将教程翻译为巴西葡萄牙语，则必须使用 `pt_BR` 作为目录名称。
在目录 `pt_BR` 中，你需要遵循我们在 `en_US` 中使用的相同结构，所有教程在 markdown 文件中分离，并且`index.js` 文件导出教程和标题。
完成翻译后，您还需要在 `lib / tutorials` 中的 `index.js` 文件中添加您的翻译。

## Plugins
hapijs.com 维护一个社区创建的插件列表 [here](http://hapijs.com/plugins)。 如果您创建了任何插件或经常使用未插入的插件，请发送 [pull request](https://github.com/hapijs/hapijs.com/blob/master/lib/plugins.js)。 请注意现有的类别，但如果您的插件不合适，可以随意创建自己的类别。 请按字母顺序保留插件，以便对所有贡献者公平。

## Community

使用 hapi ？ 我们很乐意听取您的意见，并在我们的 [community listing](http://hapijs.com/community) 中列出您的项目。 您可以通过几个步骤添加项目或公司：

1. Fork the [hapijs.com repository](https://github.com/hapijs/hapijs.com)
2. Add your logo to the [public/img](https://github.com/hapijs/hapijs.com/tree/master/public/img) folder. It should be in png format, at least 300 pixels wide. The name should follow the format `logo-<yourcompanyname>.png`.
3. Add an entry to the bottom of the hash in [lib/community.js](https://github.com/hapijs/hapijs.com/blob/master/lib/community.js) including:
   * url: Your company or project's url.
   * logo: The unqualified filename of the logo you added above.
   * description: a short (~300 characters) user quote, describing your hapi user experience.
   * person: used for quote attribution
   * height / width: Used to control the image rendering size - use one or both of these to make your logo render correctly.
4. Submit a pull request.
