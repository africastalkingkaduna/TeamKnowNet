import React from "react";

function FormMessage() {
  const [formData, setFormData] = React.useState({
    message: "",
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
    <div className="form-message">
      <br />
      <textarea
        type="text"
        placeholder="Send us a message and we will reply you as soon as possible..."
        onChange={handleChange}
        name="message"
        id="message"
        value={formData.message}
      />
    </div>
  );
}

export default FormMessage;
