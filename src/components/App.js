import { HashRouter as Router , Route} from 'react-router-dom';
import LaunchList from './LaunchList'
import { HomePage } from './HomePage'

const  App = ( props ) => {

  return(
    <Router>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/:id" component={LaunchList}/>
    </Router>
  )

}

export default (App);
