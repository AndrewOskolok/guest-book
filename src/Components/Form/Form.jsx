import React, { useState } from "react";
import { addComments } from "../../operation/comments.operation";
import css from "./Form.module.css";

const initialState = {
  name: "",
  message: "",
};

const Form = ({ setComments }) => {
  const [form, setForm] = useState(initialState);

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { name, message } = form;

    if (name.length >= 2 && message.length >= 10) {
      addComments(name, message).then((res) =>
        setComments((state) =>
          typeof state !== "string" ? [res, ...state] : [res]
        )
      );

      setForm(initialState);
    }
  };

  return (
    <form onSubmit={submitHandler} className={css.form}>
      <h2 className={css.form__title}>Add your comment</h2>

      <input
        onChange={inputHandler}
        className={css.form__input_name}
        type="text"
        name="name"
        value={form.name}
        autoComplete="off"
        placeholder="Your name"
        minLength="2"
        maxLength="30"
      />

      <textarea
        onChange={inputHandler}
        className={css.form__input_message}
        name="message"
        value={form.message}
        autoComplete="off"
        placeholder="Your message"
        minLength="10"
        maxLength="200"
      />

      <button className={css.form__input_submit} type="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
