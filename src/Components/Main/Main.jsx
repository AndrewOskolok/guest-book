import React, { useState } from "react";
import Form from "../Form/Form";
import Message from "../Message/Message";
import css from "./Main.module.css";

const Main = () => {
  const [comments, setComments] = useState([]);

  return (
    <div className={css.main}>
      <div className={css.main__container}>
        <Form setComments={setComments} />
        <Message comments={comments} setComments={setComments} />
      </div>
    </div>
  );
};

export default Main;
