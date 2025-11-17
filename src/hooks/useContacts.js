import { useContext } from "react";
import { ContactsContext } from "@/components/context/ContactsContext";

export const useContacts = () => useContext(ContactsContext);
