import React from "react";

const ScreenContainer = ({className, children }) => {
  return <div className={"min-h-screen flex-center"}>{children}</div>;
};

export default ScreenContainer;
