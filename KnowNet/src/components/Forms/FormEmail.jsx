import React from "react";

function FormEmail() {
  const [formData, setFormData] = React.useState({
    email: "",
  });

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="form-email">
      <input
        type="email"
        placeholder="youremail@email.com"
        onChange={handleChange}
        name="email"
        id="email"
        value={formData.email}
      />
    </div>
  );
}

export default FormEmail;
