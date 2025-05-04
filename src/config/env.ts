import dotenv from 'dotenv';
dotenv.config();
export const env = {
    PORT: process.env.PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5433/library',
  };

  