import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ViewMemory from './components/ViewMemory';
import Dashboard from './components/Dashboard';
import EditMemory from './components/EditMemory'


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='App-body'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/memory/:id' element={<ViewMemory />} />
            <Route path='/memory/edit/:id' element={<EditMemory />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;