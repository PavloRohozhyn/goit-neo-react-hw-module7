import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    uname: "",
    unumber: "",
  };

  const ValidationSchema = object().shape({
    uname: string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    unumber: string()
      .min(3, "Too short")
      .max(50, "Too long")
      .matches("^[0-9-]+$", "wrong format, it should be 000-00-00")
      .required("Required"),
  });

  const handleContactForm = (v, e) => {
    // validation
    if ("" === v.uname) {
      console.log("name is empty");
      return;
    }
    if (!/[0-9]{3}-[0-9]{2}-[0-9]{2}/.test(v.unumber)) {
      console.log("number is fail");
      return;
    }
    // end validation

    const newRec = {
      id: nanoid(),
      name: v.uname,
      number: v.unumber,
    };
    dispatch(addContact(newRec));
    e.resetForm();
  }; // Add New Contact handler form

  return (
    <div className={css.contactFormWrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleContactForm}
        validationSchema={ValidationSchema}
        validateOnMount={true}
      >
        <Form>
          <div className={css.contactUname}>
            <label className={css.contactLabel}>
              Name
              <Field type="text" name="uname" />
              <ErrorMessage name="uname" component="span">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </label>
          </div>
          <div className={css.contactUnumber}>
            <label className={css.contactLabel}>
              Number
              <Field type="text" name="unumber" />
              <ErrorMessage name="unumber" component="span">
                {(msg) => <div style={{ color: "red" }}>{msg}</div>}
              </ErrorMessage>
            </label>
          </div>
          <div className={css.contactBtn}>
            <button type="submit">Add Сontact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
