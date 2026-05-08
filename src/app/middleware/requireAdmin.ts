import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../error/AppError";
import config from "../config";
import { verifyToken } from "../utils/verifyJWT";

export const requireAdmin = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Unauthorized");
  }

  const token = authHeader.split(" ")[1];
  const payload = verifyToken(
    token,
    config.jwt_access_secret as string
  ) as JwtPayload;

  if (!payload?.email || payload.email !== config.admin_email) {
    throw new AppError(httpStatus.FORBIDDEN, "Forbidden");
  }

  (req as Request & { user?: JwtPayload }).user = payload;
  next();
};
