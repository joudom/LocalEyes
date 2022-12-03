import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const PostPage = () => {
  return (
    <>
      <Navigation />
          <div className="Container">
              <h1 className="lead">Quick snap and post the best local deals around you!</h1>
          </div>
          <Footer/>
    </>
  );
};

export default PostPage;
