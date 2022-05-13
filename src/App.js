import logo from './logo.svg';
import './App.css';
import { MovieProvider } from './components/MovieContext';
import Nav from './components/Nav';
import MovieList from './components/MovieList';

function App() {
  return (
    
      <MovieProvider>
        <div className="App">
          <Nav/>
          <MovieList/>
        </div>
      </MovieProvider>
  
  );
}

export default App;
