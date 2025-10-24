import { useEffect, useState } from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("contact-list");
  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem("contacts") || "[]"));

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])
  return (
    <>
      {currentPage === "contact-list" && (
        <ContactListPage setCurrentPage={setCurrentPage} contacts={contacts} />
      )}
      {currentPage === "add-contact" && (
        <AddContactPage setCurrentPage={setCurrentPage} setContacts={setContacts} />
      )}
    </>
  );
};

export default App;
