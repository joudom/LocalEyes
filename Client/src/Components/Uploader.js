import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import { Form, Col, Row } from "react-bootstrap";
import { toast } from "react-toastify";
import { StateList } from "./StateList";

const Uploader = ({ onSuccess, StateList }) => {
  const initialUserData = {
    item: "",
    store: "",
    total: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    // photos: [],
    category: ""
  };

  const [files, setFiles] = useState();
  const [userData, setUserData] = useState(initialUserData);
  const [state, setState] = useState();

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


  // useEffect(() => {
  //   setUserData({ 
  //     ...userData, 
  //     photos: files
  //   })
  //   // console.log(userData)
  //   }, [files])

  // const convertToBase64 = (fileUploaded) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(fileUploaded);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // }

  const onInputChange = async (e) => {

    setFiles(e.target.files);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }

    // const data = new FormData();
    // for (let i = 0; i < files.length; i++) {
    //   data.append("file", files[i]);
    // }
    const formData = new FormData();
    for (let key in userData) {
      formData.append(key, userData[key]);
    }
    //formData.append('userData', userData);
    //console.log(files);
    const arr = [...files];
    arr.forEach((file, id) => {
      formData.append(`file-${id}`, file, file.name);
    })
    console.log(userData);
    // formData.append('userData', userData);

    axios
      .post("//localhost:8000/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
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
          <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Item</Form.Label>
                <Form.Control
                  placeholder="Macbook Pro 2016, GoPro Hero 9, etc.."
                  onChange={updateUserDataHandler("item")}
                  required
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  defaultValue="Category"
                  onChange={updateUserDataHandler("category")}
                >
                  <option>Choose Category...</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Food">Food</option>
                  <option value="General">General</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Store</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Best Buy"
                  onChange={updateUserDataHandler("store")}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Total</Form.Label>
                <Form.Control
                  type="value"
                  placeholder="$25.00"
                  onChange={updateUserDataHandler("total")}
                  required
                />
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
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                placeholder="1234 Main St"
                onChange={updateUserDataHandler("address")}
                required
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={updateUserDataHandler("city")}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select
                  defaultValue="Choose..."
                  onChange={updateUserDataHandler("state")}
                >
                  <option>Choose...</option>
                  <option>AL</option>
                  <option>AK</option>
                  <option>AZ</option>
                  <option>AR</option>
                  <option>CA</option>
                  <option>CO</option>
                  <option>CT</option>
                  <option>DE</option>
                  <option>DC</option>
                  <option>FL</option>
                  <option>GA</option>
                  <option>FL</option>
                  <option>HI</option>
                  <option>ID</option>
                  <option>IL</option>
                  <option>IN</option>
                  <option>IA</option>
                  <option>KS</option>
                  <option>KY</option>
                  <option>LA</option>
                  <option>ME</option>
                  <option>MD</option>
                  <option>MA</option>
                  <option>MI</option>
                  <option>MN</option>
                  <option>MS</option>
                  <option>MO</option>
                  <option>MT</option>
                  <option>NE</option>
                  <option>NV</option>
                  <option>NH</option>
                  <option>NJ</option>
                  <option>NM</option>
                  <option>NC</option>
                  <option>OH</option>
                  <option>OR</option>
                  <option>PA</option>
                  <option>RI</option>
                  <option>SC</option>
                  <option>SD</option>
                  <option>TN</option>
                  <option>TX</option>
                  <option>UT</option>
                  <option>VT</option>
                  <option>VA</option>
                  <option>WA</option>
                  <option>WV</option>
                  <option>WI</option>
                  <option>WY</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  onChange={updateUserDataHandler("zip")}
                  required
                />
              </Form.Group>
            </Row>
          </Form>
        </div>

        <div className="file-upload ">
          <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
              <label>Upload Your File </label>
              <input         
                onChange={onInputChange}
                type="file"
                accept=".jpeg, .png, .jpg"
                class="form-control"
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