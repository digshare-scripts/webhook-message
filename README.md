# 使用 webhook 发送盯梢消息

[脚本文档](https://docs.dingshao.cn/script/getting-started.html)

当前脚本以版本部署为例子，演示了如何使用盯梢 webhook 发送消息。例子中提供了一个 `version` 参数，可以通过 webhook 传入，指定消息中的版本号。

## 安装依赖

```bash
npm install
```

## 获取 webhook 地址

在盯梢手机应用中创建频道后，执行以下命令：

```bash
npx dss webhook
```

执行命令后使用盯梢手机应用扫描打开的二维码，即可获取 webhook 地址。

## 指定 webhook 参数

获得 webhook 以后，可以在其后添加 `?version=1.0.0` 进行测试。比如：

```
https://www.dingshao.cn/webhook/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx?version=1.0.0
```

在浏览器中打开该地址，即可发送消息。

参数也可以通过请求体（body）提供，支持 `application/json` 和 `application/x-www-form-urlencoded` 两种格式。

# 其他调试方法

## 本地测试

```bash
npx dss local-run --params version=1.0.0
```

## 调试环境测试

```bash
# 部署到调试环境
npx dss deploy --debug
# 执行（不实际发送消息和更新状态）
npx dss run --debug --dry-run --params version=1.0.0

# 或者部署后直接执行
npx dss deploy --debug --dry-run --params version=1.0.0
```

也可使用 `--run` 代替 `--dry-run`，此时即使是在调试环境（`--debug`）也会发送消息和更新状态。

## 部署到线上环境

```bash
# 部署
npx dss deploy
# 手动执行
npx dss run --params version=1.0.0

# 或者部署后直接执行
npx dss deploy --run --params version=1.0.0
```
