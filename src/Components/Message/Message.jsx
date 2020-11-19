import React, { useEffect } from "react";
import { delComments, getComments } from "../../operation/comments.operation";
import css from "./Message.module.css";

const Message = ({ comments, setComments }) => {
  useEffect(() => {
    getComments().then((res) => setComments(res));
  }, [setComments]);

  const deleteHandler = ({ target }) => {
    const { id } = target;

    delComments(id).then((res) =>
      setComments((state) =>
        state.length > 1
          ? state.filter((item) => item.id !== res)
          : "No comments have been added yet"
      )
    );
  };

  return (
    <div className={css.message}>
      <div className={css.message__container}>
        <h2 className={css.message__title}>Past comments</h2>

        <ul className={css.message__list}>
          {comments &&
            typeof comments !== "string" &&
            comments.map((item) => (
              <li key={item.id} className={css.message__list_item}>
                <h3 className={css.message__list_item_title}>{item.name}</h3>

                <div className={css.message__list_item_delete}>
                  <span
                    onClick={deleteHandler}
                    id={item.id}
                    className={css.message__list_item_delete_btn}
                  >
                    &#10006;
                  </span>
                </div>

                <p className={css.message__list_item_text}>{item.message}</p>

                <p className={css.message__list_item_id}>#{item.id}</p>
                <p className={css.message__list_item_data}>{item.date}</p>
              </li>
            ))}

          {typeof comments === "string" && (
            <p className={css.message__error_message}>{comments}</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Message;
