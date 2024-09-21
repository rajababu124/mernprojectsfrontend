import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Field, Form, Formik } from 'formik';

// Styles extracted for cleaner code and scalability
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const EditModal: React.FC<any> = ({ open, task, onClose, onUpdate, onChange }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="edit-modal-title"
      aria-describedby="edit-modal-description"
    >
      <Box sx={style}>
        {/* Formik form */}
        <Formik
          initialValues={{
            task_title: task.title || '',
            task_description: task.task || '', // Initialize the task description
          }}
          onSubmit={(values) => {
            onUpdate(values); // Pass the updated values on form submission
          }}
        >
          {({ values, setFieldValue }) => (
            <Form>
              {/* Task Title Field */}
              <Field
                name="task_title"
                placeholder="Enter title"
                className="border-2 w-full mb-4 border-blue-500 py-2 px-2 text-blue-700 rounded"
              />
              
              {/* Task Description Field with ReactQuill */}
              <ReactQuill
                theme="snow"
                value={values.task_description} // Use Formik's value for task description
                onChange={(content : any) => setFieldValue('task_description', content)} // Manually update Formik state
                placeholder="Enter your task"
                className="border-2 rounded text-blue-700 px-2 py-2 border-blue-500"
              />

              {/* Submit Button */}
              <div className="mt-4 flex justify-end">
                <Button type="submit" variant="contained">Update</Button>
              </div>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default EditModal;
