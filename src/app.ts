import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middleware/globalErrorHandler";
import cookieParser from "cookie-parser";
import notFound from "./app/middleware/notFound";

const app: Application = express();
// app.use(cors({ origin: [`${process.env.CLIENT_URL}`,`${process.env.DASHBOARD_URL}`], credentials: true, }));
// CORS configuration
app.use(
  cors({
    origin: [`${process.env.CLIENT_URL}`, `${process.env.DASHBOARD_URL}`],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
  })
);
// Handle OPTIONS preflight
app.options('*', cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Additional CORS headers middleware
app.use((req: Request, res: Response, next) => {
  res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "Server is running..",
  });
});

app.use("/api/v1", router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;