import { database } from "@api/db";
import { getLogger } from "@utils";

const logger = getLogger();

const deleteUser = async (uuid: string) => {
  try {
    const user = await database.delete(`t_user:${uuid}`);
    logger.info(`deleted user with uuid ${uuid}`);
  } catch (error) {
    logger.error(`error deleting user, ${error}`);
  }
};

export default deleteUser;
