import express from "express";
import cors from "cors";
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

import apiErrorHandler from "./error/ApiErrorHandler";

const app = express();

app.use(cors());
app.use(express.json());

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

app.use(apiErrorHandler);

app.listen(3001, () => console.log("server running on port 3001"));
