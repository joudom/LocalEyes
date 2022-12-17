import React, { useState, useEffect } from 'react'
import LeftFilter from './LeftFilter';
import Navigation from './Navigation';
import PostGrid from './PostGrid';
import Footer from './Footer';


const Home = ({ posts, setPosts, setItem, setCategory }) => {
  return (
      <div>
          <Navigation/>
          <div className="wrapper">
            <LeftFilter setCategory={setCategory}/>
            <PostGrid posts={posts} setPosts={setPosts} setItem={setItem}/>
          </div>
          <Footer/>
    </div>
  )
}

export default Home