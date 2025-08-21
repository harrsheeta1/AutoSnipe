import Product from "../models/Product.js";
import PriceHistory from "../models/PriceHistory.js";
import { emailQueue } from "../queues/emailqueue.js";
import { scrapeAmazon } from "../services/amazonScraper.js";
import redis from "../config/redis.js";
