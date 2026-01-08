import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
dotenv.config()
import cors from "cors"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'
import cartRoutes from './routes/cartRoutes.js'
import orderRoutes from './routes/orderRoutes.js'

let port = process.env.PORT || 3000

let app = express()

app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      "https://baababbaaaa-4.onrender.com",
      "https://zoyaelegance.com",
      "http://localhost:5173",
      "http://localhost:5174",
      "https://baababbaaaa.onrender.com"
    ];
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1 || origin.includes("onrender.com")) {
      return callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin);
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/user", userRoutes)
app.use("/api/product", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/order", orderRoutes)




const startServer = async () => {
  try {
    await connectDb();
    app.listen(port, () => {
      console.log("Hello From Server");
    });
  } catch (error) {
    console.log("Failed to start server due to DB connection error:", error);
    process.exit(1);
  }
};

startServer();


