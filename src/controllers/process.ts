import { scaleFromBase64Queued } from "../libs/process";
import { Controller, Ctx } from "../types/controller";

export const process: Controller = (router) => {
  router.post("/api/process/base64", async (ctx: Ctx) => {
    const { data } = ctx.request.body;
    const results = await scaleFromBase64Queued(data);
    ctx.body = results;
  });
};
