import {useState} from "react";
import "./create.styles.css";

function Create() {
  const [input, setInput] = useState({
    email: "",
    name: "",
    phone: "",
  });

  const [error, setError] = useState({
    email: "requerido",
    name: "",
    phone: "",
  });

  const validate = (input) => {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.email)) {
      setError({...error, email: "Formato invalido"});
      return;
    }
    setError({...error, email: ""});
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    validate({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={""}>
        <div>
          <label> Nombre</label>
          <input name="name" value={input.value} onChange={handleChange} />
        </div>
        <div>
          <label> Email</label>
          <input name="email" value={input.value} onChange={handleChange} />
          <span>{error.email}</span>
        </div>
        <div>
          <label> Telefono</label>
          <input name="phone" value={input.value} onChange={handleChange} />
        </div>
        {error.email ? null : <button type="submit">Sumbit</button>}
      </form>
    </div>
  );
}

export default Create;
