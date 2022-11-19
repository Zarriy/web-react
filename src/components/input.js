function InputField(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeHolder}
      />
    </div>
  );
}

export default InputField;
