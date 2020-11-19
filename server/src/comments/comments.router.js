const { Router } = require("express");
const router = Router();
const Joi = require("joi");
const { tryCatchWrapper } = require("../helpers/tryCatch");

const { validate } = require("../helpers/validate");
const {
  getComments,
  addComments,
  delComments,
} = require("./comments.controller");

const commentsSchema = Joi.object({
  name: Joi.string().required(),
  message: Joi.string().required(),
});
router.get("/get", tryCatchWrapper(getComments));

router.post("/add", validate(commentsSchema), tryCatchWrapper(addComments));

router.delete("/delete/:id", tryCatchWrapper(delComments));

exports.commentsRouter = router;
