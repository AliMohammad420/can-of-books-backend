'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const BookModel = require('./model/Schema.js');

const app = express();
app.use(cors());
app.use(express.json());


const book1 = new BookModel({
  name: "Harry Potter and the Goblet of Fire",
  description: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
  status:"Harry Potter and the Goblet of Fire"
})

const book2 = new BookModel({
  name: "Harry Potter and the Philosopher's Stone",
  description: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
  status:"Harry Potter and the Goblet of Fire"
})

const book3 = new BookModel({
  name: "Harry Potter and the Deathly Hallows",
  description: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
  status:"Harry Potter and the Goblet of Fire"
})

book1.save();
book2.save();
book3.save();

mongoose.connect(`mongodb://localhost:27017/books`);
const PORT = process.env.PORT || 3001;

app.get('/books', (req,res)=>{
  BookModel.find({}, (error, data) => {
    if (error) console.log(`error reading from the db: ${error}`);
    else res.send(data);
})
})
app.get('/', (req,res)=>{
  res.send("Server IS UP!!")
  })

app.post('/books', createNewBook)

app.listen(PORT, () => console.log(`listening on ${PORT}`));



function createNewBook (req,res) {
  const {newBook} = req.body;
  const book = new BookModel(newBook);
  book.save();
  res.status(201).json(book)
}

app.delete('/books/:id', deleteBook)

function deleteBook (req,res){
  const id = req.params.id;
  console.log(id)
  BookModel.findByIdAndDelete(id).then(sendRec =>{
    res.send(sendRec);
  }).catch (error => {
    res.send(error)
  })
}