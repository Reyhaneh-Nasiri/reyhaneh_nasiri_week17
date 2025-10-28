import ContactForm from "@/components/ContactForm/ContactForm";

const EditContactPage = ({
  setCurrentPage,
  editId,
  contacts,
  setContacts,
  showToast,
}) => {
  const contact = contacts.find((contact) => contact.id == editId);

  const editHandler = (editedValues) => {
    setContacts((prev) =>
      prev.map((c) => (c.id === contact.id ? { ...c, ...editedValues } : c))
    );
    setCurrentPage("view-contact");
    showToast("Contact edited successfully", "success");
  };

  return (
    <ContactForm
      initialValues={{
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        job: contact.job,
      }}
      onSubmit={editHandler}
      onCancel={() => setCurrentPage("view-contact")}
      buttonText="Edit"
      title="Edit"
    />
  );
};

export default EditContactPage;
