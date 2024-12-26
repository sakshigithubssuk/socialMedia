import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import CreatePost from './components/Createpost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-store';
function App() {
  const[selectTab, setselectTab]=useState("Home");
  return (
    <PostListProvider>
  <div className="app-container">
  <SideBar selectTab={selectTab} setselectTab={setselectTab}></SideBar>
  <div className="content">
  <Header></Header>
  {selectTab==='Home'&& (<PostList></PostList>)}
  {selectTab==='CreatePost' && (<CreatePost></CreatePost>)
}
 
  <Footer></Footer>
    </div>
  </div>
  </PostListProvider>
  );
  
}
export default App;