import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";

export const ContactsContext = createContext();

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    const fetchContacts = async () => {
      axios("http://localhost:3000/contacts")
        .then((res) => setContacts(res));
    };
    fetchContacts();
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const value = useMemo(
    () => ({
      contacts,
      setContacts,
      favorites,
      setFavorites,
    }),
    [contacts, favorites]
  );
  return (
    <ContactsContext.Provider value={value}>
      {children}
    </ContactsContext.Provider>
  );
};

export default ContactsProvider;
