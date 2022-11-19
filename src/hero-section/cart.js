import Button from "../components/button";
function CartDisplay(props) {
  return (
    <div className={props.displayClasses}>
      <div className="mt-10 ml-4">
        <h2 className="font-bold text-lg mb-2">Cart</h2>
        <p>Your Current Orders:</p>
      </div>

      <div className="flex justify-center">
        <Button
          text="Check Out"
          classes="w-full h-16 text-white text-xl bg-emerald-900 hover:bg-emerald-800"
        />
      </div>
      <div className="absolute top-5 right-5 text-3xl cursor-pointer hover:text-emerald-600	">
        <Button
          text={<ion-icon name="close-circle-outline"></ion-icon>}
          handleButtonClick={props.closeHandler}
        />
      </div>
    </div>
  );
}

export default CartDisplay;
