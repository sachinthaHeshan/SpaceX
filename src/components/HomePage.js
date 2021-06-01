import { Navbar } from './Navbar.js'
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return(
    <div>
      <Navbar/>
      <div className="text-white pt-16">
       
        <Link className="bg-blue-600 border " to="/1">Lauches</Link>
        
      </div>
    </div>
  )
}