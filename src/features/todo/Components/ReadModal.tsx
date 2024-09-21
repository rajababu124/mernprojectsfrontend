// src/features/todo/Components/ReadModal.tsx

import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface ReadModalProps {
  open: boolean;
  task: string;
  onClose: () => void;
}

const ReadModal: React.FC<ReadModalProps> = ({ open, task, onClose }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="read-modal-title"
      aria-describedby="read-modal-description"
    >
      <Box sx={style}>
        {task}
      </Box>
    </Modal>
  );
};

export default ReadModal;
