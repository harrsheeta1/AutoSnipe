// emailQueue.js
import { Queue } from "bullmq";
import { connection } from "../config/bullmq.js";

export const emailQueue = new Queue("emailQueue", {
  connection,
  defaultJobOptions: { removeOnComplete: true },
});
