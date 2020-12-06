import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import { GifsContextProvider } from './context/GifsContext';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

function App() {  

  return (
    <div className="App">
      <section className="App-content">
        <BrowserRouter>
          <GifsContextProvider>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/search/:keyword' component={SearchResult} />
              <Route exact path='/gif/:id' component={Detail} />
              {/* <Route exact component={NotFound} /> */}
            </Switch>
          </GifsContextProvider>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App; 
