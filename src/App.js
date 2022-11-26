import InputContainer from "./components/InputContainer/InputContainer";

export default function App() {
  const inputArr = [
    {
      type: "text",

      label: "Enter your username",

      placeholder: "Your Username",

      datatestid: "username",
    },

    {
      type: "email",

      label: "Enter your email",

      placeholder: "Your Email",

      datatestid: "email",
    },

    {
      type: "password",

      label: "Enter your password",

      placeholder: "Your Password",

      datatestid: "password",
    },
  ];
  return (
    <div className="form">
      <h1>Dynamic Form</h1>
      {inputArr.map((el, index) => (
        <InputContainer
          key={index}
          type={el.type}
          placeholder={el.placeholder}
          testId={el.datatestid}
          label={el.label}
        />
      ))}
    </div>
  );
}
