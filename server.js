'use strict';
import booksRoutes from "./routes/books.js";
import { Harry } from './models/usersdb.js';
 

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use("/books",booksRoutes )


app.get('/', handleHome);
app.get("/", (req, res) => res.send("Welcome to the Books Server!"));
app.all("*", (req, res) =>res.send("Route doesn't exist."));

function handleHome(req,res){
  res.send('Server Is UP!!');
}

mongoose.connect('mongodb://localhost:27017/books');



const bookModel = mongoose.model('bookModel', Books);

const harry = new bookModel({

books:[
  {   
    name: "Harry Potter and the Goblet of Fire",
    description: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
    status:"Harry Potter and the Goblet of Fire",
},

{
    name: "Harry Potter and the Philosopher's Stone",
    description: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
    status:"Harry Potter and the Goblet of Fire",
},

{
    name: "Harry Potter and the Deathly Hallows",
    description: "The Triwizard Tournament is to be held at Hogwarts. Only wizards who are over seventeen are allowed to enter - but that doesn't stop Harry dreaming that he will win the competition. Then at Hallowe'en, when the Goblet of Fire makes its selection, Harry is amazed to find his name is one of those that the magical cup picks out. He will face death-defying tasks, dragons and Dark wizards, but with the help of his best friends, Ron and Hermione, he might just make it through - alive!",
    status:"Harry Potter and the Goblet of Fire",
}

]

});

harry.save();

app.listen(PORT, () => console.log(`listening on ${PORT}`));
