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
In the directory `lib/tutorials` we have some directories with the name of the languages translated, to add a new translation, simply add a new folder in the `lib/tutorials` with your translation.
An Example, if you translate the tutorials, to Brazilian Portuguese, you must use the `pt_BR` as the name of the directory.
Inside the directory `pt_BR`, you need to follow the same struture we use in `en_US`, with all tutorials separated in markdown files and an `index.js` file that's export the tutorials and the titles.
After finish the translations, you also need add your translation in the `index.js` file inside `lib/tutorials`.

## Plugins
hapijs.com maintains a list of community-created plugins [here](http://hapijs.com/plugins). If there are any plugins you have created or one you use often that isn't listed please send a [pull request](https://github.com/hapijs/hapijs.com/blob/master/lib/plugins.js). Please note the existing categories, but if your plugin does not fit one feel free to create your own. Please keep the plugins in alphabetical order to be fair to all contributors.

## Community

Using hapi? We'd love to hear from you and list your project in our [community listing](http://hapijs.com/community). You can get your project or company added in a few steps:

1. Fork the [hapijs.com repository](https://github.com/hapijs/hapijs.com)
2. Add your logo to the [public/img](https://github.com/hapijs/hapijs.com/tree/master/public/img) folder. It should be in png format, at least 300 pixels wide. The name should follow the format `logo-<yourcompanyname>.png`.
3. Add an entry to the bottom of the hash in [lib/community.js](https://github.com/hapijs/hapijs.com/blob/master/lib/community.js) including:
   * url: Your company or project's url.
   * logo: The unqualified filename of the logo you added above.
   * description: a short (~300 characters) user quote, describing your hapi user experience.
   * person: used for quote attribution
   * height / width: Used to control the image rendering size - use one or both of these to make your logo render correctly.
4. Submit a pull request.
