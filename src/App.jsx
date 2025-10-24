import { useState } from "react"
import ContactListPage from "./pages/ContactListPage/ContactListPage"
import AddContactPage from "./pages/AddContactPage/AddContactPage"

const App = () => {
  const [currentPage, setCurrentPage] = useState("contact-list");
  return (
    <>
      {currentPage === "contact-list" && <ContactListPage />}
      {currentPage === "add-contact" && <AddContactPage />}
    </>
  )
}

export default App