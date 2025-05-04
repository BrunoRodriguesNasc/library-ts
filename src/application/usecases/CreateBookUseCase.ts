import { IBookRepository } from "../../core/repositories/IbookRepository";
import { Book } from "../../core/entities/Book";

export class CreateBookUseCase {
    constructor(private readonly bookRepository: IBookRepository) {}

    async execute(author: string, title: string): Promise<Book> {

        const book = new Book(crypto.randomUUID(), title, author, true);
        return this.bookRepository.save(book);
    }
}
