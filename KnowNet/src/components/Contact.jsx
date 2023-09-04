import FormName from "./Forms/FormName";
import FormEmail from "./Forms/FormEmail";
import FormMessage from "./Forms/FormMessage";

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div style={{ backgroundColor: "#065F73", padding: "6.9em 0" }}>
      <form
        className="form"
        onSubmit={handleSubmit}
        style={{
          width: "60%",
          margin: "auto",
        }}
      >
        <h1>Contact Us</h1>
        <p style={{ padding: ".5em 0" }}>
          Hi there, contact us to ask about anything or for advert placement.
        </p>
        <FormName />
        <FormEmail />
        <FormMessage />
        <br />
        <button id="btn__submit">Send message</button>
      </form>
    </div>
  );
}

export default Contact;
