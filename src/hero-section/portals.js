import ReactDOM from "react-dom";
import Form from "./form";
function ShowPortal(props) {
  return ReactDOM.createPortal(
    <Form Closehandler={props.Statehandler} />,
    document.getElementById("form-modal")
  );
}
export default ShowPortal;
