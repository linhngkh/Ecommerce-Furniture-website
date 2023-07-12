import ClipLoader from "react-spinners/ClipLoader";
import { useState } from "react";

const override = {
  display: "block",
  margin: "0 auto",
};

const Loader = ({ isLoading }) => {
  let [color] = useState("#3e3e44");
  return (
    <ClipLoader
      color={color}
      loading={isLoading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};

export default Loader;
