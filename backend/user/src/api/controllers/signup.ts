import type { User } from "@api/repository/types";
import { Request, Response } from "express";
import { signup } from "@api/services";
import { RES } from "@constants";

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
    return response.status(status).json({
      message,
    });
  }
};

export default signupController;
