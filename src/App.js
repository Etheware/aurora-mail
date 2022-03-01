import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mail from './mail';
import EmailList from './emailList';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Switch>
            <Route path='/mail'>
              <Mail />
            </Route>
            <Route path='/'>
              <EmailList />
            </Route>
          </Switch>

        </div>
      </div>
    </Router>    
  );
}

export default App;
