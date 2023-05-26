import React from "react";

const Postlayout = ({ children }) => {
  return (
    <div>
      <marquee style={{ background: "white", color: "purple" }}>
        MONICA ES LM :)
      </marquee>
      {children}
    </div>
  );
};

export default Postlayout;
