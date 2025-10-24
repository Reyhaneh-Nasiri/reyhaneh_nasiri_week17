import SearchBox from "@/components/SearchBox/SearchBox";
import styles from "./ContactListPage.module.css";
import ContactListToolbar from "@/components/ContactListToolbar/ContactListToolbar";
const ContactListPage = ({ setCurrentPage, contacts }) => {
  return (
    <>
      <ContactListToolbar setCurrentPage={setCurrentPage} />
      <SearchBox />
      <ul className={styles.contacts}>
        {contacts.map((contact) => (
          <li className={styles.contact} key={contact.id}>
            <p className={styles.contact__name}>{contact.name}</p>
            <p className={styles.contact__email}>{contact.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactListPage;