# real-esrgan-server

超分辨率算法的本地 web 服务。提供 webAPI 调用 real-esrgan 的 windows 便携版进行图片超分。

## 安装

### 1. 安装主程序

```
npm ci
```

### 2. 下载超分程序

下载 [超分程序.zip](https://github.com/yuri2peter/real-esrgan-server/releases/download/resources/realesrgan.zip) 并解压到主程序根目录。

```
-| 主程序
  -| realesrgan
    -- realesrgan-ncnn-vulkan.exe
```

## 运行

```
npm start
```

## API

```js
// 放大一个png图片（base64字符串格式）
axios.post("/api/process/base64", { data: "PNG base64 data string" });
```

## 其他

### 监听其他端口

修改环境变量 PORT

> 推荐使用本地环境变量文件：`.env.local`

### 二次开发

```
npm run dev
```
