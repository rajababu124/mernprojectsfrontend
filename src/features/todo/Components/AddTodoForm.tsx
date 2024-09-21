  import { Formik, Form, Field } from 'formik';
  import { IoMdAdd } from "react-icons/io";
  import { useMutation, useQueryClient } from 'react-query';
  import { addTaskAPI } from '../api/todoAPI';
  import { validationSchema } from '../validations/validations';
  import { Button } from '@mui/material';

  const AddTodoForm = () => {
    const queryClient = useQueryClient();
    const addMutation = useMutation(addTaskAPI, {
      onSuccess: () => queryClient.invalidateQueries('tasks'),
    });

    return (
      <div className='h-full bg-white '>
      <Formik
          initialValues={{ task_title: '', task_description: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
              addMutation.mutate({ task_title: values.task_title, isCompleted: false });
              resetForm();
          }}
      >
          {({ isSubmitting, errors, touched }) => (
              <Form className='flex flex-col gap-4 w-full'>
                  <div className='flex justify-center items-center gap-4 w-full'>
                      <Field
                          name='task_title'
                          type='text'
                          placeholder='Enter the title'
                          className='w-full rounded text-gray-700 border px-4 py-2 border-gray-300 focus:outline-none  focus:border-blue-500'
                      />
                      <Button type='submit' size='large' variant='contained' className='bg-teal-600' disabled={isSubmitting}>
                          {<IoMdAdd size='24px' />} ADD
                      </Button>
                  </div>
                  {touched.task_title && errors.task_title ? '' : <div className=' my-5'><hr /></div>}
                  {errors.task_title && touched.task_title && (
                      <div className="error-container">
                          <h2 className='error-message'>{errors.task_title}</h2>
                      </div>
                  )}
              </Form>
          )}
      </Formik>
  </div>
  
    );
  };

  export default AddTodoForm;
