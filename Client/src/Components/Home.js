import React from 'react'
import LeftFilter from './LeftFilter';
import Navigation from './Navigation';
import PostBox from './Postbox';

const Home = () => {
  return (
      <div>
          <Navigation />
          <div className="wrapper">
          <LeftFilter />
          <PostBox/>
          </div>
          
    </div>
  )
}

export default Home