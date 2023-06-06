import express from "express";
import cors from "cors";
import userRouter from "./routes/user";
import productRouter from "./routes/product";
import productMetaRouter from "./routes/productMeta";


import apiErrorHandler from "./error/ApiErrorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/productMeta", productMetaRouter);

app.use(apiErrorHandler);

app.listen(3001, () => console.log("server running on port 3001"));
