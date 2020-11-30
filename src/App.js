import { Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

function App() {  

  return (
    <div className="App">
      <section className="App-content">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search/:keyword' component={SearchResult} />
            <Route exact path='/search/:id' component={Detail} />
            {/* <Route exact component={NotFound} /> */}
          </Switch>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App; 
