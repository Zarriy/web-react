import InputField from "../components/input";
import Button from "../components/button";
function Form(props) {
  const handleCloseModalClick = (e) => {
    e.preventDefault();
    props.Closehandler(false);
  };

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
          />
        </div>
        <div>
          <InputField
            type="email"
            placeHolder="zarriy@outlook.com"
            id="emailInputField"
            title="Email:"
          />
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
