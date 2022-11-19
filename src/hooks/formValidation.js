import { useState } from "react";

function useValidation(checkFn) {
  const [enteredValue, setEnteredValue] = useState("");
  const [touched, setTouched] = useState(false);

  const validityCheck = checkFn(enteredValue);
  const isInvalid = touched && !validityCheck;

  const settingTouched = () => {
    setTouched(true);
  };
  const ValueSetting = (e) => {
    setEnteredValue(e.target.value);
  };
  return {
    enteredValue,
    isInvalid,
    settingTouched,
    ValueSetting,
  };
}

export default useValidation;
