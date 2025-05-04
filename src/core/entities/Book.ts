export class Book {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public isAvailable: boolean = true,
    ) {}

    public borrow() : void{
     if (!this.isAvailable) {
        throw new Error('Book is not available');
     }
     this.isAvailable = false;
    }
}