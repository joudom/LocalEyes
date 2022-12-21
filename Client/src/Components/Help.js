import React from "react";
import Navigation from "./Navigation";
import Accordion from "react-bootstrap/Accordion";
import Footer from "./Footer";

const Help = () => {
  return (
    <>
      <Navigation />
      <div className="container w-50 " style={{ height: "75vh" }}>
        <h1 className="helpTitle">How Do I use LocalEyes?</h1>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Register for an account</Accordion.Header>
            <Accordion.Body>
              Registering for an account is easy! Register with your email,
              username, password and zipcode and you will be a member of the
              LocalEyes community!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Upload your own local deal</Accordion.Header>
            <Accordion.Body>
              To create a post and upload your local deal you found at a store,
              click on the + button and fill out the form. Choose a .jpeg, .png,
              or a .jpg file in your device to get your deal uploaded. After
              submitting, you will be prompted with a notification that will say
              success or error if an error occured.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Browse local deals from users around you
            </Accordion.Header>
            <Accordion.Body>
              You will be able to view any local deals that users have posted in
              your area. Just click on an item that catches your eye, and you
              will be directed to a page with all the details and where its
              located!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Footer />
    </>
  );
};

export default Help;
