import dotenv from "dotenv";
import Joi from "joi";

dotenv.config();

const envSchema = Joi.object({
  MONGO_URL: Joi.string().required(),
  REDIS_URL: Joi.string().required(),
  PORT: Joi.number().default(5000),
  NODE_ENV: Joi.string().valid("development", "production").default("development"),
  JWT_SECRET: Joi.string().required(),
  EMAIL_HOST: Joi.string().required(),
  EMAIL_PORT: Joi.number().required(),
  EMAIL_USER: Joi.string().required(),
  EMAIL_PASS: Joi.string().required(),
  EMAIL_FROM: Joi.string().required(),
  OPENAI_API_KEY: Joi.string().optional(),
  PRICE_CHECK_CRON: Joi.string().default("*/30 * * * *"),
  PRICE_QUEUE_CONCURRENCY: Joi.number().default(5),
  EMAIL_QUEUE_CONCURRENCY: Joi.number().default(10),
}).unknown(true);

const { error, value: env } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default env;
