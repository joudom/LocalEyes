import React from 'react'
import LeftFilter from './LeftFilter';
import Navigation from './Navigation';
import PostGrid from './PostGrid';
import Footer from './Footer';

const Home = () => {
  return (
      <div>
          <Navigation/>
          <div className="wrapper">
            <LeftFilter/>
            <PostGrid/>
          </div>
          <Footer/>
    </div>
  )
}

export default Home