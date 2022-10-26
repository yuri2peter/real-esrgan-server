import { Controller, Ctx } from "../types/controller";

export const test: Controller = (router) => {
  router.get("/api/test", async (ctx: Ctx) => {
    ctx.body = "ok";
  });
};
