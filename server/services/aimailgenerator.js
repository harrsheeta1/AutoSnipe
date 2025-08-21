import OpenAI from "openai";
import env from "../config/env.js";

const client = new OpenAI({ apiKey: env.OPENAI_API_KEY });

export const generateEmailText = async ({ userName, productName, newPrice }) => {
  if (!env.OPENAI_API_KEY) {
    return `Hi ${userName}, the price of "${productName}" is now ₹${newPrice}. Grab it soon!`;
  }

  const prompt = `
  Write a friendly and engaging email to ${userName} notifying that the product "${productName}" price dropped to ₹${newPrice}. Use emojis.
  `;

  const response = await client.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 100,
  });

  return response.choices[0].message.content;
};
