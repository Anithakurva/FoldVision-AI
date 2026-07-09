import { useState } from "react";
import Navbar from "./Navbar";
import UploadPanel from "./UploadPanel";
import Viewer3D from "./Viewer3D";

function Home() {
  const [image, setImage] = useState(null);
  const [fold, setFold] = useState(false);

  return (
    <div> 
      <Navbar />

      <h1 style={{ textAlign: "center" }}>FoldVision AI</h1>
      <p style={{ textAlign: "center" }}>
        Intelligent 2D to 3D Folding Engine
      </p>

      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button
          onClick={() => setFold(!fold)}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {fold ? "Fold Box" : "UnFold Box"}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
        }}
      >
        <UploadPanel setImage={setImage} />
        <Viewer3D image={image} fold={fold} />
      </div>
    </div>
  );
}

export default Home;