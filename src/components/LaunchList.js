import rocketImage from '../images/falcon-9.jpg';
export const LaunchList = ( props ) => {
  console.log(props)
  return(
    <div>
      {
        props.launchData.map(launch => {
          return(
            <div 
              className="rounded-2xl border-4 bg-gray-500  border-gray-500 m-6"
              key={launch.id}
              style={{minHeight:"368px"}}
            >
             
              <div className="rounded-lg p-1.5 pl-5 border-4 bg-gray-600 border-gray-600 m-1">
                {launch.mission_name}
              </div>
    
              <img 
                className="rounded-lg object-cover float-none  sm:float-left m-auto sm:m-1"
                src={launch.links.flickr_images[0] ? launch.links.flickr_images[0] : rocketImage}
                style={{width:"300px",height:"300px"}}
              />

              <div className="">
                Rocket Name : 
                  <span className="text-sm">
                    {launch.rocket.rocket_name}
                  </span>
                <br/>
                Launch Date : 
                  <span className="text-sm">
                    {new Date(launch.launch_date_local).toDateString()}
                  </span>
                <br/>
                Success : 
                  <span className="text-sm">
                    {launch.launch_success ? "✅" : "❌"}
                  </span>
                <br/>
                Description : 
                <br/>
                  <span className="text-sm">
                    {launch.details ? launch.details : ""}
                  </span> 
              </div>

            </div>
          )
        })
      }
    </div>
  )
}