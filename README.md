# your-assets-name

## 使用说明

### 如何配置代码

#### 一、包含构建逻辑
> - 基本用法：在 package.json 配置 scripts.build，且生成产物放在 dist

```
"scripts": {
    "build": "build-cli"
  },

```
> - 高级用法：在组件根目录增加 .qcloud.yml 文件自定义构建过程，详见 [QCloud 构建配置](https://site.alipay.net/qingting/qingting-doc/build/qcloud.html)

```
type: assets  # 固定行，目前只有 assets 一种方式
build:  # 下面按顺序写入 build 步骤就可以
  - tnpm i
  - tnpm run build
```

#### 二、不包含构建逻辑
> - 检查 package.json, 假如该模块不需要构建，确保没有scripts.build
> - 添加 dist 目录, 将需要发布的文件拷贝到dist目录下

## 其他

- [Assets 组件研发流程](https://lark.alipay.com/swift/guide/assets-process-index)