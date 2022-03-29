import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Oval heigth="40" width="40" color="orange" />
      <h2>Loading...</h2>
    </div>
  );
};

export default Loader;
