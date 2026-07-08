import { useState } from "react";
 
function UploadPanel({ setImage }) { 
  const [preview, setPreview] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];

    if (file) {
  const imageURL = URL.createObjectURL(file);
  setPreview(imageURL);
  setImage(imageURL);
}
};

return (
    <div
      style={{
        width: "35%",
        minHeight: "500px",
        border: "2px dashed #3b82f6",
        borderRadius: "12px",
        padding: "20px",
        background: "#f8fafc",
      }}
    >
      <h2>Upload 2D Layout</h2>

      <p>Upload your PDF or PNG dieline.</p>

      <input
        type="file"
        accept=".png,.jpg,.jpeg"
        onChange={handleUpload}
      />

      <div
        style={{
          marginTop: "20px",
          height: "300px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {preview ? (
          <img
            src={preview}
            alt="2D Preview"
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
          />
        ) : (
          "2D Preview"
        )}
      </div>
    </div>
  );
}

export default UploadPanel; 