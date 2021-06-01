import { Navbar } from './Navbar'
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return(
    <div>
      <Navbar/>
      <div className="text-white pt-16">
       
        <Link to="/0">Lauches</Link>
        
      </div>
    </div>
  )
}