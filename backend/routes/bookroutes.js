const router = require("express").Router();
const { response } = require("express");
const bookmodel = require("../models/bookmodel");
const usermodel = require("../models/user");
//POST REquest
router.post("/add", async (req, res) => {
  try {
    const data = req.body;
    const newBook = new bookmodel(data);
    await newBook.save().then(() => {
      res.status(200).json({ message: "Book Added successfully" });
    });
  }
  catch (error) {
    console.log(error);
  }
})
//Get request
router.get("/get", async (req, res) => {
  let books;
  try {
    books = await bookmodel.find();
    res.status(200).json({ books });
  }
  catch (error) {
    console.log(error);
  }
});
//get req using ID
router.get("/get/:id", async (req, res) => {
  let book;
  const id = req.params.id;
  try {
    book = await bookmodel.findById(id);
    res.status(200).json({ book })
  }
  catch (error) {
    console.log(error);
  }
});
//update books using ID
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { bookname, description, author, image, readonline, price } = req.body;
  let updatedbook;
  try {
    updatedbook = await bookmodel.findByIdAndUpdate(id, { bookname, description, author, image, readonline, price });
    await updatedbook.save().then(() => res.json({ message: "BOOK ADDED" }));
  }
  catch (error) {
    console.log(error);
  }
});
//delete book by ID
router.delete("/deleteBook/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await bookmodel.findByIdAndDelete(id).then(() => res.status(201).json({ message: "Book Deleted" }));
  }
  catch (error) {
    console.log(error);
  }
})
//Register USERS
router.post("/register", async (req, res) => {
  const userdata = req.body;
  const { email } = req.body;
  if (await usermodel.findOne({ email })) {
    return res.status(409).json({ message: "User Already Exists" });
  }
  const newuser = new usermodel(userdata);
  await newuser.save().then(() => {
    return res.status(200).json({ message: "User has been added" });
  }).catch((err) => {
    console.log(err);
  })
});
//signin USERS
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }
    const passwordmatch = await user.comparePassword(password, user.password);
    if (passwordmatch) {
      return res.status(200).json({ message: `User Logged In ` });
    }
    else {
      return res.status(401).json({ message: "Wrong password" });
    }
  } catch (err) {
    return res.status(500).json({ message: "ERROR FROM SERVER" });
    console.log(err);
  }
})
//get user
router.post("/getuser", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await usermodel.findOne({ email });
    return res.json({ name: user.name });
  } catch (err) {
    console.log(err);
  }
})
module.exports = router;
