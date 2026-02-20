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

    const name = contactForm.name.trim();
    const family = contactForm.family.trim();
    const email = contactForm.email.trim();
    const number = contactForm.number.trim();

    const invalidInput =
      name.length === 0
        ? "نام"
        : family.length === 0
          ? "نام خانوادگی"
          : email.length === 0
            ? "ایمیل"
            : number.length !== 11 || number[0] !== "0" || number[1] !== "9"
              ? "شماره همراه (با فرمت 09xxxxxxxxx)"
              : "";

    invalidInput
      ? setError({ name: true, invalidInput })
      : (contactHandler(),
        setContactForm({
          name: "",
          family: "",
          number: "",
          email: "",
        }));
  };

  const contactHandler = () => {
    const newContact = {
      id: crypto.randomUUID(),
      ...contactForm,
    };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };
  const removeContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id),
    );
  };
  return (
    <section className="flex flex-col gap-8 justify-center items-center py-12 bg-zinc-50 h-full">
      <h1 className="text-blue-700 text-3xl font-black">پروژه مخاطبین</h1>
      <h3>
        <span className="bg-blue-300 p-1">حامدیخواه</span> | پروژه ری اکت و
        تیلویند
      </h3>
      <div className="rounded-xl w-2/3 flex flex-col py-5 bg-white shadow-blue-200 shadow-2xl">
        <form
          className="flex flex-col md:grid md:grid-cols-2 gap-5"
          onSubmit={submithandler}
        >
          <h5 className="text-xl font-bold text-center md:col-span-full">
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
            className="border-2 border-black rounded-lg w-[80%] mt-5 mx-auto py-1 bg-blue-600 text-white md:col-span-full hover:bg-blue-700 transition-colors duration-300"
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
