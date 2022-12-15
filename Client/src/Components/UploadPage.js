import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { UploadPreview } from "./UploadPreview";
import Uploader from "./Uploader";
import Footer from "./Footer";
import Navigation from "./Navigation";
import "react-toastify/dist/ReactToastify.css";


const UploadPage = () => {
  const [files, setFiles] = useState([]);
  const onSuccess = (savedFiles) => {
    setFiles(savedFiles);
  };
  return (
      <div>
        <Navigation />
        <Uploader onSuccess={onSuccess} />
        {/* <UploadPreview files={files} /> */}
        <ToastContainer />
        <Footer />
    </div>
  );
};

export default UploadPage;
