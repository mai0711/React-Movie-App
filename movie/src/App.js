// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Movie from './components/Movie/Movie';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      
      <h5>Trending Now</h5>
      <Movie />
      <h5>Continue watching</h5>
      <Movie />
      <h5>Top10 Movies</h5>
      <Movie />
      <h5>Award wining film</h5>
      <Movie />
      <Search />
    </div>
  );
}

export default App;
