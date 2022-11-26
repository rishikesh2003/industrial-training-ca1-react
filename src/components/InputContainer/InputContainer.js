import Input from "../Input/Input";

function InputContainer(props) {
  return (
    <div className="input-container">
      <label>{props.label}</label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        testId={props.testId}
      />
    </div>
  );
}

export default InputContainer;
