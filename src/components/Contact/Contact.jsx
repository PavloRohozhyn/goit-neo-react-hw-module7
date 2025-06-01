import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from "./Contact.module.css";

const Contact = ({ data }) => {
  const dispatch = useDispatch();

  const { id, name, number } = data;

  const fnDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div className={css.right}>
        <div>
          <FaUser />
          &#160;
          <span>{name}</span>
        </div>
        <div>
          <FaPhone />
          &#160;
          <span>{number}</span>
        </div>
      </div>
      <div className={css.left}>
        <button onClick={fnDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
