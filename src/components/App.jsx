import { useState } from 'react'
import '../assets/CSS/App.css'

import {Navbar,Home,CreatePost,PostDetails} from './index';

import { Route, Routes} from 'react-router-dom';



function App() {

  return (
    <>
      <div className='container'>
        <Navbar />
        <Routes>
        <Route exact path='/' Component={Home} />
          <Route exact path='/post/:postID' Component={PostDetails} />
          <Route exact path='/post/create-post' Component={CreatePost} />
        </Routes>
      </div>
    </>
  )
}

export default App
