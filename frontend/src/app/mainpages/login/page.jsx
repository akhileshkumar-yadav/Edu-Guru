'use client';

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import useAppContext from '../../../context/appcontext';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Must contain a lowercase letter')
    .matches(/[A-Z]/, 'Must contain an uppercase letter')
    .matches(/[0-9]/, 'Must contain a number')
    .matches(/[!@#$%^&*]/, 'Must contain a special character')
    .required('Password is required'),
});

const Login = () => {
  const { setLoggedIn, setCurrentUser } = useAppContext();
  const router = useRouter();

  const LoginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { resetForm }) => {
      axios.post('http://localhost:5000/user/authenticate', values)
        .then((res) => {
          const userData = res.data.user;

          // Store user in localStorage
          if (typeof window !== 'undefined') {
            localStorage.setItem('user', JSON.stringify(userData));
          }

          setLoggedIn(true);
          setCurrentUser(userData);
          toast.success('Login successful');
          resetForm();

          // Role-based routing
          if (userData.role === 'admin') {
            router.push('/admin/dashboard');
          } else {
            router.push('/');
          }
        })
        .catch((err) => {
          console.error(err);
          toast.error('Invalid credentials');
        });
    },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <form onSubmit={LoginForm.handleSubmit} className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={LoginForm.handleChange}
            onBlur={LoginForm.handleBlur}
            value={LoginForm.values.email}
            className="w-full px-3 py-2 border rounded-md mt-1"
          />
          {LoginForm.touched.email && LoginForm.errors.email && (
            <p className="text-red-500 text-sm mt-1">{LoginForm.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={LoginForm.handleChange}
            onBlur={LoginForm.handleBlur}
            value={LoginForm.values.password}
            className="w-full px-3 py-2 border rounded-md mt-1"
          />
          {LoginForm.touched.password && LoginForm.errors.password && (
            <p className="text-red-500 text-sm mt-1">{LoginForm.errors.password}</p>
          )}
        </div>

        <div className="flex justify-between items-center text-sm mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <Link href="/mainpages/forgot-password" className="text-blue-600 hover:underline">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account? <Link href="/mainpages/register" className="text-blue-600 hover:underline">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
