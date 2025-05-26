import { useState } from "react";
import "./Form.css";
import { useLocalization } from "../../contexts/LocalizationContext";

function Form() {
  const { strings } = useLocalization();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      setError(strings.contact.popup.fieldempty);
      return;
    }

    if (!isValidEmail(email)) {
      setError(strings.contact.popup.emailinvalid);
      return;
    }

    console.log("Odesláno:", formData);
    alert(strings.contact.popup.messagesent);
    setFormData({ name: "", email: "", message: "" }); // reset formuláře
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          {strings.contact.name}
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          {strings.contact.email}
        </label>
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
        <label htmlFor="message" className="form-label">
          {strings.contact.text}
        </label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {strings.contact.send}
      </button>
    </form>
  );
}

export default Form;
