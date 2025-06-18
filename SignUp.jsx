import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required('Full name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      password: Yup.string().min(6, 'Min 6 characters').required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm your password'),
    }),
    onSubmit: values => {
      localStorage.setItem('user', JSON.stringify(values));
      navigate('/signin');
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={formik.handleSubmit} className="p-8 bg-white rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-semibold text-center">Create Account</h2>
        <input name="fullName" placeholder="Full Name" {...formik.getFieldProps('fullName')} className="w-full p-2 border rounded" />
        {formik.touched.fullName && formik.errors.fullName && <div className="text-red-500 text-sm">{formik.errors.fullName}</div>}

        <input name="email" placeholder="Email" {...formik.getFieldProps('email')} className="w-full p-2 border rounded" />
        {formik.touched.email && formik.errors.email && <div className="text-red-500 text-sm">{formik.errors.email}</div>}

        <input name="password" type="password" placeholder="Password" {...formik.getFieldProps('password')} className="w-full p-2 border rounded" />
        {formik.touched.password && formik.errors.password && <div className="text-red-500 text-sm">{formik.errors.password}</div>}

        <input name="confirmPassword" type="password" placeholder="Confirm Password" {...formik.getFieldProps('confirmPassword')} className="w-full p-2 border rounded" />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>}

        <button type="submit" className="w-full p-2 bg-purple-600 text-white rounded">Create Account</button>
      </form>
    </div>
  );
};

export default SignUp;