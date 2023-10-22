import { Surreal } from "surrealdb.node";
import { getLogger } from "../../utils";

const { DB_HOST, DB_PORT, DB_USER, DB_PASS } = process.env;
const host = DB_HOST || "localhost";
const port = parseInt(DB_PORT || "2424");
const username = DB_USER || "";
const password = DB_PASS || "";
const logger = getLogger();

const db = new Surreal();

export const initDb = async () => {
  const URI = `ws://${host}:${port}`;
  try {
    await db.connect(URI);
  } catch (error) {
    logger.error(`error connecting to database, ${error}`);
    return;
  }
  try {
    await db.signin({
      username,
      password,
    });
  } catch (error) {
    logger.error(`error authenticating connection, ${error}`);
  }
  try {
    await db.use({
      namespace: "notsapp",
      db: "user",
    });
  } catch (error) {
    logger.error(`error setting namespace, ${error}`);
  }
  logger.info("connected to database");
};

export default db;
