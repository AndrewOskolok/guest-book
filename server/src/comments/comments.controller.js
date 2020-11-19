const fs = require("fs");
const path = require("path");

const commentsData = path.join(__dirname, "../../db/comments.json");

const getComments = async (req, res, next) => {
  const data = await fs.promises.readFile(commentsData, "utf8");

  const fullObj = JSON.parse(data);

  if (fullObj.length > 0) {
    res.status(200).send(fullObj);
  } else {
    res.status(404).send({ message: "No comments have been added yet" });
  }
};

const addComments = async (req, res, next) => {
  const { name, message } = req.body;

  const date = new Date();

  const data = await fs.promises.readFile(commentsData, "utf8");

  const fullObj = JSON.parse(data);
  console.log(fullObj.length);

  const nextId = fullObj.length > 0 ? fullObj[0].id + 1 : 1;

  const newCommObj = {
    id: nextId,
    name,
    message,
    date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
  };

  const newObj = [newCommObj, ...fullObj];

  const objectToString = JSON.stringify(newObj, null, " ");

  await fs.promises.writeFile(commentsData, objectToString);

  res.status(200).send(newCommObj);
};

const delComments = async (req, res, next) => {
  const { id } = req.params;

  const data = await fs.promises.readFile(commentsData, "utf8");

  const allObj = JSON.parse(data);

  if (allObj.find((el) => el.id === Number(id))) {
    const filterObj = allObj.filter((el) => el.id !== Number(id));

    const objectToString = JSON.stringify(filterObj, null, " ");

    await fs.promises.writeFile(commentsData, objectToString);

    res.status(200).send({ message: "Comment successful delete" });
  } else {
    res.status(404).send({ message: "Comment not found" });
  }
};

module.exports = {
  getComments,
  addComments,
  delComments,
};
