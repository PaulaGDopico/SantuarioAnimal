import { NextFunction, Request, Response } from "express";
import prisma from "../prismaClient.js";

export const prismaMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		// Connect Prisma Client
		req.context = { prisma };
		await next();
	} catch (error) {
		console.error("Error in Prisma middleware:", error);
		res.status(500).json({ error: "Internal server error" });
	} finally {
		// Disconnect Prisma Client
		await prisma.$disconnect();
	}
};
