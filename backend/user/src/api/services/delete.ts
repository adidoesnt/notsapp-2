import { deleteUser } from "@api/repository";

const deleteAccount = async (uuid: string) => {
  await deleteUser(uuid);
};

export default deleteAccount;
