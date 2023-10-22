import { v4 as uuidv4 } from "uuid";
import { hash as hashPassword } from "bcryptjs";
import type { User } from "@api/repository/types";
import { createUser } from "@api/repository";

const { SALT_ROUNDS } = process.env;
const saltRounds = parseInt(SALT_ROUNDS || "8");

const signup = async ({ firstName, lastName, username, password }: User) => {
  const uuid = uuidv4();
  const hash = await hashPassword(password!, saltRounds);
  const user = await createUser({
    firstName,
    lastName,
    username,
    hash,
    uuid,
  });
  return user;
};

export default signup;
