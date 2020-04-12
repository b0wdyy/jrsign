import React from "react";

export const Wrapper: React.FC = (props) => {
  const styles = {
    width: "88%",
    margin: "0 auto",
  };
  return <div style={styles}>{props.children}</div>;
};
