function InputField(props) {
  return (
    <div>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        id={props.id}
        type={props.type}
        value={props.value}
        placeholder={props.placeHolder}
        onChange={props.handleChange}
        onBlur={props.blurHandler}
      />
    </div>
  );
}

export default InputField;
