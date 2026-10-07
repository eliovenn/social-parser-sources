# 解析源开发与接口

每个平台由配置和入口模块组成，目录结构如下：

```text
sources/<platform>/
  manifest.json
  src/
    main.js
```

构建工具将入口及依赖打包为 `dist/<platform>.js`，并自动在文件头写入 `@social-source` 配置。实现可参考[小红书](../sources/xhs/src/main.js)，公共工具位于 [sources/common](../sources/common/)。

## 配置

以下为示例平台配置，域名仅用于说明结构：

```json
{
  "id": "official.example",
  "platformId": "example",
  "name": "示例平台",
  "version": "1.0.0",
  "apiVersion": 1,
  "domains": ["example.com"],
  "requestDomains": ["example.com", "example.net"],
  "cookieDomains": ["example.com"],
  "pathPatterns": ["^/post/"],
  "mediaTypes": ["image", "video"],
  "inputRules": [
    {"pattern": "^([0-9]+)$", "url": "https://example.com/post/$1"}
  ]
}
```

| 字段 | 类型 | 要求与用途 |
| --- | --- | --- |
| `id` | string | 必填，源的唯一标识；本仓库使用 `official.<platform>` |
| `platformId` | string | 必填，平台标识，与宿主平台定义保持一致 |
| `name` | string | 必填，非空显示名称 |
| `version` | string | 必填，三个非负整数，每段最多 9 位，如 `1.0.0`；发布修复时递增 |
| `apiVersion` | number | 必填，当前宿主只接受 `1` |
| `domains` | string[] | 必填且非空，用于匹配输入链接域名 |
| `requestDomains` | string[] | 可选，网络请求允许访问的域名；省略时使用 `domains` |
| `cookieDomains` | string[] | 必填，允许发送 Cookie / Authorization 的域名；无需凭据时填 `[]` |
| `pathPatterns` | string[] | 可选，默认 `[]`；正则匹配 URL 路径，任一匹配即可；空列表不限制路径 |
| `mediaTypes` | string[] | 可选，默认 `[]`；建议明确列出平台可返回的媒体类型 |
| `inputRules` | object[] | 可选，默认 `[]`；按顺序将裸 ID 转为链接，包含 `pattern` 和 `url`，支持 `$1` 等捕获组替换 |

`id` 和 `platformId` 以字母或数字开头，只能包含字母、数字、下划线、点和连字符，最长 100 个字符。域名填写小写主机名，不带协议、路径或通配符；域名规则同时匹配本域与子域。

`pathPatterns` 和 `inputRules.pattern` 由 Dart 宿主解释为正则表达式，长度上限为 512 个字符。跨域 API 或短链跳转的目标域名也需要包含在 `requestDomains` 中。

## 入口函数

入口导出两个异步函数，输入均为包含字符串 `url` 的对象：

| 函数 | 返回值 | 用途 |
| --- | --- | --- |
| `resolve({url})` | `{url, canonicalUrl}` | 解析短链、规范化链接，保留后续解析所需参数 |
| `parse({url})` | `{canonicalUrl, title, content, media}` | 获取帖子内容与媒体信息 |

返回值应可序列化为 JSON。`url` 保留解析所需的查询参数；`canonicalUrl` 是展示用的帖子链接，不应误删识别帖子所必需的参数。不要依赖前一次 `resolve` 调用留下的模块状态。

下面是图片帖的 `parse` 返回示例，地址仅为结构示意：

```json
{
  "canonicalUrl": "https://example.com/post/123",
  "title": "示例标题",
  "content": "示例正文",
  "media": [
    {
      "type": "image",
      "sources": [
        {
          "url": "https://cdn.example.com/photo.jpg",
          "kind": "direct",
          "track": "image",
          "headers": {"Referer": "https://example.com/"}
        }
      ],
      "thumbnailUrl": "https://cdn.example.com/photo.jpg",
      "width": 1200,
      "height": 800
    }
  ]
}
```

`title`、`content` 无内容时使用空字符串；无媒体的文字帖使用 `media: []`。公共函数 `result()` 提供这些默认值。

每个媒体项必须包含 `type` 和 `sources`：

- `type`：`image`、`video`、`audio`、`animation`、`livePhoto`。
- `sources`：媒体地址列表，每项必须有 `url`、`kind`、`track`。
- `kind`：`direct`、`hls`、`dash`。
- `track`：`image`、`video`、`audio`、`audioVideo`、`unknown`。

媒体项可附带 `thumbnailUrl`、`width`、`height`、`durationMs`，时长单位为毫秒。地址项可附带字符串映射 `headers`，以及 `formatId`、`extension`、`videoCodec`、`audioCodec`、`width`、`height`、`bitrate`。未知的可选信息可省略或设为 `null`，`headers` 省略时为 `{}`。

Live Photo 的 `sources` 同时包含图片与视频；分离的音视频流分别标记为 `audio`、`video`。保留实际需要的媒体请求头，帖子网页链接不能作为媒体地址。

## 运行环境

使用 FJS 提供的 `fetch`、`URL`、`Headers` 等能力，以及内置 `crypto` 模块。HTML/XML 处理和结果构造可复用 `sources/common/` 的公共函数。平台代码不能依赖浏览器 `document` 或 Node 文件系统、进程 API。

宿主提供以下全局对象：

| 对象 | 接口与约定 |
| --- | --- |
| `parserContext` | 只读的 `cookies`、`headers` 字符串映射，以及剩余任务时间 `timeoutMs` |
| `parserCache` | 异步 `get(key)`、`set(key, value, ttlMs)`，用于按源代码隔离的短期缓存；`ttlMs` 单位为毫秒 |

在任务函数中读取上下文和缓存，不能在模块顶层访问；模块加载校验时也不能发起网络请求。Cookie / Authorization 的发送受 `cookieDomains` 和请求的凭据设置限制。

## 错误

抛出带 `code` 的 `Error`，也可调用公共函数 `fail(message, code)`：

```js
throw Object.assign(new Error('需要登录'), {code: 'authenticationRequired'});
```

常用错误码：`network`、`timeout`、`authenticationRequired`、`notFound`、`unsupportedContent`、`parseFailed`。宿主还可能返回请求越过域名权限等产生的 `permissionDenied`。保留可识别的错误类别，便于应用区分登录、网络与内容问题。

## 新增或修改平台

1. 新增平台时创建配置和入口模块；修改平台时更新对应源码。发布更新须递增受影响平台的 `version`。
2. 在仓库根目录运行 `npm run build:sources` 和 `npm run check:sources`。
3. 在 Flutter 宿主中同步产物，并增加或更新对应的回归样本；新增平台还需核对宿主的平台定义与内置加载逻辑。
4. 验证匹配规则、解析结果、登录场景和错误处理后，一并提交源码与生成文件。

`check:sources` 只负责构建产物一致性，不执行实际解析。运行测试在宿主 FJS 中执行，同步方式见 [README](../README.md#本地开发)。
