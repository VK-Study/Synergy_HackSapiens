import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Credentials = () => {

  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='p-5'>
        <form>
        <div className='h-48 flex flex-col justify-around'>
          <div>
            <input
            id="email"
            type="email"
            className="form-input w-80 h-10 bg-gray-100 text-black rounded-md p-2 shadow-md shadow-gray-400"
            placeholder="Enter your email address"
            required
          />
          </div>

          <div>
            <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input w-80 h-10 bg-gray-100 text-black rounded-md p-2 shadow-md shadow-gray-400"
            placeholder="Enter Password"
            required
          />
          <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className="absolute top-0 right-0 m-3"
                style={{ cursor: 'pointer' }}
              />
          {/* <i
          className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}
          
          onClick={togglePasswordVisibility}
          style={{ cursor: 'pointer' }}
          >
          </i> */}
          </div>
          <div>
          <button
            className="btn text-white bg-black hover:bg-red-600 w-1/3 p-1 rounded-lg text-lg shadow-md shadow-gray-400"
          >
            Login
          </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Credentials
