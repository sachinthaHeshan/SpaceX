import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { FC } from 'react'

export const Navbar:FC = () => {

  return(
    <div className="h-16 top-0 opacity-90 fixed w-full flex items-center bg-black">
      <Link to="/">
        <img className="pl-6" alt="SapceX Logo" src={logo}/>
      </Link>
    </div>
  )
  
}