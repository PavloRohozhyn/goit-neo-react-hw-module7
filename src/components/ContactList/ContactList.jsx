import React from "react";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const data = useSelector(selectFilteredContacts);

  return (
    <ul className={css.contactlist}>
      {data.map((el) => (
        <li key={el.id} className={css.contactListItem}>
          <Contact data={el} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
