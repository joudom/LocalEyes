import { useState } from "react";
import axios from "axios";
import React from "react";

import Button from "react-bootstrap/Button";
import { Form, Col, Row } from "react-bootstrap";
import {toast} from 'react-toastify'


export const Uploader = ({onSuccess}) => {
  const [files, setFiles] = useState([]);

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }

    axios
      .post("//localhost:8000/upload", data)
      .then((response) => {
        toast.success("Upload Successful")
        onSuccess(response.data)
      })
      .catch((e) => {
        toast.error("Upload Error")
      });
  };

  return (
    <>
      
      <div className="upload-container " >
        <div className="uploadInfo " style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       
      }}>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Macbook Pro 2016, GoPro Hero 9, etc.."
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Total</Form.Label>
                <Form.Control type="value" placeholder="$25.00" required/>
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" required/>
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control required/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control required/>
              </Form.Group>
            </Row>
          </Form>
        </div>

        <div className="file-upload ">
          <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div class="form-group files">
              <label>Upload Your File </label>
              <input
                onChange={onInputChange}
                type="file"
                class="form-control"
                multiple
                required
              />
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
          </div>
      
    </>
  );
};

