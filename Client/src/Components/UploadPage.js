import { useState } from "react";
import { Uploader } from "./Uploader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UploadPreview } from "./UploadPreview";
import Footer from "./Footer";
import Navigation from "./Navigation";
const UploadPage = () => {
  const [files, setFiles] = useState([]);
  const onSuccess = (savedFiles) => {
    setFiles(savedFiles);
  };
  return (
      <div>
          <Navigation />
      <Uploader onSuccess={onSuccess} />
      <UploadPreview files={files} />
          <ToastContainer />
          <Footer />
    </div>
  );
};

export default UploadPage;
