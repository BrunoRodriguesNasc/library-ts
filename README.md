# Library Management System

A RESTful API for library management built with TypeScript, Express, Prisma, and PostgreSQL using Clean Architecture principles.

## 🛠️ Tech Stack

- **TypeScript**: Type-safe JavaScript
- **Express.js**: Web framework
- **Prisma**: ORM for database access
- **PostgreSQL**: Database 
- **Docker & Docker Compose**: Containerization
- **Zod**: Schema validation
- **Jest**: Testing framework

## 🏗️ Architecture

This project follows Clean Architecture principles with a domain-driven design:

- `core`: Domain entities and repository interfaces
- `application`: Use cases and business logic
- `infrastructure`: External implementations (database, HTTP, etc.)
- `config`: Application configuration

## 🚀 Getting Started

### Prerequisites

- Docker and Docker Compose
- Node.js (for local development)
- npm or yarn

### Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/library.git
cd library
```

2. Start the application with Docker:
```bash
docker-compose up -d
```

The application will be available at http://localhost:3000.

### Environment Variables

Create a `.env` file with the following variables:
```
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/library
```

For local development with a different database port:
```
PORT=3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5433/library
```

## 📚 API Documentation

### Books

#### Get a book by ID
```
GET /api/books/:id
```

Response:
```json
{
  "id": "book-1",
  "title": "Clean Architecture",
  "author": "Robert C. Martin",
  "isAvailable": true
}
```

#### Create a book
```
POST /api/books
```

Request body:
```json
{
  "id": "book-1",
  "title": "Clean Architecture",
  "author": "Robert C. Martin"
}
```

#### Borrow a book
```
POST /api/books/:id/borrow
```

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 📁 Project Structure

```
library/
├── src/
│   ├── core/
│   │   ├── entities/
│   │   │   └── Book.ts
│   │   └── repositories/
│   │       └── IBookRepository.ts
│   ├── application/
│   │   └── usecases/
│   │       └── BorrowBookUseCase.ts
│   ├── infrastructure/
│   │   ├── database/
│   │   │   └── PrismaBookRepository.ts
│   │   ├── http/
│   │   │   ├── controllers/
│   │   │   │   └── BookController.ts
│   │   │   └── routes/
│   │   │       └── index.ts
│   │   └── config/
│   │       └── env.ts
│   └── main.ts
├── prisma/
│   └── schema.prisma
├── Dockerfile
├── docker-compose.yml
├── package.json
└── tsconfig.json
```

## 🧩 Development

### Database Migrations

```bash
# Generate Prisma client
npx prisma generate

# Create and apply migrations
npx prisma migrate dev --name <migration-name>

# View database with Prisma Studio
npx prisma studio
```

### Building for Production

```bash
# Build the application
npm run build

# Start in production mode
npm start
``` 