import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { GifsContextProvider } from './context/GifsContext';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Logo from './logo.png';

function App() {  

  return (
    <div className="App">
      <section className="App-content">
        <BrowserRouter>
          <Link to="/">
            <figure className="App-logo">
              <img alt='Giffy logo' src={Logo} />
            </figure>
          </Link>
          <GifsContextProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search/:keyword/:rating?' component={SearchResult} />
              <Route exact path='/gif/:id' component={Detail} />
              <Route path='/404' component={()=> <h1>404 :(</h1>} />
            </Switch>
          </GifsContextProvider>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App; 
