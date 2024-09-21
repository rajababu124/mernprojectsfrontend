import { Link, useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Home, Info, Contacts, Logout, AppRegistration } from '@mui/icons-material';

import { useState } from 'react';
import { FaUser, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {

  const user = localStorage.getItem('user')
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget); // Open menu when clicking on avatar
  };

  const handleClose = () => {
    setAnchorEl(null); // Close menu
  };

  const handleLogout = () => {
    // logout functionality here ...
    console.log('i am loggedout')
    localStorage.removeItem('token')
    navigate('/login')
    handleClose();
  };
  return (
    <div className="w-full  bg-white sticky top-0 z-50">
    <div className="border-b-2 border p-4">
      <div className="flex justify-between items-center text-blue-500">
        {/* Left Side: Branding */}
        <div className="left">
          <div className="text-xl font-bold tracking-wide">Diary Manager</div>
        </div>

        {/* Right Side: Navigation Links */}
        <div className="right">
          <div className="flex justify-center items-center gap-4">
            <Link to="/home" className="hover:text-blue-400 transition duration-300 flex items-center gap-1">
              <Home fontSize="small" /> <span>Home</span>
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition duration-300 flex items-center gap-1">
              <Info fontSize="small" /> <span>About</span>
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition duration-300 flex items-center gap-1">
              <Contacts fontSize="small" /> <span>Contact</span>
            </Link>

            <Link to="/test" className="hover:text-blue-400 transition duration-300 flex items-center gap-1">
              <AppRegistration fontSize="small" /> <span>Testing</span>
            </Link>
            {/* <Link to="/login" className="hover:text-blue-400 transition duration-300 flex items-center gap-1">
              <Login fontSize="small" /> <span>Login</span>
            </Link>
            <Link to="/register" className="hover:text-blue-400 transition duration-300 flex items-center gap-1">
              <AppRegistration fontSize="small" /> <span>Register</span>
            </Link> */}

            {/* User Avatar and Menu */}
            {user && (
              <Stack direction="row" spacing={2}>
                <IconButton  onClick={handleClick}>
                  <Avatar className="bg-blue-500">{user[0].toUpperCase()}</Avatar>
                </IconButton>

                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <MenuItem>
                  <div className='flex items-center gap-2'>  <FaUser fontSize="medium" className="flex items-center gap-2" /> {user}</div>
                  </MenuItem>
                  <hr />
                 
                  <MenuItem  className="flex items-center gap-2">
                  <div className='flex items-center gap-2'>  <FaUserCircle fontSize="large" /> Profile</div>
                  </MenuItem>

                  <MenuItem onClick={handleLogout} className="flex items-center gap-2">
                  <div>  <Logout fontSize="medium" /> Logout</div>
                  </MenuItem>
                </Menu>
              </Stack>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar
