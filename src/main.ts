import express from 'express';
import  router from './infrastructure/http/routes';
import { PrismaClient } from '@prisma/client';
import { env } from './config/env';

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.use(router);

async function startServer() {
    try {
        await prisma.$connect();
        app.listen(env.PORT, () => {
          console.log(`✅ Server running on port ${env.PORT}`);
        });
      } catch (error) {
        console.error('❌ Failed to start server:', error);
        process.exit(1);
      }
    
}

startServer();
