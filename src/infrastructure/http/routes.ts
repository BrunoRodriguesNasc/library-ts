import express from 'express';
import { BookController } from './controllers/BookController';

const router = express.Router();

router.get('/books/:id/borrow', BookController.borrowBook);
router.post('/books', BookController.createBook);

export default router;


