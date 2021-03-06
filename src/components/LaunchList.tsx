import imageNotFound from '../images/image-not-found.png';
import { useQuery } from '@apollo/client';
import { query } from '../queries/launches'
import { Spinner } from './Spinner';
import { PaginationBar } from './PaginationBar'
import { Navbar } from './Navbar'
import { FC } from 'react';

interface LaunchListProps {
  data: {
    loading: boolean,
    launchesPast: [Launch],
    dataCount: []
  },
  match: {
    params: {
      page: string,
      search: string
    }
  },
  history: any
}

interface Launch {
  id: number,
  mission_name: string,
  links: {
    flickr_images: any[]
  },
  rocket: {
    rocket_name: string
  },
  launch_date_local: string,
  launch_success: boolean,
  details: string,
}

export const LaunchList:FC<LaunchListProps> = ( { match, history } ) => {

  const page = +match.params.page ? +match.params.page : 1

  if(page-1 < 0){ history.push('/1', {}) }

  const search = match.params.search ? match.params.search : "" 

  const { loading, error, data } = useQuery(query, {
    variables: {
      offset: ( page-1)*10 ,
      search 
    }
  });
  
  if(loading){return(<Spinner/>)}

  if(error){

    return(
      <>
      <Navbar searchVisible={false}/>
      <div className="text-white pt-60">
          <h1 className="text-center text-8xl">Error</h1>
          <h2 className="text-center text-xl">{error}</h2>
      </div>
      </>
    )

  }

  if(data.dataCount.length > 0 && data.launchesPast.length < 1){

    return( 
      <>
        <Navbar searchVisible={true} search={search}/>
        <div className="text-white pt-60">
          <h1 className="text-center text-8xl">404</h1>
          <h2 className="text-center text-xl">Invalid URL</h2>
        </div>
      </>
    )

  }

  if(data.dataCount.length < 1 && search !== ""){

    return( 
      <>
        <Navbar searchVisible={true} search={search}/>
        <div className="text-white pt-60">
          <h1 className="text-center text-xl text-yellow-300">
            No Results Found 
            <br/>
            <i className="text-center fa fa-frown-o" style={{fontSize:"24px"}}></i>
          </h1>
          <h2 className="text-center text-xl">
            " {search} "
          </h2>
        </div>
      </>
    )

  }

  else{

    return (
      <>
        <Navbar searchVisible={true} search={search}/>
        <h1 className="text-2xl pl-6 pt-20 text-white">??? LAUNCHES</h1>
        <div className="md:grid md:grid-cols-2 text-white ">
          {
            data.launchesPast.map((launch:Launch) => {
              return(
                <div 
                  className="rounded-2xl border-4 bg-gray-800 border-gray-700 m-6 p-2"
                  key={launch.id}
                >
                  <div className="rounded-lg p-1.5 bg-gray-600 border-gray-600">
                    {launch.mission_name}
                  </div>
                  <img 
                    className="rounded-lg object-cover mt-2"
                    src={launch.links.flickr_images[0] ? launch.links.flickr_images[0] : imageNotFound}
                    style={{width:"100%",height:"300px"}}
                    alt={launch.mission_name}
                  />
                  <div className="p-2 text-sm">
                    Rocket Name :&nbsp;
                    <span className="text-xs">{ launch.rocket.rocket_name }</span>
                    <br/>
                    Launch Date :&nbsp;
                    <span className="text-xs">{ new Date(launch.launch_date_local).toDateString() }</span>
                    <br/>
                    Success :&nbsp;
                    <span className="text-xs">{ launch.launch_success ? "???" : "???" }</span>
                    <br/>
                    Description :&nbsp;
                    <br/>
                    <span className="text-xs">{ launch.details ? launch.details : "" }</span> 
                  </div>
                </div>
              )
            })
          }
        </div>

        <PaginationBar
          dataCount={+data.dataCount.length} 
          currentPage={page}
          searchValue={search}
        />
      </>
    );

  }
}