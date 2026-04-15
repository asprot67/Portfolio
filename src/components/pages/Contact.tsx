

import React, { useState, type ChangeEvent, type FormEvent } from "react";
import "../styles/Contact.css";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Message envoyé :", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <h1>Contact</h1>

      La page de contact est en cours de développement. En attendant, vous pouvez me contacter via email à l'adresse suivante : <strong>diebolt.maxime1205@gmail.com</strong>
    <br />
    <br />
      {submitted && (
        <p className="success-message">
          Votre message a bien été envoyé !
        </p>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Votre message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          required
        />

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;