// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import connectDB from "./database/db.js";
// import userRoute from "./routes/user.route.js";
// import courseRoute from "./routes/course.route.js";
// import mediaRoute from "./routes/media.route.js";
// import purchaseRoute from "./routes/purchaseCourse.route.js";
// import courseProgressRoute from "./routes/courseProgress.route.js";

// dotenv.config();
// connectDB();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cookieParser());

// // ✅ CORS Configuration (corrected)
// app.use(
//   cors({
//     origin: "http://localhost:5173/",
//     credentials: true,
//   })
// );

// // ✅ Manually handle preflight (OPTIONS) requests
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173/");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   res.header(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, PUT, DELETE, OPTIONS"
//   );

//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }

//   next();
// });

// // ✅ Routes
// app.use("/api/v1/media", mediaRoute);
// app.use("/api/v1/user", userRoute);
// app.use("/api/v1/course", courseRoute);
// app.use("/api/v1/purchase", purchaseRoute);
// app.use("/api/v1/progress", courseProgressRoute);

// // Health check route
// app.get("/", (req, res) => {
//   res.json({ status: "Backend is running!" });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server listening at port ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./database/db.js";

// Routes
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import mediaRoute from "./routes/media.route.js";
import purchaseRoute from "./routes/purchaseCourse.route.js";
import courseProgressRoute from "./routes/courseProgress.route.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());

// ✅ CORS configuration for local development
app.use(
  cors({
    origin: "http://localhost:5173", // React app URL
    credentials: true, // allow cookies
  })
);

// ✅ Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);
app.use("/api/v1/media", mediaRoute);
app.use("/api/v1/purchase", purchaseRoute);
app.use("/api/v1/progress", courseProgressRoute);

// Health check route
app.get("/", (req, res) => {
  res.json({ status: "Backend is running!" });
});

// Global error handler (optional but recommended)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Server Error" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
