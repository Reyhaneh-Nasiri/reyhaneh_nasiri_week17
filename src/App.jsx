import { useState } from "react";
import ContactListPage from "./pages/ContactListPage/ContactListPage";
import AddContactPage from "./pages/AddContactPage/AddContactPage";
import ToastMessage from "./components/ToastMessage/ToastMessage";
import Modal from "./components/Modal/Modal";
import ViewContactPage from "./pages/ViewContactPage/ViewContactPage";
import EditContactPage from "./pages/EditContactPage/EditContactPage";
import useModal from "./hooks/useModal";
import useToast from "./hooks/useToast";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactsProvider from "./components/context/ContactsContext";

const App = () => {
  const [search, setSearch] = useState("");

  const { modal, showModal, removeModal } = useModal();
  const { toast, showToast, removeToast } = useToast();
  return (
    <>
      {modal && (
        <Modal
          title={modal.title}
          desc={modal.desc}
          action={modal.action}
          removeModal={removeModal}
          onConfirm={modal.onConfirm}
        />
      )}
      {toast && (
        <ToastMessage
          message={toast.message}
          type={toast.type}
          onClose={removeToast}
        />
      )}
      <ContactsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/contact-list" />} />
          <Route
            path="/contact-list"
            element={
              <ContactListPage
                setSearch={setSearch}
                search={search}
                showToast={showToast}
                showModal={showModal}
              />
            }
          />
          <Route
            path="/add-contact"
            element={
              <AddContactPage showToast={showToast} showModal={showModal} />
            }
          />
          <Route
            path="/view-contact/:contactId"
            element={
              <ViewContactPage showToast={showToast} showModal={showModal} />
            }
          />
          <Route
            path="/edit-contact/:contactId"
            element={
              <EditContactPage showToast={showToast} showModal={showModal} />
            }
          />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </ContactsProvider>
    </>
  );
};

export default App;
