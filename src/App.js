import { Routes, Route } from 'react-router';
import Home from './view/Home/Home';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PostList from './view/PostList/PostList';

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<PostList/>}/>
      </Routes>
    </div>
  );
}

export default App;
