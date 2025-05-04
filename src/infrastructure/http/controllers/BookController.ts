import { Request, Response } from 'express';
import { BorrowBookUseCase } from '../../../application/usecases/BorrowBookUseCase';
import { PrismaBookRepository } from '../../database/PrismaBookRepository';
import { borrowBookSchema, createBookSchema } from '../schemas/BookSchemas';
import { CreateBookUseCase } from '../../../application/usecases/CreateBookUseCase';

export class BookController {

    static async createBook(req: Request, res: Response) {
        const { title, author } = req.body;
        const validation = createBookSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ error: validation.error.message });
        }   
        const bookRepository = new PrismaBookRepository();
        const createBookUseCase = new CreateBookUseCase(bookRepository);
        try {
            const book = await createBookUseCase.execute(author, title);
            res.status(201).json(book);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
    }

     static async borrowBook(req: Request, res: Response) {
        const { bookId } = req.params;
        const validation = borrowBookSchema.safeParse(bookId);
        if (!validation.success) {
            return res.status(400).json({ error: 'Book ID is not valid' });
        }
        const bookRepository = new PrismaBookRepository();
        const borrowBookUseCase = new BorrowBookUseCase(bookRepository);
        try {
            const book = await borrowBookUseCase.execute(bookId);
            res.json(book);
        } catch (error) {
            res.status(500).json({ error: (error as Error).message });
        }
     }
}

