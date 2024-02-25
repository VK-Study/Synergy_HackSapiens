// // import React, {useState} from 'react'


// // const Credentials = () => {

// //   const [password, setPassword] = useState('');
// //   const [showPassword] = useState(false);


// //   return (
// //     <div className='flex items-center justify-center h-screen'>
// //       <div className='p-5'>
// //         <form>
// //         <div className='h-48 flex flex-col justify-around'>
// //           <div>
// //             <input
// //             id="email"
// //             type="email"
// //             className="form-input w-80 h-10 bg-gray-100 text-black rounded-md p-2 shadow-md shadow-gray-400"
// //             placeholder="Enter your email address"
// //             required
// //           />
// //           </div>

// //           <div>
// //             <input
// //             id="password"
// //             type={showPassword ? 'text' : 'password'}
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             className="form-input w-80 h-10 bg-gray-100 text-black rounded-md p-2 shadow-md shadow-gray-400"
// //             placeholder="Enter Password"
// //             required
// //           />
       
// //           </div>
// //           <div>
// //           <button
// //             className="btn text-white bg-black hover:bg-red-600 w-1/3 p-1 rounded-lg text-lg shadow-md shadow-gray-400"
// //           >
// //             Login
// //           </button>
// //           </div>
// //         </div>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Credentials



// import React, { useState } from 'react';
// import FileUpload from './FileUpload';

// const Credentials = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   // Sample user data
//   const sampleUserData = [
//     { email: 'user1@cons.com', password: '123456' },
//     { email: 'user2@cons.com', password: 'qwerty' },
//     // Add more sample user data as needed
//   ];

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Check if entered email and password match any sample user data
//     const user = sampleUserData.find(u => u.email === email && u.password === password);

//     if (user) {
//       // Clear error message if authentication successful
//       setErrorMessage('');
//       // Perform login action (e.g., redirect to dashboard)
//       alert('Login successful')
      
//     } else {
//       // Set error message if authentication fails
//       setErrorMessage('Invalid email or password');
//     }
//   };

//   return (
//     <div className='flex items-center justify-center h-screen'>
//       <div className='p-5'>
//         <form onSubmit={handleLogin}>
//           <div className='h-48 flex flex-col justify-around'>
//             <div>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="form-input w-80 h-10 bg-gray-100 text-black rounded-md p-2 shadow-md shadow-gray-400"
//                 placeholder="Enter your email address"
//                 required
//               />
//             </div>

//             <div>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="form-input w-80 h-10 bg-gray-100 text-black rounded-md p-2 shadow-md shadow-gray-400"
//                 placeholder="Enter Password"
//                 required
//               />
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="btn text-white bg-black hover:bg-red-600 w-1/3 p-1 rounded-lg text-lg shadow-md shadow-gray-400"
//               >
//                 Login
//               </button>
//             </div>
            
//             {errorMessage && <div className="text-red-500">{errorMessage}</div>}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Credentials;

import React, { useState } from 'react';
// import FileUpload from './FileUpload';
import FileManagement from '../pages/FileManagement';
// import Home from './Home'; // Import the Home component

const Credentials = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [authenticated, setAuthenticated] = useState(false); // State variable for authentication status

  const handleLogin = () => {
    // Check if entered email and password match any sample user data
    const sampleUserData = [
      { email: 'user1@cons.com', password: '123456' },
      { email: 'user2@cons.com', password: 'qwerty' },
      // Add more sample user data as needed
    ];

    const user = sampleUserData.find(u => u.email === email && u.password === password);

    if (user) {
      // Clear error message if authentication successful
      setErrorMessage('');
      // Set authentication status to true
      setAuthenticated(true);
    } else {
      // Set error message if authentication fails
      setErrorMessage('Invalid email or password');
    }
  };

  // Render the Home component if authenticated, otherwise render the login form
  return authenticated ? (
    <FileManagement/>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <div className='p-5'>
        <div className='h-48 flex flex-col justify-around'>
          <div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input w-80 h-10 bg-gray-100 text-black rounded-md p-2 shadow-md shadow-gray-400"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input w-80 h-10 bg-gray-100 text-black rounded-md p-2 shadow-md shadow-gray-400"
              placeholder="Enter Password"
              required
            />
          </div>

          <div>
            <button
              onClick={handleLogin}
              className="btn text-white bg-black hover:bg-slate-900 w-1/3 p-1 rounded-lg text-lg shadow-md shadow-gray-400"
            >
              Login
            </button>
          </div>
          
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

export default Credentials;
