import { Routes, Route } from "react-router";
import Movies from "./Movies/Movies";
import Movie from "./Movie/Movie";
import MovieForm from "./Movies/MovieForm";


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Movies />}></Route>
        <Route exact path="/new" element={<MovieForm />}></Route>
        <Route exact path="/movies/:id" element={<Movie />}></Route>
      </Routes>
    </>
  );
}

export default App;

