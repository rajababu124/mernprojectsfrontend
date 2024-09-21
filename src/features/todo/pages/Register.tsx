import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useMutation } from 'react-query';
import { CircularProgress, Button } from '@mui/material';
import { registerAPI } from '../api/todoAPI';
import { registerValidationSchema } from '../validations/validations';
import { Link, useNavigate } from 'react-router-dom'
import { FaLock } from "react-icons/fa";



const RegisterForm = () => {
  const navigate = useNavigate()
  const mutation = useMutation(registerAPI);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={registerValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        mutation.mutate(values, {
          onSuccess: () => {
            setSubmitting(false); // Reset the form submission state
            navigate('/login')
            console.log('Registration successful :', values);
          },
          onError: () => {
            setSubmitting(false);
            console.error('Registration failed');
          },
        });
      }}
    >
      {({ isSubmitting }) => (
        
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        {/* Main Container */}
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg max-w-4xl w-full p-8">
          
          {/* Form Section */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Register</h2>
            
            <Form className="flex flex-col gap-4">
              {/* Name Field */}
              <div>
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="w-full rounded text-blue-700 todo border-2 px-2 py-2 border-blue-500"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
      
              {/* Email Field */}
              <div>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded text-blue-700 todo border-2 px-2 py-2 border-blue-500"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
      
              {/* Password Field */}
              <div>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="w-full rounded text-blue-700 todo border-2 px-2 py-2 border-blue-500"
                />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
      
              {/* Confirm Password Field */}
              <div>
                <Field
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-full rounded text-blue-700 todo border-2 px-2 py-2 border-blue-500"
                />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
              </div>
      
              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting || mutation.isLoading}
              >
                {mutation.isLoading ? <CircularProgress size={24} /> : 'Register'}
              </Button>
                <div className="text-center">
                  Have an account? <Link to='/login'>login</Link>
                </div>
              {/* Error Handling */}
              {mutation.isError && (
                <div className="error">Registration failed. Please try again.</div>
              )}
            </Form>
          </div>
      
          {/* Text and Icon Section */}
          <div className="hidden md:block md:w-1/2 bg-blue-500 text-white p-6 rounded-r-lg flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Join Us Today</h3>
            <p className="mb-6">
              Register to unlock exclusive features, track your tasks, and stay organized. It only takes a minute to sign up!
            </p>
      
            <div className="flex items-center space-x-4">
              <span className="material-icons text-4xl"><FaLock /></span>
              <span className="material-icons text-4xl"><FaLock /></span>
              <span className="material-icons text-4xl"><FaLock /></span>
            </div>
          </div>
        </div>
      </div>
      
      )}
    </Formik>
  );
};

export default RegisterForm;
