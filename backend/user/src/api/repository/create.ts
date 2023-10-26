import { database } from "@api/db";
import { getLogger } from "@utils";
import type { User } from "@api/repository/types";

const logger = getLogger();

const createUser = async ({
  firstName,
  lastName,
  username,
  hash,
  uuid,
}: User) => {
  try {
    const user = await database.create(`t_user:${uuid}`, {
      username,
      name: {
        firstName,
        lastName,
      },
      password: hash,
    });
    logger.info(`created user ${username}`);
    return user;
  } catch (error) {
    logger.error(`error creating user, ${error}`);
  }
};

export default createUser;
