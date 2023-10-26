import deleteAccount from "@api/services/delete";
import { RES } from "@constants";
import { Request, Response } from "express";

const deleteController = async (request: Request, response: Response) => {
  const { query } = request;
  const { uuid } = query;
  await deleteAccount(uuid as string);
  const { status, message } = RES.SUCCESS.DEFAULT;
  return response.status(status).json({
    message,
  });
};

export default deleteController;
