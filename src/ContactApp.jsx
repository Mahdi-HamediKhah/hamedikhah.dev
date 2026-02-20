import { useState } from "react";
import ContactList from "./ContactList";

function ContactApp() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState({
    name: false,
    invalidInput: "",
  });
  const [contactForm, setContactForm] = useState({
    name: "",
    family: "",
    number: "",
    email: "",
  });
  const formhandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setContactForm((contactForm) => ({ ...contactForm, [name]: value }));
  };

  const submithandler = (event) => {
    event.preventDefault();
    console.log(error.invalidInput);
    event.target[0].value.length === 0
      ? setError(() => ({
          name: true,
          invalidInput: "نام",
        }))
      : event.target[1].value.length === 0
        ? setError(() => ({
            name: true,
            invalidInput: "نام خانوادگی",
          }))
        : event.target[2].value.length === 0
          ? setError(() => ({
              name: true,
              invalidInput: "ایمیل",
            }))
          : event.target[3].value.length !== 11 ||
              event.target[3].value[0] !== "0" ||
              event.target[3].value[1] !== "9"
            ? setError(() => ({
                name: true,
                invalidInput: "شماره همراه (با فرمت 09xxxxxxxxx)",
              }))
            : contactHandler();
    setContactForm({
      name: "",
      family: "",
      number: "",
      email: "",
    });
  };
  const contactHandler = () => {
    const newContact = {
      id: crypto.randomUUID(),
      ...contactForm,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const removeContact = (index) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact, i) => i !== index),
    );
  };
  return (
    <section className="flex flex-col gap-8 justify-center items-center py-12 bg-zinc-50 h-full">
      <h1 className="text-blue-700 text-3xl font-black">پروژه مخاطبین</h1>
      <h3>
        <span className="bg-blue-300 p-1">حامدیخواه</span> | پروژه ری اکت
      </h3>
      <div className="rounded-xl w-2/3 flex flex-col py-5 bg-white shadow-blue-200 shadow-2xl">
        <form className="flex flex-col gap-5" onSubmit={submithandler}>
          <h5 className="text-xl font-bold text-center">
            مخاطب خود را اضافه کنید.
          </h5>
          <input
            className="border-2 border-gray-500 w-[80%] mx-auto px-2 py-1 rounded-lg"
            type="text"
            name="name"
            onChange={formhandler}
            value={contactForm.name}
            placeholder="نام"
          />
          <input
            className="border-2 border-gray-500 w-[80%] mx-auto px-2 py-1 rounded-lg"
            type="text"
            name="family"
            onChange={formhandler}
            value={contactForm.family}
            placeholder="نام خانوادگی"
          />
          <input
            className="border-2 border-gray-500 w-[80%] mx-auto px-2 py-1 rounded-lg"
            type="email"
            name="email"
            onChange={formhandler}
            value={contactForm.email}
            placeholder="ایمیل"
          />
          <input
            type="number"
            className="border-2 border-gray-500 w-[80%] mx-auto px-2 py-1 rounded-lg"
            name="number"
            onChange={formhandler}
            value={contactForm.number}
            placeholder="شماره همراه"
          />
          <button
            className="border-2 border-black rounded-lg w-[80%] mt-5 mx-auto py-1 bg-blue-600 text-white "
            type="submit"
          >
            افزودن مخاطب
          </button>
        </form>
        <p
          className={`bg-red-200 w-[80%] text-red-700 py-1 px-3 mx-auto mt-5 text-justify ${!error.name ? "hidden" : ""}`}
        >
          لطفا تمامی فیلد ها را به صورت صحیح پر کنید! <br />
          {error.invalidInput} به درستی وارد نشده است.
        </p>
      </div>
      <div className="w-[90%] p-4">
        <h5 className="text-xl font-bold text-center text-blue-700">
          لیست مخاطبین
        </h5>
        <ContactList contacts={contacts} removeContact={removeContact} />
      </div>
    </section>
  );
}

export default ContactApp;
