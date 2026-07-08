import { useState } from "react";
import Navbar from "./Navbar";
import UploadPanel from "./UploadPanel";
import Viewer3D from "./Viewer3D";

function Home() {
  const [image, setImage] = useState(null);

  return ( 
    <div>
      <Navbar />

      <h1>FoldVision AI</h1>
      <p>Intelligent 2D to 3D Folding Engine</p>

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        <UploadPanel setImage={setImage} />
        <Viewer3D image={image} />
      </div>
    </div>
  );
}

export default Home;