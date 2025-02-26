import React, { useState } from "react";
import useTimeout from "./useTimeout";

function TimeoutComponent() {
  const [message, setMessage] = useState("Waiting...");

  useTimeout(() => {
    setMessage("Timeout triggered!");
  }, 3000);

  return <h1>{message}</h1>;
}

export default TimeoutComponent;
