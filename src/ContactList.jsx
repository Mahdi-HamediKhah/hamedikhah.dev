function ContactList({ contacts, removeContact }) {
  return (
    <div className="bg-white my-5 p-2 min-h-32 flex flex-col items-center justify-center rounded-xl">
      {contacts.length === 0 ? (
        <p className="text-center">هنوز مخاطبی وجود ندارد!</p>
      ) : (
        <ul className="w-full flex flex-col gap-3">
          {contacts.map((contact) => (
            <li key={contact.id} className="bg-gray-200 rounded-xl w-full">
              <ul className="flex flex-col lg:flex-row lg:h-16 items-center justify-between p-2">
                <li className="p-2 lg:w-2/12">{contact.name}</li>
                <li className="p-2 lg:w-2/12">{contact.family}</li>
                <li className="p-2 lg:w-3/12 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.55 8.17 19 6.47V5.01c0-.55-.45-1-1-1h-2.7l-2.75-1.83c-.34-.22-.77-.22-1.11 0L8.69 4.01h-2.7c-.55 0-1 .45-1 1v1.46l-2.55 1.7c-.28.19-.45.5-.45.83v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-.33-.17-.65-.45-.83ZM7 6h10v4.46l-5 3.33-5-3.33zM4 20v-9.13l1.45.96 6 4c.17.11.36.17.55.17s.39-.06.55-.17l6-4 1.45-.96V20z"></path>
                  </svg>
                  {contact.email}
                </li>

                <li className="p-2 lg:w-3/12 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.07 22h.35c.47-.02.9-.26 1.17-.64l2.14-3.09c.23-.33.32-.74.24-1.14s-.31-.74-.64-.97l-4.64-3.09a1.47 1.47 0 0 0-.83-.25c-.41 0-.81.16-1.1.48l-1.47 1.59c-.69-.43-1.61-1.07-2.36-1.82-.72-.72-1.37-1.64-1.82-2.36l1.59-1.47c.54-.5.64-1.32.23-1.93L7.84 2.67c-.22-.33-.57-.57-.97-.64a1.46 1.46 0 0 0-1.13.24L2.65 4.41c-.39.27-.62.7-.64 1.17-.03.69-.16 6.9 4.68 11.74 4.35 4.35 9.81 4.69 11.38 4.69ZM6.88 10.05c-.16.15-.21.39-.11.59.05.09 1.15 2.24 2.74 3.84 1.6 1.6 3.75 2.7 3.84 2.75.2.1.44.06.59-.11l1.99-2.15 3.86 2.57-1.7 2.46c-1.16 0-6.13-.24-9.99-4.1S4 7.06 4 5.91l2.46-1.7 2.57 3.86-2.15 1.99Z"></path>
                  </svg>
                  {contact.number}
                </li>

                <button
                  className="flex gap-4 justify-center items-center lg:w-2/12 lg:max-w-40 lg:h-[90%] bg-rose-400 rounded-xl px-2 shadow-white shadow-2xl"
                  onClick={() => removeContact(contact.id)}
                >
                  {" "}
                  <p className="lg:text-sm font-bold lg:min-w-20">حذف مخاطب</p>
                  <svg
                    className="w-10 h-10 lg:h-8  rounded-full p-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 6V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v2h2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8h2V6zM9 4h6v2H9zM6 20V8h12v12z"></path>
                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                  </svg>
                </button>
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
