import { PrismaClient } from "@prisma/client";
import { IBookRepository } from "../../core/repositories/IbookRepository";
import { Book } from "../../core/entities/Book";

export class PrismaBookRepository implements IBookRepository {
    private prisma: PrismaClient;
    constructor() {
        this.prisma = new PrismaClient();
    }

    async findById(id: string): Promise<Book | null> {
        const book = await this.prisma.book.findUnique({
            where: { id },
        });
        return book ? new Book(book.id, book.title, book.author, book.isAvailable) : null;
    }
    
    async save(book: Book): Promise<Book> {
        const bookData = await this.prisma.book.upsert({
            where: { id: book.id },
            update: { isAvailable: book.isAvailable },
            create: { id: book.id, title: book.title, author: book.author, isAvailable: book.isAvailable },
        });
        return new Book(bookData.id, bookData.title, bookData.author, bookData.isAvailable);
        
    }
}

