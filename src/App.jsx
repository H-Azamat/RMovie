import { Route, Switch } from 'react-router-dom';
import {Navbar} from './components'
import {HomeContainer} from './pages'

function App() {
  return (
    <div className="App">

      <Navbar />

      <Switch>
        <Route path={'/p/:page'} >
          <HomeContainer />
        </Route>
        <Route path={'/'} exact>
          <HomeContainer />
        </Route>
      </Switch>


    </div>
  );
}

export default App;
