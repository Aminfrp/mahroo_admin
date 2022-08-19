import axios from "axios";
import { ICreateUser, IUser } from "../interfaces/interfaces";
import { baseURL } from "../static/static";

const instance = axios.create({ baseURL: `${baseURL}users` });

const userAxios = {
  getUsers: () => instance.get<IUser[]>("/"),
  createUser: (data: ICreateUser) =>
    instance.post("/", data, {
      headers: { "content-type": "multipart/form-data" },
    }),
};

export default userAxios;
