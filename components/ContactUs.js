import React from "react";
const ContactUs = () => {
  const [contactUs, setContactUs] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    setContactUs({ ...contactUs, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { name, email, message } = contactUs;

    fetch("/api/sendemail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((res) => {
        if (res.ok) {
          setIsSubmitting(false);
          setContactUs({
            name: "",
            email: "",
            message: "",
          });
          setSuccess("Message sent successfully");
        } else {
          setError("Could not send message");
          setIsSubmitting(false);
        }
      })
      .catch((error) => {
        setError("Could not send email");
      });
  };

  React.useEffect(() => {
    setTimeout(() => {
      setSuccess("");
      setError("");
    }, 5000);
  }, [success, error]);

  return (
    <div className="py-20 container " name="contactUs">
      <h3 className="text-red-700 text-center text-xl tracking-wider">
        Get In Touch
      </h3>
      <h2 className="text-gray-700 font-bold text-4xl text-center py-4">
        Contact Us
      </h2>
      <div className=" md:flex justify-center  gap-10 mt-8">
        <form
          className="md:w-1/2 bg-gray-200 p-4 rounded-lg   flex-1"
          onSubmit={handleSubmit}
        >
          <div className="md:flex gap-5 ">
            <Input
              name="name"
              onChange={handleChange}
              disabled={isSubmitting}
            />
            <Input
              name="email"
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>

          <Input
            name="message"
            onChange={handleChange}
            disabled={isSubmitting}
            type="textarea"
          />
          <div className="flex justify-center">
            {isSubmitting ? (
              <p className="text-gray-800 py-2 px-4">Sending....</p>
            ) : success ? (
              <p className="text-green-700 py-2 px-4">{success}</p>
            ) : error ? (
              <p className="text-red-700 py-2 px-4">{error}</p>
            ) : (
              <button
                className="bg-red-700 text-white  py-2 px-4 rounded-full mt-2 "
                type="submit"
              >
                Send Message
              </button>
            )}
          </div>
        </form>
        <div className="  md:w-1/2  mt-8  md:mt-0 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.640660980818!2d55.35397321500924!3d25.181608483903425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f673e504c6d33%3A0xb5752291c2c7f08e!2sFirst%20One%20Workshop%20LLC!5e0!3m2!1sen!2sus!4v1652009397533!5m2!1sen!2sus"
            className="w-full h-full rounded-md"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

const Input = ({ name, onChange, disabled, type = "text" }) => {
  const nameToUpercase = name.charAt(0).toUpperCase() + name.slice(1);
  return (
    <div className="w-full">
      <label className="text-red-700 text-lg ">{nameToUpercase}</label>
      {type === "text" ? (
        <input
          name={name}
          type="text"
          className="border border-red-700 p-2 w-full rounded-md"
          placeholder={nameToUpercase}
          onChange={onChange}
          disabled={disabled}
        />
      ) : (
        <textarea
          className="border border-red-700 p-2 w-full rounded-md"
          placeholder={nameToUpercase}
          name={name}
          onChange={onChange}
          disabled={disabled}
        />
      )}
    </div>
  );
};
