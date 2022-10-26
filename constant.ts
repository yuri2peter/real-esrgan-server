import { loadEnvConfig } from "@next/env";

loadEnvConfig(".");

export const ROOT_PATH = __dirname;
export const { PORT } = process.env;
