
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './modules/home/Home';
import Navigation from './modules/navigation/Navigation';
import NotFound from './modules/errors/NotFound';
import Table from "./modules/tables/Table";
import Waiters from "./modules/waiters/Waiters";
import Menu from "./modules/menu/Menu"
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {fetchWaiters} from './store/actions/waiters';
import {fetchTables} from './store/actions/tables';
import {fetchMenu} from './store/actions/menu';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWaiters());
    dispatch(fetchTables());
    dispatch(fetchMenu());
  }, [])
  return (
    <div >
      <Router>
        <Navigation />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/menu' element={<Menu />}/>
          <Route path='/tables' element={<Table />}/>
          <Route path='/waiters' element={<Waiters />}/>
          <Route path='*' element={<NotFound />}  />
          <Route />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
