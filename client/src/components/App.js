import { Routes, Route } from 'react-router';
import Movies from './Movies/Movies';
import Movie from './Movie/Movie';
import MovieForm from './Movies/MovieForm';
import Navbar from './Navbar';
import Register from './Auth/Register';
import Login from './Auth/Login';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Movies />}></Route>
        <Route exact path='/new' element={<MovieForm />}></Route>
        <Route exact path='/movies/:id' element={<Movie />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
      </Routes>
    </>
  );  
}

export default App;

