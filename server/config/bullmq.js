import { Queue, Worker, QueueScheduler } from "bullmq";
import Redis from "ioredis";
import env from "./env.js";

// Redis connection
const connection = new Redis(env.REDIS_URL);

// Scheduler (handles delayed/repeatable jobs)
new QueueScheduler("priceQueue", { connection });
new QueueScheduler("emailQueue", { connection });


// Export connection for workers
export { connection };
