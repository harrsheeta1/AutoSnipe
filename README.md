

---

# **Amazon Price Tracker**
A scalable web app that is scalable to multiple users and it saves your time in scrolling the products whose price want's to be dropped so as to purchase that. 
## **Project Overview**

The **Amazon Price Tracker** allows users to track prices of Amazon products. Users provide a product link and desired price, and the system notifies them via email when the price drops. Notifications can also be **AI-generated** for a personalized experience.

The system is designed to be **scalable** using **Redis caching** and **BullMQ queues**, supporting multiple concurrent users.

---

## **Features**

* Track prices of Amazon products via URL.
* Receive email notifications when prices drop below desired levels.
* AI-generated personalized messages for notifications.
* Maintain product price history in the database.
* Redis caching for fast access and queue management.
* Scalable backend architecture for multiple users.

---

## **Tech Stack**

**Backend**

* Node.js + Express.js for API and server-side logic
* MongoDB + Mongoose for storing users, products, price history, and notifications
* Redis for caching product prices and managing BullMQ queues
* BullMQ for job queue management (price checks & email notifications)
* Nodemailer for sending email alerts
* OpenAI API for AI-generated email content

**Frontend**

* React.js / Next.js for building the user interface
* Tailwind CSS for styling
* Axios / fetch for API requests from frontend to backend

---

## **System Design Diagram**

![Description of image](https://chatgpt.com/s/m_68a72616c8ac81919f2a0fd124ccbe6f)

## **.env Example**

```env
REDIS_URL=redis://default:yourpassword@redis-host:port
MONGO_URL=mongodb+srv://user:password@cluster.mongodb.net/dbname
JWT_SECRET=your_jwt_secret
NODE_ENV=development
PORT=5000
OPENAI_API_KEY=your_openai_api_key

EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
EMAIL_FROM="Price Tracker <alerts@yourapp.com>"

PRICE_CHECK_CRON=*/30 * * * *      
PRICE_QUEUE_CONCURRENCY=5
EMAIL_QUEUE_CONCURRENCY=10
```

---

## **Next Steps for Development**

1. Install dependencies:

   ```bash
   npm install express mongoose bullmq ioredis nodemailer dotenv axios
   ```
2. Setup `.env` with MongoDB, Redis, email, and OpenAI API credentials.
3. Implement **models**: Users, Products, PriceHistory, Notifications.
4. Implement **services**: Amazon scraper, price tracker, cache service, email service, AI email generator.
5. Setup **BullMQ queues** and **jobs** for price tracking and email notifications.
6. Build **API controllers** and routes.
7. (Optional) Build **frontend dashboard** with React/Next.js.
8. Test end-to-end by adding products and verifying email notifications.

---

