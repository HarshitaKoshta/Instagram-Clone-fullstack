import { Routes, Route } from "react-router-dom";
import './App.css'
import Insta from './insta'
// import Upload from './Upload'
import Home from "./Home";
import CreatePost from "./CreatePost";
import Profile from "./Profile";
import SignUp from "./SignUp";
import Reels from "./Reels";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Insta />} />
        {/* <Upload/> */}
        <Route path='/home' element={<Home />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/create' element={<CreatePost/>} />
         <Route path='/profile' element={<Profile/>} />
         <Route path='/reels' element={<Reels/>} />

        </Routes>
    </div>
  )
}

export default App
