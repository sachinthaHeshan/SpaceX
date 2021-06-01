import imageNotFound from '../images/image-not-found.png';
import { graphql } from '@apollo/client/react/hoc';
import { query } from '../queries/launches'
import { Spinner } from './Spinner.tsx';
import { PaginationBar } from './PaginationBar.js'
import { Navbar } from './Navbar.js'

const LaunchList = ( props ) => {
  
  if(props.data.loading){return(<Spinner/>)}

  else if(props.data.launchesPast.length == 0){
    return( 
      <>
        <Navbar/>
        <div className="text-white pt-60">
          <h1 className="text-center text-8xl">404</h1>
          <h2 className="text-center text-xl">Invalid page</h2>
        </div>
      </>
    )
  }

  else{
    return (
      <>
        <Navbar/>
        <div className="text-white pt-16">
        <h1 className="text-2xl pl-6 pt-4">✤ LAUNCHES</h1>
          {
            props.data.launchesPast.map(launch => {
              return(
                <div 
                  className="rounded-2xl border-4 bg-gray-500 border-gray-500 m-6"
                  key={launch.id}
                  style={{minHeight:"368px"}}
                >
                  <div className="rounded-lg p-1.5 pl-5 border-4 bg-gray-600 border-gray-600 m-1">
                    {launch.mission_name}
                  </div>
                  <img 
                    className="rounded-lg object-cover float-none  sm:float-left m-auto sm:m-1"
                    src={launch.links.flickr_images[0] ? launch.links.flickr_images[0] : imageNotFound}
                    style={{width:"300px",height:"300px"}}
                  />
                  <div className="">
                    Rocket Name :&nbsp;
                    <span className="text-sm">{launch.rocket.rocket_name}</span>
                    <br/>
                    Launch Date :&nbsp;
                    <span className="text-sm">{new Date(launch.launch_date_local).toDateString()}</span>
                    <br/>
                    Success :&nbsp;
                    <span className="text-sm">{launch.launch_success ? "✅" : "❌"}</span>
                    <br/>
                    Description :&nbsp;
                    <br/>
                    <span className="text-sm">{launch.details ? launch.details : ""}</span> 
                  </div>
                </div>
              )
            })
          }
        </div>
        <PaginationBar 
          dataCount={+props.data.launchesPast[0].id + ((+props.match.params.id-1)*10)} 
          currentPage={+props.match.params.id}
        />
      </>
    );
  }
}
  

export default graphql(query,{
  options: (props) => { 
    if(+props.match.params.id-1 < 0){ props.history.push('/1', {}) }
    return { variables: { offset: ( +props.match.params.id-1)*10 }  } 
  }
})(LaunchList);
