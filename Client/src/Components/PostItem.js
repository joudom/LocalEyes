import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const PostItem = () => {
  return (
    <>
      <Navigation />
          <div className="Container">
              <h1 className="lead">Posted Item</h1>
          </div>
          <Footer/>
    </>
  );
};

export default PostItem;
