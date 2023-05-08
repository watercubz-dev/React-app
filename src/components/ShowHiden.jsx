import React, { useState } from "react";

function ShowHiden() {
  const [show, setShow] = useState(false);

  const handleclick = () => {
    setShow(!show);
  };
  return (
    <div>
      {show && <h2>HIDE ME!</h2>}

      <button onClick={handleclick}>{show ? "Hide" : "Show"}Text</button>
    </div>
  );
}

export default ShowHiden;
