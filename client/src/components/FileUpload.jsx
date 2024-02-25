// // import React, { useState } from 'react';
// // import SearchBar from './SearchBar';

// // const FileUpload = () => {
// //   const [file, setFile] = useState(null);

// //   const handleFileChange = (e) => {
// //     const selectedFile = e.target.files[0];
// //     setFile(selectedFile);
// //   };

// //   const handleDrop = (e) => {
// //     e.preventDefault();
// //     const selectedFile = e.dataTransfer.files[0];
// //     setFile(selectedFile);
// //   };

// //   const handleDragOver = (e) => {
// //     e.preventDefault();
// //   };

// //   const handleUpload = () => {
// //     // Handle file upload logic here
// //     console.log('Uploading file:', file);
// //   };

// //   return (
// //     <div className="bg-gray-100 rounded-md border-dashed border-2 border-gray-300 h-screen">
// //       <div className='mt-5'><SearchBar/></div>
// //       <div
// //         className="flex flex-col items-center justify-end h-5/6"
// //         onDrop={handleDrop}
// //         onDragOver={handleDragOver}
// //       >
        
// //         {file ? (
// //           <div>
// //             <p className='text-md mb-2'>File Selected: {file.name}</p>
// //             <button
// //               className=" bg-red-600 hover:bg-red-700 text-white font-bold rounded px-2 py-1"
// //               onClick={handleUpload}
// //             >
// //               Upload File
// //             </button>
// //           </div>
// //         ) : (
// //           <label className="cursor-pointer">
// //             <input
// //               type="file"
// //               className="hidden"
// //               onChange={handleFileChange}
// //             />
// //             <div className="flex flex-col items-center">
// //               <svg
// //                 className="w-8 h-8 text-gray-400"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 viewBox="0 0 24 24"
// //                 xmlns="http://www.w3.org/2000/svg"
// //               >
// //                 <path
// //                   strokeLinecap="round"
// //                   strokeLinejoin="round"
// //                   strokeWidth="2"
// //                   d="M12 6v6m0 0v6m0-6h6m-6 0H6"
// //                 ></path>
// //               </svg>
// //               <p className="mt-1 text-sm text-gray-600">
// //                 Drag & Drop or Click to Upload
// //               </p>
// //             </div>
// //           </label>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default FileUpload;



// import React, { useState } from 'react';
// import axios from 'axios';
// import SearchBar from './SearchBar';

// const FileUpload = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const selectedFile = e.dataTransfer.files[0];
//     setFile(selectedFile);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleUpload = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file', file);

//       // Make a POST request to the backend endpoint
//       const response = await axios.post('/api/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       // Handle the response from the backend if needed
//       console.log('Response from backend:', response.data);
//     } catch (error) {
//       // Handle errors if the request fails
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div className="bg-gray-100 rounded-md border-dashed border-2 border-gray-300 h-screen">
//       <div className='mt-5'><SearchBar/></div>
//       <div
//         className="flex flex-col items-center justify-end h-5/6"
//         onDrop={handleDrop}
//         onDragOver={handleDragOver}
//       >
        
//         {file ? (
//           <div>
//             <p className='text-md mb-2'>File Selected: {file.name}</p>
//             <button
//               className=" bg-red-600 hover:bg-red-700 text-white font-bold rounded px-2 py-1"
//               onClick={handleUpload}
//             >
//               Upload File
//             </button>
//           </div>
//         ) : (
//           <label className="cursor-pointer">
//             <input
//               type="file"
//               className="hidden"
//               onChange={handleFileChange}
//             />
//             <div className="flex flex-col items-center">
//               <svg
//                 className="w-8 h-8 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//                 ></path>
//               </svg>
//               <p className="mt-1 text-sm text-gray-600">
//                 Drag & Drop or Click to Upload
//               </p>
//             </div>
//           </label>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FileUpload;




import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    setFile(selectedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('file', file);

      // Make a POST request to the backend endpoint
      const response = await axios.post('http://127.0.0.1:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Handle the response from the backend if needed
      console.log('Response from backend:', response.data);
      // alert("hie");
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="bg-gray-100 rounded-md border-dashed border-2 border-gray-300 h-screen">
      <div className='mt-5'><SearchBar/></div>
      <div
        className="flex flex-col items-center justify-end h-5/6"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        
        {file ? (
          <div>
            <p className='text-md mb-2'>File Selected: {file.name}</p>
            <button
              className=" bg-red-600 hover:bg-red-700 text-white font-bold rounded px-2 py-1"
              onClick={handleUpload}
            >
              Upload File
            </button>
          </div>
        ) : (
          <label className="cursor-pointer">
            <input
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
            <div className="flex flex-col items-center">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <p className="mt-1 text-sm text-gray-600">
                Drag & Drop or Click to Upload
              </p>
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default FileUpload;

