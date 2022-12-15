import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";


const Uploader = ({ onSuccess }) => {
  const initialUserData = {
    name: "",
    store: "",
    total: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    photos: []
  };
  
  const [files, setFiles] = useState([]);
  const [userData, setUserData] = useState(initialUserData)

  const updateUserDataHandler = useCallback( (type) => (event) => {
    setUserData({...userData, [type]: event.target.value}, [userData])
  })

  const formHandler = useCallback( (type ) => (event) => {
    console.log('inside formhandler')
    event.preventDefault()
    console.log(userData);
   
    }, 
    [userData]
    
  )
  // console.log(userData)


  useEffect(() => {
    setUserData({ 
      ...userData, 
      photos: files
    })
    // console.log(userData)
    }, [files])


  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("file", files[i]);
    }
    data.append('inputData', userData)

    // console.log(data)

    axios
      .post("//localhost:8000/upload", userData, {
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        // }
      })
      .then((response) => {
        toast.success("Upload Successful");
        onSuccess(response.data);
      })
      .catch((e) => {
        toast.error("Upload Error");
      });
  };

  return (
    <>
      <div className="upload-container ">
        <div
          className="uploadInfo "
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form method="post" action="#" id="#" onSubmit={formHandler()}>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Macbook Pro 2016, GoPro Hero 9, etc.."
                onChange={updateUserDataHandler("name")}
                required
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Store</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Best Buy"
                  onChange={updateUserDataHandler("store")}
                  required />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Total</Form.Label>
                <Form.Control
                  type="value"
                  placeholder="$25.00"
                  onChange={updateUserDataHandler("total")}
                  required />
              </Form.Group>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={updateUserDataHandler("description")}
                required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={updateUserDataHandler("address")}
                required />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={updateUserDataHandler("city")}
                  required />
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
                <Form.Control
                  onChange={updateUserDataHandler("zip")}
                  required />
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

export default Uploader;