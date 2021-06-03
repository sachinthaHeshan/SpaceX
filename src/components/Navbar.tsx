import { Link } from 'react-router-dom';
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
          ? <div className="whitespace-nowrap ">
              <input id="hihi"
                type="text" 
                value={searchValue} 
                onChange={(event) => setSearchValue(event.target.value)}
                className="rounded-full hidden sm:inline outline-none p-1 pl-4 border-4 focus:border-blue-400 border-blue-200"
                placeholder="search..."
              />
      
              <Link
                className="hidden sm:inline" 
                to={"/1/"+searchValue}
              >
                <i className="fa fa-search text-white ml-2 text-2xl"/>
              </Link>
              <button
                className="focus:outline-none inline sm:hidden"
                onClick={() => setPopUpSearchVisible(true)}
              >
              <i className="fa fa-search text-white ml-2 text-2xl"/>
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