import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import cookieParser from "cookie-parser";
import notFound from "./app/middleware/notFound";

const app: Application = express();
app.use(cors({ origin: [`${process.env.CLIENT_URL}`,`${process.env.DASHBOARD_URL}`], credentials: true, }));
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Server is running..",
  });
});

app.use("/api/v1", router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;