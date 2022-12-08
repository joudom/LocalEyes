import { useState } from "react";
import axios from 'axios'
import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Upload = () => {
  const [files, setFiles] = useState([]);

  const onInputChange = (e) => {
    setFiles(e.target.files);
  };

    const onSubmit = (e) => {
        e.preventDefault()
        
        const data = new FormData()
        for (let i = 0; i < files.length; i++) {
            data.append("file", files[i])
        }

    

        axios.post('//localhost:8000/upload', data)
            .then((e) => {
            console.log("successful")
            })
            .catch((e) => {
            console.log("error, try again", e)
        })
  }
    
  return (
    <div className="upload-container">
      <Navigation />
      <div className="file-upload">
        <form method="post" action="#" id="#" onSubmit={onSubmit}>
          <div class="form-group files">
            <label>Upload Your File </label>
            <input
              onChange={onInputChange}
              type="file"
              class="form-control"
              multiple
            />
                  </div>
                  <button>Submit</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Upload;
