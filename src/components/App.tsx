import { HashRouter as Router , Route} from 'react-router-dom';
import LaunchList from './LaunchList'
import { HomePage } from './HomePage'
import { FC } from 'react'

const  App:FC = () => {

  return(
    <Router>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/:id" component={LaunchList}/>
    </Router>
  )

}

export default (App);
