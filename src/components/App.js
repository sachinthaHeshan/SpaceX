import { graphql } from '@apollo/client/react/hoc';
import query from '../queries/launches'
import { Navbar } from './Navbar'
import { LaunchList } from './LaunchList'

const  App = ( props ) => {
  console.log(props)

  const renderLaunchers = () => {
    if(props.data.loading){
      return(<h1>Loading...</h1>)
    }
    else{
      return (
        <LaunchList launchData={ props.data.launchesPast }/>
      );
    }
  }

  return(
    <div className="App text-white">
      <Navbar/>
      {
        renderLaunchers()
      }
    </div>
  )

}

export default graphql(query)(App);
