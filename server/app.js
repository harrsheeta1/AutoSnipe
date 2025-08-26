// server.js
// import dotenv from "dotenv";
// dotenv.config();

// import app from "./src/app.js";
// import "./src/jobs/priceCheckJob.js";
// import "./src/jobs/emailJob.js";

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// // src/app.js
// import express from "express";
// import morgan from "morgan";
// import productRoutes from "./routes/productRoutes.js";
// import userRoutes from "./routes/userRoutes.js";

// const app = express();

// app.use(express.json());
// app.use(morgan("dev"));

// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Amazon Price Tracker API is running!");
// });

// export default app;


import express from "express";
import morgan from "morgan";

import productRoutes from "./routes/productroute.js";
import authRoutes from "./routes/authroute.js";
import notificationRoutes from "./routes/notiroute.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// API Routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/notifications", notificationRoutes);

app.get("/", (req, res) => {
  res.send("Amazon Price Tracker API is running!");
});

export default app;
