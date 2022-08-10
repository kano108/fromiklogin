import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      name: "",
      email: "",
      status: "",
      country:"",
    },
    validationSchema:Yup.object({
        username:Yup.string()
                    .max(10,"username must be less 10 character")
                    .required("this  is required field"),
        name:Yup.string()
                .required("this is required field"),
        email:Yup.string()
                  .email("please provide valid Email")
                  .required("this is required field"),
        status:Yup.string()
                  .required("this is required field"),
        country:Yup.string()
                  .required("this is required field"),  
    }),
    onSubmit: (values) => {
      console.log("form submit", values);
    },
  });

    // console.log("formikError", formik.touched);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="username"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.username}
          placeholder="enter yor username"
          />
          {formik.touched.username && formik.errors.username && <p style={{color:"red"}}>{formik.errors.username}</p>}
        <br />
        <br />
        <input
          type="text"
          name="name"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="enter yor name"
        />
        {formik.touched.name && formik.errors.name && <p style={{color:"red"}}>{formik.errors.name}</p>}

        <br />
        <br />
        <input
          type="email"
          name="email"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="enter yor email"
        />
        {formik.touched.email && formik.errors.email && <p style={{color:"red"}}>{formik.errors.email}</p>}

        <br />
        <br />
        <span>Select Your Gender</span>
        <br />
        <label htmlFor="">Male</label>
        <input
          type="radio"
          name="status"
        //   onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value="male"
        />

        <label htmlFor="">FeMale</label>
        <input
          type="radio"
          name="status"
        //   onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value="female"
        />
        {formik.touched.status && formik.errors.status && <p style={{color:"red"}}>{formik.errors.status}</p>}

        <br />
        <br />
        <select name="country" onBlur={formik.handleBlur} onChange={formik.handleChange}>     
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="Nepal">Nepal</option>
            <option value="Caneda">Caneda</option>
        </select> 
       {formik.touched.country && formik.errors.country && <p style={{color:"red"}}>{formik.errors.country}</p>}

        <br />
        <br />  
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
