# Social Parser Sources

解析源在 Flutter 宿主的 FJS（基于 QuickJS 的 JavaScript 运行时）中执行。Node.js 用于构建；应用运行时由 `social_parser_js` 加载构建后的文件。本项目提供解析逻辑，不负责下载媒体或合并音视频轨道。

## 平台

当前包含 20 个平台的解析实现：

| 平台 | 源目录 | 平台 | 源目录 |
| --- | --- | --- | --- |
| Bilibili | [bilibili](sources/bilibili/) | 酷安 | [coolapk](sources/coolapk/) |
| 豆瓣 | [douban](sources/douban/) | 抖音 | [douyin](sources/douyin/) |
| Facebook | [facebook](sources/facebook/) | Instagram | [instagram](sources/instagram/) |
| 快手 | [kuaishou](sources/kuaishou/) | 皮皮虾 | [pipix](sources/pipix/) |
| Snapchat | [snapchat](sources/snapchat/) | Threads | [threads](sources/threads/) |
| 百度贴吧 | [tieba](sources/tieba/) | TikTok | [tiktok](sources/tiktok/) |
| X / Twitter | [twitter](sources/twitter/) | 微博 | [weibo](sources/weibo/) |
| 微信公众号 | [weixin](sources/weixin/) | 小红书 | [xhs](sources/xhs/) |
| 小黑盒 | [xiaoheihe](sources/xiaoheihe/) | YouTube | [youtube](sources/youtube/) |
| 知乎 | [zhihu](sources/zhihu/) | 最右 | [zuiyou](sources/zuiyou/) |

各平台的匹配域名与媒体类型见目录中的 `manifest.json`。已有实现不代表所有链接和真实网站场景均已验证；解析结果取决于内容类型、登录状态和平台接口变化。

## 在 Flutter 中使用

在已经接入 `social_parser_js` 的 Flutter 应用中，调用 `createSocialParser()` 即可加载宿主包内置的解析源。需要接收远程更新时，同时配置持久化目录和发布索引：

```dart
import 'dart:io';
import 'package:social_parser_js/social_parser_js.dart';

final parser = await createSocialParser(
  sourceDirectory: Directory('/your/app/support/official_platforms'),
  officialIndexUrl: Uri.parse(
    'https://cdn.jsdelivr.net/gh/OWNER/REPO@main/index.json',
  ),
);

// 在用户检查更新时调用。
final results = await parser.sources.updateBuiltins();
```

将目录替换为应用实际可写的持久化目录，将 `OWNER/REPO` 替换为发布解析源的公开仓库。配置索引不会自动检查远程更新；`results` 按源 ID（如 `official.xhs`）返回更新结果，值为 `null` 表示成功，否则为该平台的错误。索引获取或协议错误会抛出异常，应由应用处理。

索引需要先按[发布说明](docs/publishing.md)生成并上线。Flutter 包的安装和解析调用见宿主项目 `social-parser-flutter` 的 `docs/integration.md`。

## 本地开发

使用 Node.js 22，在仓库根目录执行：

```sh
npm ci
npm run build:sources
npm run check:sources
```

修改 `sources/` 后重新构建，提交源码及生成的 `dist/`、`test/fixtures/`。不要手工修改生成文件。

`check:sources` 会重新构建并核对生成文件是否一致；GitHub Actions 执行同一项检查。它不能验证真实网站解析结果或 FJS 运行兼容性，这些需要在 Flutter 宿主中测试。

如需同步到 Flutter 内置源，在 `social-parser-flutter` 仓库根目录执行：

```sh
dart run tool/sync_sources.dart /absolute/path/to/social-parser-sources
```

随后按宿主的 `docs/testing.md` 运行回归测试。新增平台的接口约定见[解析源开发](docs/source-api.md)。

## 目录

```text
sources/       各平台源码、manifest.json 和公共模块
dist/          各平台的单文件 JS 和构建索引
tool/          构建、格式化与发布工具
test/fixtures/ 供宿主回归测试使用的生成文件
docs/          接口与发布说明
```

## 文档

- [解析源开发与接口](docs/source-api.md)
- [发布到 GitHub / jsDelivr](docs/publishing.md)
