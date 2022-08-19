import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import userAxios from "../../../axios/usersAxios";
import { ICreateUser } from "../../../interfaces/interfaces";
import Swal from "sweetalert2";

export const useCreateUser = () => {
  const navigate = useNavigate();

  const createUser = useMutation((newUser: ICreateUser) =>
    userAxios.createUser(newUser).then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "کاربر با موفقیت ثبت شد",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => navigate("/users"));
    })
  );
  return createUser;
};
