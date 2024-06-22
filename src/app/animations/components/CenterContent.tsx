import React, { useEffect, useRef, useState } from "react";

const CenterContent = () => {
  const centerElement = useRef(null);

  const [value, setValue] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        let centerX = document.documentElement.clientWidth / 2;
        let centerY = document.documentElement.clientHeight / 2;
        let elements = document.elementsFromPoint(centerX, centerY);
        console.log("🚀 ~ window.addEventListener ~ elem:", elements);

        setValue(elements?.[0]?.textContent);
      });
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", () => {});
      }
    };
  }, []);
  return <div className="fixed top-0 left-0">{value}</div>;
};

export default CenterContent;
