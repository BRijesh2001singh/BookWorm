const router = require("express").Router();
const { response } = require("express");
const bookmodel = require("../models/bookmodel");
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

module.exports = router;
