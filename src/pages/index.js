import React from "react";

const Root = () => {
  React.useEffect(() => {
    window.location.href = "/docs/intro";
  }, []);
  return <div></div>;
};

export default Root;
