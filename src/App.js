import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Details from './routes/Details';
import Update from './routes/Update';

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/restaurants/:id' element={<Details/>}/>
          <Route exact path='/restaurants/:id/update' element={<Update/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
