import InputField from "../components/input";
import Button from "../components/button";
import useValidation from "../hooks/formValidation";

function Form(props) {
  const handleCloseModalClick = (e) => {
    e.preventDefault();
    props.Closehandler(false);
  };

  const {
    enteredValue: nameEnteredValue,
    isInvalid: nameInvalid,
    settingTouched: nameTouched,
    ValueSetting: nameStateUpdate,
  } = useValidation((value) => value.trim() !== "");

  const {
    enteredValue: emailEntered,
    isInvalid: emailIsInvalid,
    settingTouched: emailFieldTouched,
    ValueSetting: emailStateUpdate,
  } = useValidation((value) => value.includes("@"));

  return (
    <>
      <form className="fixed top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 px-12 py-8 bg-emerald-900 text-center text-white">
        <h2 className="text-xl font-medium">Say "👋"!</h2>
        <div>
          <InputField
            type="text"
            placeHolder="Enter your Name"
            id="nameInputField"
            title="Name:"
            value={nameEnteredValue}
            handleChange={nameStateUpdate}
            blurHandler={nameTouched}
          />
          {nameInvalid && (
            <p className="absolute bottom-6 left-44 text-sm text-red-400">
              * Please Enter Correct Name
            </p>
          )}
        </div>
        <div>
          <InputField
            type="email"
            placeHolder="zarriy@outlook.com"
            id="emailInputField"
            title="Email:"
            value={emailEntered}
            handleChange={emailStateUpdate}
            blurHandler={emailFieldTouched}
          />
          {emailIsInvalid && (
            <p className="absolute bottom-6 right-36 text-sm text-red-400">
              * Please Enter Correct Email
            </p>
          )}
        </div>

        <Button
          text="Send"
          classes="bg-emerald-600 px-4 py-2 font-medium hover:bg-emerald-800"
        />
        <div className="absolute top-4 right-6 hover:cursor-pointer hover:text-zinc-400">
          <Button text="X" handleButtonClick={handleCloseModalClick} />
        </div>
      </form>
    </>
  );
}

export default Form;
