import axios from "axios";
import { IUser } from "../interfaces/interfaces";
import { baseURL } from "../static/static";

const instance = axios.create({baseURL:`${baseURL}users`});

const userAxios = {
    getUsers:()=>instance.get<IUser[]>("/")
}


export default userAxios;