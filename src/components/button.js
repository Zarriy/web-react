function Button(props) {
  return (
    <button className={props.classes} onClick={props.handleButtonClick}>
      {props.text}
    </button>
  );
}

export default Button;
