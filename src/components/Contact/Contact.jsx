import React from "react";
import s from "./Contact.module.css";

const Contact = ({ name, number, id, onDeleteContact }) => {
  return (
    <>
      <li className={s.item}>
        <div className={s.itemContent}>
          <span>{name}</span>
          <span>{number}</span>
        </div>
        <button className={s.delete} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
