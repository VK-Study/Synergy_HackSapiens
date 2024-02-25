import { MoreVertical, ChevronLast, ChevronFirst } from "lucide-react"
import { useContext, createContext, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from "@fortawesome/fontawesome-svg-core"
import profile from '../images/profile.jpg'

const SidebarContext = createContext()

export default function Sidebar() {
  const [expanded, setExpanded] = useState(true)

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
      <img
      
            src="https://img.logoipsum.com/243.svg"
            className="w-5/6"
            alt=""
          />
        {/* <div className="px-2 py-4 flex justify-between items-center"> */}
        
           {/* <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button> */}
            <ul className="flex flex-col w-full h-3/4 justify-evenly font-bold">
            <li>File Management</li>
            {/* <li>Manual Review</li> */}
            {/* <li className="flex items-center font-medium rounded-md curson pointer bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 hover:bg-indigo-50 text-gray-600">
            </li> */}
        </ul>
        <div className='flex justify-center items-center h-16 w-full bottom-0'>
            <img class="h-16" src={profile} alt="image description"/>
            <div className='flex flex-col w-1/2 items-center justify-around'>
            <h4 className='font-semibold'>User 1</h4>
            <p>user1@cons.com</p>
            </div>  
        </div>

        {/* </div> */}
{/* 
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider> */}

        {/* <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div> */}
    {/*     <div>
       {isAuthenticated ? (
         <button onClick={logout}>Logout</button>
       ) : (
         <button onClick={login}>Login</button>
       )}
    </div> */}
      </nav>
    </aside>
  )
}

// export function SidebarItem({icon, text, active, alert }) {
//   const { expanded } = useContext(SidebarContext)
  
//   return (
//     <li
//       className={`
//         relative flex items-center py-2 px-3 my-1
//         font-medium rounded-md cursor-pointer
//         transition-colors group
//         ${
//           active
//             ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
//             : "hover:bg-indigo-50 text-gray-600"
//         }
//     `}
//     >
//       {icon}
//       <span
//         className={`overflow-hidden transition-all ${
//           expanded ? "w-32 ml-3" : "w-0"
//         }`}
//       >
//         {text}
//       </span>
//       {alert && (
//         <div
//           className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
//             expanded ? "" : "top-2"
//           }`}
//         />
//       )}

//       {!expanded && (
//         <div
//           className={`
//           absolute left-full rounded-md px-2 py-1 ml-6
//           bg-indigo-100 text-indigo-800 text-sm
//           invisible opacity-20 -translate-x-3 transition-all
//           group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
//       `}
//         >
//           {text}
//         </div>
//       )}
//     </li>
//   )
// }