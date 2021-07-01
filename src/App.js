import './App.css';
import Nation from './components/Nation/Nation';
import CountryDetail from './components/CountryDetail/CountryDetail';
import NotFound from './NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Nation/>
          </Route>

          <Route path="/country/:cName">
            <CountryDetail/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
