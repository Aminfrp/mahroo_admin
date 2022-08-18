import userAxios from "../../../axios/usersAxios";

export const getUsers = async () => {
  try {
    const response = await userAxios.getUsers();
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
