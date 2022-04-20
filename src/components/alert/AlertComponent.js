import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import styles from "./AlertComponent.module.css";

function AlertComponent({ alertType, alertTitle, text, link }) {
  // Handler - Start
  const handleOnClick = () => {
    if (link) {
      window.open(link, "_blank");
    }
  };
  // Handler - End

  return (
    <Alert
      severity={alertType}
      onClick={handleOnClick}
      className={link ? styles.link : ""}
    >
      <AlertTitle>{alertTitle}</AlertTitle>
      {text}
    </Alert>
  );
}

export default AlertComponent;
