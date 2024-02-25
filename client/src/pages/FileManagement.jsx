import React from 'react'
// import { useAuth } from './AuthContext';
import Sidebar from '../components/Sidebar';
import FileUpload from '../components/FileUpload';
import SearchBar from '../components/SearchBar';

const FileManagement = () => {
    // const { isAuthenticated, login, logout } = useAuth();
  return (
    <div className="flex">
        <div className='w-1/6'>
            <Sidebar/>
        </div>
        <div className='w-5/6'>
        <FileUpload/>
        </div>
        {/* <p>Yoo</p> */}
    </div>
    //
  )
}

export default FileManagement
