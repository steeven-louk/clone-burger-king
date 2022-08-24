const LoaderComp = () => {
  return (
    <div
      className="loading"
      style={{
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#e0e224",
      }}
    >
      <img src="./assets/load.gif" alt="" />
    </div>
  );
};

export default LoaderComp;
