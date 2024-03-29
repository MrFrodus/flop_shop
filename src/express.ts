import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import apiErrorHandler from "./error/ApiErrorHandler";
import userRouter from "./routes/user";
import productRouter from "./routes/product";
import productMetaRouter from "./routes/productMeta";
import productReviewRouter from "./routes/productReview";
import categoryRouter from "./routes/category";
import cartRouter from "./routes/cart";
import cartItemRouter from "./routes/cartItem";
import orderRouter from "./routes/order";
import orderItemRouter from "./routes/orderItem";
import transactionRouter from "./routes/transaction";
import authRouter from "./routes/auth";
import shippingRouter from "./routes/shipping";
import path from "path";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/productMeta", productMetaRouter);
app.use("/productReview", productReviewRouter);
app.use("/category", categoryRouter);
app.use("/cart", cartRouter);
app.use("/cartItem", cartItemRouter);
app.use("/order", orderRouter);
app.use("/orderItem", orderItemRouter);
app.use("/transaction", transactionRouter);
app.use("/auth", authRouter);
app.use("/shipping", shippingRouter);

app.use(apiErrorHandler);

app.use(express.static(path.join(__dirname, "..", "..", "flop_shop_front", "dist")));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "..", "flop_shop_front", "dist", "index.html"));
});

app.listen(3001, () => console.log("server running on port 3001"));
