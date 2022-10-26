import fs from "fs-extra";
import path from "path";
import { execShellScriptContent } from "@yuri2/exec-shell";
import { ROOT_PATH } from "../../constant";
import Queue from "./queue";

const queue = new Queue();

// 【队列安全的】传入base64字符串（png），返回超分后的base64字符串
export function scaleFromBase64Queued(fromStr: string) {
  return new Promise((resolve) => {
    queue.push(async () => {
      await scaleFromBase64(fromStr).then(resolve);
    });
  });
}

// 传入base64字符串（png），返回超分后的base64字符串
async function scaleFromBase64(fromStr: string) {
  // 文件路径
  const filePathFrom = ROOT_PATH + "/realesrgan/1.png";
  const filePathTo = ROOT_PATH + "/realesrgan/2.png";
  const dirExec = path.resolve(ROOT_PATH, "realesrgan").replace(/\\/g, "\\\\"); // 必须转义才能被命令行正确识别路径

  // 清除已有的图片
  await fs.remove(filePathFrom);
  await fs.remove(filePathTo);

  // 写入from文件
  await fs.writeFile(filePathFrom, fromStr, "base64");

  // 执行超分
  await execShellScriptContent(
    `
    cd ${dirExec}
    ./realesrgan-ncnn-vulkan.exe -i 1.png -o 2.png -n realesrgan-x4plus-anime`
  );

  // 读取超分后的文件
  const bufferTo = await fs.readFile(filePathTo);
  return bufferTo.toString("base64");
}
