import { Navbar } from './Navbar'
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return(
    <div>
      <Navbar/>
      <div className="text-white pt-16">
        <Link className="bg-blue-600 border border-blue-500 inline p-2 rounded " to="/1">Lauches</Link>    
      </div>
    </div>
  )
}