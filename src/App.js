import logo from './logo.svg';
import './App.css';
import Row from './Row'
import request from './requests';
import Banner from './Banner';
import Nav from './Nav';
// a80e4a21332997c86c4d3026de392872
// https://api.themoviedb.org/3/movie/550?api_key=a80e4a21332997c86c4d3026de392872

function App() {
  return (
    <>
  <div className='app'>
    <Nav/>
     <Banner/>
    <Row title="NETFLIX_ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow/>
    <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
    <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
    <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
    {/* <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} /> */}
    {/* <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
    <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
    <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} /> */}
   

</div>


    </>
  );
}

export default App;
