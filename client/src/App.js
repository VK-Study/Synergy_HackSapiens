// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import FileUpload from './components/FileUpload';
import Sidebar from './components/Sidebar';
import Login from './pages/Login';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
      <Route path="/FileUpload" element={FileUpload} />
      <Route path="/" element={Login} />
      </Routes>
    </BrowserRouter> */}
    <Login/>
    {/* <SearchBar/> */}

    <FileUpload/>
    </div>
  );
}

export default App;
