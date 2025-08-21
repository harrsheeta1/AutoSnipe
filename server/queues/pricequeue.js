// priceQueue.js
import { Queue } from "bullmq";
import env from "../config/env.js";
import { connection } from "../config/bullmq.js";

export const priceQueue = new Queue("priceQueue", {
  connection,
  defaultJobOptions: { removeOnComplete: true },
});
