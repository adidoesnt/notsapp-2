import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import initRoutes from "./routes";
import { initLogger, getLogger } from "./utils";
import { database, initDb } from "./api/db";

const { SERVER_PORT } = process.env;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initLogger();
const logger = getLogger();
initRoutes(app);

app.listen(SERVER_PORT || 8080, async () => {
  await initDb();
  logger.info(`user service running on port ${SERVER_PORT}`);
});
