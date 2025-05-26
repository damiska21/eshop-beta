import { useState } from "react";
import "./Form.css"

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(""); 
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setError("Vyplň prosím všechna pole.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Zadej platnou e-mailovou adresu.");
      return;
    }

    console.log("Odesláno:", formData);
    alert("Zpráva odeslána!");
    setFormData({ name: "", email: "", message: "" }); // reset formuláře
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label htmlFor="name" className="form-label">Jméno</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Tvé jméno"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Emailová adresa</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="name@example.com"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Zpráva</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="4"
          placeholder="Napiš svou zprávu..."
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">Odeslat</button>
    </form>
  );
}

export default Form;
