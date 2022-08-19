import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import DropZone from "../../../components/dropZone/DropZone";
import { useCreateUser } from "../../../hooks/mutations/users/userMutatuion";
import SaveIcon from "@mui/icons-material/Save";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
const CreateUser = () => {
  const [files, setFiles] = useState<any[]>([]);
  const { mutate } = useCreateUser();

  // validation
  const validationSchema = yup.object({
    name: yup.string().required("فیلد نام و نام خانوادگی اجباری است"),
    password: yup
      .string()
      .required("فیلد رمز عبور اجباری است")
      .min(8, "تعداد کاراکتر ها باید بیشتر از 8 کاراکتر باشد"),
    email: yup.string().email("فرمت ایمیل را صحیح وارد کنید"),
    code: yup
      .string()
      .required("فیلد کد ملی اجباری است")
      .min(10, "تعداد کاراکتر ها باید 10 کاراکتر باشد"),
    phoneNumber: yup.string().required("فیلد شماره مبایل اجباری است").min(9),
    avatar: yup.string(),
  });

  // formik
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
      code: "",
      phoneNumber: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      mutate({
        ...values,
        avatar: files[0],
        code: parseInt(values.code),
        phoneNumber: parseInt(values.phoneNumber),
      });
    },
  });

  return (
    <div className="flex items-center justify-center flex-col p-8 md:pr-10 h-full overflow-auto">
      <div
        className="grid grid-cols-1 gap-10 text-right md:w-2/5 sm:w-full"
        dir="rtl"
      >
        {/* full name */}
        <TextField
          fullWidth
          id="name"
          name="name"
          color="secondary"
          placeholder="لطفا نام و نام خانوادگی خود را وارد کنید"
          label="نام و نام خانوادگی"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        {/* email */}
        <TextField
          fullWidth
          color="secondary"
          id="email"
          name="email"
          label="ایمیل"
          placeholder="لطفا ایمیل خود را وارد کنید"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        {/* code */}
        <TextField
          fullWidth
          id="code"
          name="code"
          label="کد ملی"
          color="secondary"
          placeholder="لطفا کد ملی خود را وارد کنید"
          type="number"
          value={formik.values.code}
          onChange={formik.handleChange}
          error={formik.touched.code && Boolean(formik.errors.code)}
          helperText={formik.touched.code && formik.errors.code}
        />
        {/* phone number */}
        <TextField
          fullWidth
          id="phoneNumber"
          name="phoneNumber"
          color="secondary"
          label="شماره مبایل"
          placeholder="لطفا شماره مبایل خود را وارد کنید"
          type="number"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        {/* password */}
        <TextField
          fullWidth
          id="password"
          name="password"
          color="secondary"
          placeholder="لطفا رمز عبور خود را وارد کنید"
          label="رمز عبور"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />

        <DropZone files={files} setFiles={setFiles} />
      </div>
      <div className="pt-5 flex justify-center gap-5 w-full">
        <Button
          color="secondary"
          variant="contained"
          type="submit"
          className="text-md w-30 h-10"
          onClick={() => formik.handleSubmit()}
        >
          ذخیره <SaveIcon className="ml-2" fontSize="small" />
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          type="submit"
          className="text-md w-30 h-10"
          onClick={() => {
            formik.resetForm();
            setFiles([]);
          }}
        >
          بازگردانی <RestartAltIcon className="ml-2" fontSize="small" />
        </Button>
      </div>
    </div>
  );
};

export default CreateUser;
