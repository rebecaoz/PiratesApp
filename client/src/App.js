import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage/MainPage.component';
import AddPirate from "./components/AddPirate/AddPirate.component";
import Details from './Pages/Details/Details.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index={true} path="/" element={<MainPage />} />
          <Route index={true} path="/new" element={<AddPirate />} />
          <Route index={true} path="/pirate/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
