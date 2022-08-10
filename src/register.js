import { useFormik } from "formik";
import React from "react";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
    },
  });

  console.log("formikValue", formik.values);

  return (
    <div>
      <form action="">
        <input
          type="text"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <br/><br/>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <br/><br/>
        <input
          type="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </form>
    </div>
  );
};

export default Register;
