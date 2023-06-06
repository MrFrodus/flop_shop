import express from "express";
import cors from "cors";
import usersRouter from "./routes/users";
import apiErrorHandler from "./error/ApiErrorHandler";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/users", usersRouter);

app.use(apiErrorHandler);

app.listen(3001, () => console.log("server running on port 3001"));
