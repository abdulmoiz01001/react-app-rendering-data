import Header from './Header.js';
import './App.css';
import Moviee from './moviee.js';
import movie from './movie.json';

function App() {
  return (
    <div className='App'>
   <Header/>
   <div className='main'>{
    movie.map((element)=>{
      return(
      <Moviee 
      title={element.Title}
      year ={element.Year}
      img ={element.Poster}
      />
      )
    })
  }

  </div>
  </div>
  );
}

export default App;
