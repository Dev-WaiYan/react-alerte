import React, { useEffect, useState } from "react";
import styles from "./Select.module.css";

function Select({ value = "", options, onChange, ...rest }) {
  const [selectedValue, setSelectedValue] = useState(value);

  // Effect - Start
  useEffect(() => {
    value !== selectedValue && setSelectedValue(value);
    // eslint-disable-next-line
  }, [value]);
  // Effect - End

  // Handler - Start
  const handleOnChange = (e) => {
    setSelectedValue(e.target.value);
    onChange && onChange(e);
  };
  // Handler - End

  return (
    <select
      className={styles.select}
      value={selectedValue}
      onChange={handleOnChange}
      {...rest}
    >
      <option value="" disabled>
        Select
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

export default Select;
