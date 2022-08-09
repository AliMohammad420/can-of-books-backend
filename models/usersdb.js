import mongoose from "mongoose";


const book = new mongoose.Schema({
    name: String,
    description: String,
    status:String,
  });


const harry = new mongoose.Schema({
    books:[book]
  });

// models =>
export const books = mongoose.model('books', book);
export const Harry = mongoose.model('Harry', harry);

