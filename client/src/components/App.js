import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router';
import Movies from './Movies/Movies';
import Movie from './Movie/Movie';
import MovieForm from './Movies/MovieForm';
import Navbar from './Navbar';
import Register from './Auth/Register';
import Login from './Auth/Login';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route exact path='/' element={<Movies />}></Route>
        <Route exact path='/new' element={<MovieForm />}></Route>
        <Route exact path='/movies/:id' element={<Movie />}></Route>
        <Route exact path='/register' element={<Register onLogin={setUser} />}></Route>
        <Route exact path='/login' element={<Login onLogin={setUser} />}></Route>
      </Routes>
    </>
  );  
}

export default App;

