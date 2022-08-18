import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./getUsers";

export const useGetUsers = ()=>{
   const users =  useQuery(['users'], getUsers);
   return users;
}