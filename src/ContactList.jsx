function ContactList({ contacts, removeContact }) {

  return (
    <div className="bg-white my-5 p-2 min-h-32 flex flex-col items-center justify-center rounded-xl">
      {contacts.length === 0 ? (
        <p className="text-center">هنوز مخاطبی وجود ندارد!</p>
      ) : (
        <ul className="w-full flex flex-col gap-3">
          {contacts.map((contact) => (
            <li key={contact.id} className="bg-gray-200 rounded-xl w-full">
              <ul className="flex flex-col md:flex-row items-center justify-between p-2">
                <li className="p-2 md:w-1/5">{contact.name}</li>
                <li className="p-2 md:w-1/5">{contact.family}</li>
                <li className="p-2 md:w-1/5 flex items-center gap-2">
                  <img
                    src="/src/assets/email-icon.png"
                    alt="Email Icon"
                    className="w-8"
                  />
                  {contact.email}
                </li>

                <li className="p-2 md:w/1/5 flex items-center gap-2">
                  <img
                    src="/src/assets/phone-icon.png"
                    alt="Phone Icon"
                    className="w-8"
                  />
                  {contact.number}
                </li>

                <button
                  className="flex gap-4 justify-center items-center md:w/1/5"
                  onClick={() => removeContact(contacts.indexOf(contact))}
                >
                  <img
                    src="/src/assets/trash-icon.png"
                    alt="Trash Icon"
                    className="w-12 border rounded-full bg-white p-1 shadow-white shadow-2xl"
                  />
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
