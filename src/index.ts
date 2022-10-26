import { startKoa } from "./startKoa";
import { startIO } from "./startIO";
import { PORT } from "../constant";

async function main() {
  const server = startKoa();
  startIO(server);

  server.listen(PORT, () => {
    console.log("listening on *:" + PORT);
  });
}
main();
