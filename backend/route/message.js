const router = require("express").Router();
let Message = require("../models/Message");

//create
router.route("/add").post((req, res) => {
  const { user_id } = req.query;
  // const user_id = req.body.user_id;
  const text = req.body.text;

  const newMessage = new Message({
    user_id,
    text,
    createdAt: new Date().toISOString(),
  });

  newMessage
    .save()
    .then(() => {
      res.json("Message saved");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Edit

router.route("/update/:id").put(async (req, res) => {
  let userID = req.params.id;

  const { text } = req.body;

  const updateMessage = {
    text,
  };
  const update = await Message.findByIdAndUpdate(userID, updateMessage)
    .then(() => {
      res.status(200).send({ status: "Message Edited" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "error with updating data", error: err.message });
    });
});

//Delete

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;

  await Message.findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "Message deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "error with deletion", error: err.message });
    });
});

//read
router.route("/get/:id").get((req, res) => {
  Message.find()
    .then((Messages) => {
      res.json(Messages);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
