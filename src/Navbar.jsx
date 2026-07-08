function Navbar() {
  return (
    <header
      style={{
        background: "#111827",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h2 style={{ margin: 0 }}>FoldVision AI</h2>
        <p style={{ margin: 0, fontSize: "14px" }}>
          Intelligent 2D → 3D Folding Engine
        </p>
      </div>

      <div>
        <button>Upload</button>
      </div>
    </header>
  );
}

export default Navbar;