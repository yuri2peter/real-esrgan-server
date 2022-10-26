import Router from "koa-router";
import { test } from "./test";
import { process } from "./process";

export function main(router: Router<any, {}>) {
  test(router);
  process(router);
}
