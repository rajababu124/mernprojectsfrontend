import { useFormik } from 'formik';

const TestingForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    },
  });
  console.log('formik :' ,formik)
  

  return (
    <div className="grid grid-cols-2 min-h-screen">
      {/* First grid column where the form is centered */}
      <div className="flex justify-center items-center bg-gray-100">
        <form 
          onSubmit={formik.handleSubmit} 
          className="bg-white p-8 shadow-md rounded-md max-w-md w-full"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none mb-4"
            placeholder="Enter your email"
          />

          <button 
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Second grid column (could be for other content) */}
      <div className="bg-purple-300"></div>
    </div>
  );
};

export default TestingForm;
