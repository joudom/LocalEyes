import React from 'react'
import LeftFilter from './LeftFilter';
import Navigation from './Navigation';
import PostGrid from './PostGrid';

const Home = () => {
  return (
      <div>
          <Navigation/>
          <div className="wrapper">
            <LeftFilter/>
            <PostGrid/>
          </div>
    </div>
  )
}

export default Home