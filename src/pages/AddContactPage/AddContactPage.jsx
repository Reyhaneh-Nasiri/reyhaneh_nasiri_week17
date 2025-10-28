import ContactForm from "@/components/ContactForm/ContactForm";

const AddContactPage = ({
  setCurrentPage,
  setContacts,
  showToast,
  showModal,
}) => {
  const addHandler = (newContact) => {
    const id = Date.now();
    setContacts((prev) => [...prev, { id, ...newContact }]);
    setCurrentPage("contact-list");
    showToast("Contact added successfully", "success");
  };

  const renderModal = (newContact) => {
    showModal(
      `Save Contact`,
      "Are you sure you want to save this contact?",
      "Save",
      () => addHandler(newContact)
    );
  };

  return (
    <ContactForm
      initialValues={{ name: "", email: "", phone: "", job: "" }}
      onSubmit={renderModal}
      onCancel={() => setCurrentPage("contact-list")}
      buttonText="Save"
      title="Add"
    />
  );
};

export default AddContactPage;
