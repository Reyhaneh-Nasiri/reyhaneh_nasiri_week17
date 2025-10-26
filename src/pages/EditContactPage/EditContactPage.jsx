import styles from "./EditContactPage.module.css";

const EditContactPage = ({setCurrentPage}) => {
  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <h3 className={styles.form__title}>Edit Contact</h3>
        <div className={styles.form__inputs}>
          <div className={styles.form__input}>
            <label htmlFor="name" className={styles.form__label}>
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className={styles.form__input}>
            <label htmlFor="email" className={styles.form__label}>
              Email
            </label>
            <input
              id="email"
              type="text"
              name="email"
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className={styles.form__input}>
            <label htmlFor="phone" className={styles.form__label}>
              Phone
            </label>
            <input
              id="phone"
              type="text"
              name="phone"
            />
            <i className="fa-solid fa-phone"></i>
          </div>
          <div className={styles.form__input}>
            <label htmlFor="job" className={styles.form__label}>
              Job
            </label>
            <input
              id="job"
              type="text"
              name="job"
            />
            <i className="fa-solid fa-briefcase"></i>
          </div>
        </div>
        <div className={styles.form__buttons}>
          <button className={styles.form__button} onClick={() => setCurrentPage("view-contact")}>Cancel</button>
          <button className={styles.form__button}>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default EditContactPage;
