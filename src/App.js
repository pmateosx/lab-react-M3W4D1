import { Routes, Route } from 'react-router';
import Home from './view/Home/Home';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PostList from './view/PostList/PostList';
import UsersList from './view/Users/UsersList';
import UserDetail from './view/Users/UserDetail';
import { useTheme } from './contexts/ThemeContext'

function App() {
  const { theme }  = useTheme()
  return (
    <div className={`App ${theme}`}>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<PostList/>}/>
        <Route path="/users" element={<UsersList/>}/>
        <Route path="/users/:id" element={<UserDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
