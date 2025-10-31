import { useEffect } from "react";
import styles from "./ToastMessage.module.css";

const icons = {
  success: <i className="fa-solid fa-circle-check"></i>,
  error: <i className="fa-solid fa-circle-exclamation"></i>,
  info: <i className="fa-solid fa-circle-info"></i>,
  warning: <i className="fa-solid fa-triangle-exclamation"></i>
};
const ToastMessage = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <div className={styles.toast__data}>
        <div className={styles.toast_icon}>{icons[type]}</div>
        <div className={styles.toast_message}>{message}</div>
      </div>
      <div className={styles.toast_close} onClick={onClose}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default ToastMessage;
