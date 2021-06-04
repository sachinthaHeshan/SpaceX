import { Link, Redirect } from 'react-router-dom';
import logo from '../images/logo.png';
import { PopupSearchBar } from './PopupSearchBar'
import { FC, useState } from 'react'

interface NavbarProps{
  searchVisible: boolean,
  search?:string
}

export const Navbar:FC<NavbarProps> = ({ searchVisible, search }) => {

  const [ searchValue, setSearchValue ] = useState(search ? search : "");
  const [ popUpSearchVisible, setPopUpSearchVisible ] = useState(false);

  return(
    <>
      <div className="h-16 top-0 opacity-90 fixed w-full flex justify-between bg-black items-center pr-6">

        <Link to="/">
          <img className="pl-6" alt="SapceX Logo" src={logo}/>
        </Link>
        { searchVisible 
          ? <div className="whitespace-nowrap bg-gray-900 p-1 rounded-full">
              <input
                value={searchValue} 
                onChange={(event) => setSearchValue(event.target.value)}
                className=" rounded-full text-white hidden bg-gray-900 
                            sm:inline outline-none  pl-4 border-4
                            focus:border-gray-900 border-gray-900 "
                placeholder="Search ..."
              />
      
              <Link
                className="hidden bg-gray-700 p-2  rounded-full sm:inline" 
                to={"/1/"+searchValue}
              >
                <i className="fa fa-search text-white text-xl"/>
              </Link>

              <button
                className="focus:outline-none inline bg-gray-700 rounded-full p-1 px-2 sm:hidden"
                onClick={() => setPopUpSearchVisible(true)}
              >
              <i className="fa fa-search text-white  text-xl"/>
              </button>

            </div> 
          : "" 
        }
        

      </div>
      { 
        popUpSearchVisible 
          ? <PopupSearchBar 
              onchange={setSearchValue}  
              value={searchValue} 
              setVisible={setPopUpSearchVisible}
            /> 
          : ""
      }
    </>
  )
  
}