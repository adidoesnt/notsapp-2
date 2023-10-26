import type { User } from "@api/repository/types";
import { Request, Response } from "express";
import { signup } from "@api/services";
import { RES } from "@constants";
import { getLogger } from "@utils";

const logger = getLogger();

const signupController = async (request: Request, response: Response) => {
  const { body } = request;
  const payload = body as User;
  const user = await signup(payload);
  if (user) {
    const { status, message } = RES.SUCCESS.DEFAULT;
    return response.status(status).json({
      message,
      user,
    });
  } else {
    const { status, message } = RES.ERROR.INTERNAL;
    logger.error(message);
    return response.status(status).json({
      message,
    });
  }
};

export default signupController;
