import ContactsContext from "@/components/context/ContactsContext.js";
import { useContext } from "react";

export const useContacts = () => useContext(ContactsContext);
