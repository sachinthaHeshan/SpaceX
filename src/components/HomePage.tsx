import { Navbar } from './Navbar'
import { Link } from 'react-router-dom';

export const HomePage = () => {

  return(
    <div>
      <Navbar searchVisible={false}/>
      <div className="m-5 inline-block text-white pt-20">
        <Link className="bg-blue-600 border border-blue-500  p-2 rounded  " to="/1">
          Lauches
        </Link>    
      </div>
    </div>
  )

}