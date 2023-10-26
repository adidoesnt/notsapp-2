import { readUser, readAllUsers } from "@api/repository";

export const readAll = async () => {
    const users = readAllUsers();
    return users;
}

export const read = async (uuid: string) => {
    const user = readUser(uuid);
    return user;
}