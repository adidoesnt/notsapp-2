import { read, readAll } from "@api/services";
import { RES } from "@constants";
import { Request, Response, request } from "express";
import { getLogger } from "utils/logger";

const logger = getLogger();

export const readController = async (request: Request, response: Response) => {
  const { query } = request;
  const { uuid } = query;
  const user = await read(uuid as string);
  if (user?.length) {
    const { status, message } = RES.SUCCESS.DEFAULT;
    return response.status(status).json({
      message,
      user,
    });
  } else {
    const { status, message } = RES.ERROR.NOT_FOUND;
    logger.error(message);
    return response.status(status).json({
      message,
    });
  }
};

export const readAllController = async (
  _: Request,
  response: Response
) => {
  const users = await readAll();
  if (users?.length) {
    const { status, message } = RES.SUCCESS.DEFAULT;
    return response.status(status).json({
      message,
      users,
    });
  } else {
    const { status, message } = RES.ERROR.NOT_FOUND;
    logger.error(message);
    return response.status(status).json({
      message,
    });
  }
};
