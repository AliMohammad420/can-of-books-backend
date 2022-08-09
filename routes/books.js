import express from 'express';

import {getBooks} from '../controllers/books.js';


const router = express.Router();

router.get('/getBooks' ,getBooks)



export default router;