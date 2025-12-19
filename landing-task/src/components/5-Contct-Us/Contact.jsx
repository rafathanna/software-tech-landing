import { useState } from "react";
import "../../Styles/Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "*Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "*Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "*Invalid email address";
    }

    if (!formData.message.trim()) newErrors.message = "*Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!validate()) return; 
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }, 1500);
  }

  return (
    <section className="contact-section fade-up" id="contact">
      <h2 className="text">Contact Us</h2>

      <div className="contact-content">
        <img
          src="/img/contact.jpg"
          alt="Contact illustration"
          className="contact-img"
          loading="lazy"
          width="400"
          height="300"
        />

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}

          <button className="btn" type="submit" disabled={loading}>
            {loading ? "Loading..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
