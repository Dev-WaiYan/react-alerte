import React, { useState } from "react";
import { useAlertReducer } from "../../components/alert/AlertManager";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import ALERT from "../../constants/alert";
import { generateId } from "../../utils/generator";
import styles from "./Playground.module.css";

function Playground() {
  // Local state - Start
  const [alertRequests, setAlertRequests] = useState([]);
  const defaultInputs = {
    alertType: "",
    alertTitle: "",
    text: "",
    link: "",
    timeLimit: "",
  };
  const [inputs, setInputs] = useState(defaultInputs);
  // Local state - End

  // Handler - Start
  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const addRequest = () => {
    setAlertRequests([...alertRequests, { id: generateId(), ...inputs }]);
    setInputs(defaultInputs);
  };

  const cancelRequest = (id) => {
    setAlertRequests(
      alertRequests.filter((alertRequest) => alertRequest.id !== id)
    );
  };

  const { addAlert } = useAlertReducer();
  const submit = () => {
    alertRequests.forEach((alertRequest) => addAlert(alertRequest));
    setAlertRequests([]);
  };
  // Handler - End

  return (
    <div className={styles.container}>
      <div className={styles.formComponent}>
        <Input
          value={inputs.alertTitle}
          name="alertTitle"
          id="alertTitle"
          onChange={handleOnChange}
          placeholder="Alert Title"
        />
      </div>
      <div className={styles.formComponent}>
        <Input
          value={inputs.text}
          name="text"
          id="text"
          onChange={handleOnChange}
          placeholder="Text"
        />
      </div>
      <div className={styles.formComponent}>
        <Input
          value={inputs.link}
          name="link"
          id="link"
          onChange={handleOnChange}
          placeholder="Link Url"
        />
      </div>
      <div className={styles.formComponent}>
        <Input
          type="number"
          value={inputs.timeLimit}
          name="timeLimit"
          id="timeLimit"
          onChange={handleOnChange}
          placeholder="Time Limit (second)"
          min={0}
        />
      </div>
      <div className={styles.formComponent}>
        <Select
          options={[
            { text: "Info", value: ALERT.INFO },
            { text: "Success", value: ALERT.SUCCESS },
            { text: "Warning", value: ALERT.WARNING },
            { text: "Error", value: ALERT.ERROR },
          ]}
          onChange={handleOnChange}
          name="alertType"
          id="alertType"
          value={inputs.alertType}
        />
      </div>

      <div className={styles.actionBtnContainer}>
        <Button onClick={addRequest}>Add</Button>
        <Button onClick={submit}>Start Action</Button>
      </div>

      <div className={styles.requestListContainer}>
        {alertRequests.map((alertRequest) => (
          <div key={alertRequest.id} className={styles.requestBox}>
            Alert Request - {alertRequest.id}
            <div>
              <Button onClick={() => cancelRequest(alertRequest.id)}>
                CANCEL
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Playground;
