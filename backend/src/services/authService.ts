import { Prisma } from "@prisma/client";
import prisma from "../prismaClient";
import { compareSync, hashSync } from "bcrypt";
import * as jwt from "jsonwebtoken";
import { JWT_SECRET } from "../middleware/secrets";

export const signup = async (user: Prisma.AdministradorCreateInput) => {
	const { email, password, nombre, telefono } = user;

	let userExists = await prisma.administrador.findFirst({
		where: { email },
	});

	if (userExists) {
		throw Error("El usuario ya existe");
	}
	return prisma.administrador.create({
		data: {
			nombre,
			email,
			password: hashSync(password, 10),
			telefono,
		},
	});
};

export const login = async (user: { email: string; password: string }) => {
	const { email, password } = user;
	let userExists = await prisma.administrador.findFirst({
		where: { email },
	});

	if (!userExists) {
		throw Error("Ese administrador no existe");
	}

	if (!compareSync(password, userExists.password)) {
		throw Error("Contraseña incorrecta");
	}

	const token = jwt.sign(
		{
			userId: userExists.id,
		},
		JWT_SECRET
	);

	return { email, token };
};
