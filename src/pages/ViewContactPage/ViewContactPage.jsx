import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import styles from "./ViewContactPage.module.css";
import { memo, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContactsContext } from "@/components/context/ContactsContext";
import { useModal } from "@/hooks/useModal";
import { useToast } from "@/hooks/useToast";
import axios from "axios";
const ViewContactPage = () => {
  const { showModal } = useModal();
  const { showToast } = useToast();

  const { contacts, setContacts, favorites, setFavorites } =
    useContext(ContactsContext);

  const { contactId } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState({});
  const values = Object.keys(contact);

  useEffect(() => {
    axios(`http://localhost:3000/contacts/${contactId}`).then((res) =>
      setContact(res.data)
    );
  }, [contact]);
  const deleteHandler = () => {
    setContacts(contacts.filter((contact) => contact.id != contactId));
    setFavorites(favorites.filter((f) => f.id != contactId));
    navigate("/contact-list");
    showToast("Contact deleted", "success");
  };

  const renderModal = () => {
    showModal(
      `Delete Contact`,
      "Are you sure you want to delete this contact?",
      "Delete",
      () => deleteHandler()
    );
  };

  const favoriteHandler = () => {
    axios
      .patch(`http://localhost:3000/contacts/${contactId}`, {
        isFavorite: !contact.isFavorite,
      })
      .then((res) => console.log(res))
      .catch(error => console.log(error))
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <i
          onClick={() => navigate("/contact-list")}
          className="fa-solid fa-arrow-left"
        ></i>
        <i
          className="fa-solid fa-pen-to-square"
          onClick={() => navigate(`/edit-contact/${contactId}`)}
        ></i>
      </div>
      <button
        className={`${styles.favorite} ${contact.isFavorite && styles.active}`}
        onClick={favoriteHandler}
      >
        {contact.isFavorite ? (
          <i className="fa-solid fa-star"></i>
        ) : (
          <i className="fa-regular fa-star"></i>
        )}
      </button>
      <ul className={styles.information}>
        {values.map((value) => {
          if (value !== "id" && value !== "isFavorite") {
            return (
              <li key={value}>
                {capitalizeFirstLetter(value)}: {contact[value.toLowerCase()]}
              </li>
            );
          }
        })}
      </ul>
      <div className={styles.footer}>
        <button onClick={renderModal}>Delete</button>
      </div>
    </div>
  );
};

export default memo(ViewContactPage);
