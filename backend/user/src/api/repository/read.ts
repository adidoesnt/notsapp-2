import { database } from "@api/db";
import { getLogger } from "@utils";

const logger = getLogger();

export const readAllUsers = async () => {
  try {
    const users = database.select("t_user");
    logger.info("retrieved all users");
    return users;
  } catch (error) {
    logger.error(`error retrieving users, ${error}`);
  }
};

export const readUser = async (uuid: string) => {
  try {
    const user = database.select(`t_user:${uuid}`);
    logger.info(`retrieved user with uuid ${uuid}`);
    return user;
  } catch (error) {
    logger.error(`error retrieving user with uuid ${uuid}, ${error}`);
  }
};
