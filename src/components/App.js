import css from './App.module.css';
import Home from './Home';
import StoreContextProvider from 'contexts/StoreContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return(
    <Router basename={process.env.PUBLIC_URL}>
      <StoreContextProvider>
        <div className={css.container}>
          <main>
            <Switch>
              <Route path="/:buildingId?">
                <Home/>
              </Route>
              <Route path="/">
                <Home/>
              </Route>
            </Switch>
          </main>
        </div>
      </StoreContextProvider>
    </Router>
  );
}

export default App;
