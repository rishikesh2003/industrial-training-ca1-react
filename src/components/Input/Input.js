import { useState } from "react";

function Input(props) {
  const [err, setErr] = useState("");
  const [val, setVal] = useState("");
  const [passMsg, setPassMsg] = useState({ msg: "", color: "" });
  function handlePass(pass) {
    setPassMsg("");
    let count = 0;
    let lower = /[a-z]/.test(pass);
    if (lower) {
      count = count + 1;
    }

    let num = false;
    pass.split("").forEach((e) => {
      if (!isNaN(e)) {
        num = true;
      }
    });
    if (num) {
      count = count + 1;
    }
    let checkSpecial = /[*@$!#%&()^~{}]+/.test(pass);
    if (checkSpecial) {
      count = count + 1;
    }
    let checkUpper = /[A-Z]+/.test(pass);
    if (checkUpper) {
      count = count + 1;
    }
    if (count === 1) {
      setPassMsg({ msg: "Password is weak", color: "red" });
    } else if (count === 2) {
      setPassMsg({ msg: "Password is good", color: "orange" });
    } else if (count === 3) {
      setPassMsg({ msg: "Password is strong", color: "lightgreen" });
    } else if (count === 4) {
      setPassMsg({ msg: "Password is very strong", color: "green" });
    }
  }
  function handleErr(val) {
    setErr("");
    if (props.type === "text") {
      if (val.length === 0) {
        setErr("Please fill the column");
      }
    }
    if (props.type === "email") {
      if (val.length === 0) {
        setErr("Please fill the email");
      } else if (val.split("@").length !== 2) {
        setErr("Invalid email");
      }
    }
    if (props.type === "password") {
      if (val.length === 0) {
        setErr("Please fill the password");
      }
    }
  }
  function handleerr() {
    setErr("");
    if (props.type === "text") {
      if (val.length === 0) {
        setErr("Please fill the column");
      }
    }
    if (props.type === "email") {
      if (val.length === 0) {
        setErr("Please fill the email");
      } else if (val.split("@").length !== 2) {
        setErr("Invalid email");
      }
    }
    if (props.type === "password") {
      if (val.length === 0) {
        setErr("Please fill the password");
      }
    }
  }
  return (
    <>
      <input
        style={{ border: err ? "1px solid red" : "" }}
        onMouseOver={handleerr}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          handleErr(e.target.value);
          if (props.type === "password") {
            handlePass(e.target.value);
          }
        }}
        type={props.type}
        placeholder={props.placeholder}
        data-testid={props.testId}
      />
      {err && <p className="error">{err}</p>}
      {passMsg.msg && <p style={{ color: passMsg.color }}>{passMsg.msg}</p>}
    </>
  );
}

export default Input;
