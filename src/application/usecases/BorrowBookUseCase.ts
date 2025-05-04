import { IBookRepository } from "../../core/repositories/IbookRepository";
import { Book } from "../../core/entities/Book";

export class BorrowBookUseCase {
    constructor(private readonly bookRepository: IBookRepository) {}

    async execute(bookId: string): Promise<Book> {
        const book = await this.bookRepository.findById(bookId);
        if (!book) {
            throw new Error('Book not found');
        }
        book.borrow();
        await this.bookRepository.save(book);
        return book;
    }
}


