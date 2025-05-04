import { z } from 'zod';

export const createBookSchema = z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    author: z.string().min(1, { message: 'Author is required' }),
});

export const borrowBookSchema = z.object({
    bookId: z.string().uuid(),
});

export type CreateBookDto = z.infer<typeof createBookSchema>;
export type BorrowBookDto = z.infer<typeof borrowBookSchema>;
