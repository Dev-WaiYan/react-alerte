import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ALERT from "../../constants/alert";
import { add, removeById } from "../../redux/slices/alertSlice";
import { generateId } from "../../utils/generator";
import AlertComponent from "./AlertComponent";
import styles from "./Alert.module.css";

// Logic - Start
export const useAlertReducer = () => {
  const dispatch = useDispatch();
  const addAlert = ({
    id = generateId(),
    alertType,
    alertTitle,
    text,
    link,
    timeLimit,
  }) => {
    if (!alertType) {
      alertType = ALERT.INFO;
    }

    if (!timeLimit) {
      timeLimit = ALERT.DEFAULT_TIME_LIMIT;
    }

    dispatch(
      add({
        id,
        alertType,
        alertTitle,
        text,
        link,
        timeLimit,
      })
    );
  };

  const removeAlertById = (id) => {
    dispatch(removeById(id));
  };

  return { addAlert, removeAlertById };
};
// Logic - End

function AlertManager() {
  const { removeAlertById } = useAlertReducer();
  const { alerts } = useSelector((state) => state.alert);

  // Handler - Start
  const getCurrentAlert = (alert) => {
    setTimeout(() => {
      removeAlertById(alert.id);
    }, [alert.timeLimit * 1000]);

    return (
      <AlertComponent
        alertTitle={alert.alertTitle}
        alertType={alert.alertType}
        link={alert.link}
        text={alert.text}
      />
    );
  };
  // Handler - End

  return (
    <div className={styles.alertComponentContainer}>
      {alerts.map((alert) => (
        <div key={alert.id} className={styles.alert}>
          {getCurrentAlert(alert)}
        </div>
      ))}
    </div>
  );
}

export default AlertManager;
