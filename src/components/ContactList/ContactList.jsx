import React from "react";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";
import css from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  // filter
  const data = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
  );

  // const ready = contact.filter((contact) => {
  //   return contact.name
  //     .toLowerCase()
  //     .trim()
  //     .includes(sbox.toLowerCase().trim());
  // }); // search contact by name

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
