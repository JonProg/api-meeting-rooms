import type { FastifyInstance } from "fastify";
import { UserCase } from "../usecases/user.usecase.js";
import type { UserCreate } from "../interfaces/user.interface.js";

export async function userRoutes(fastify: FastifyInstance) {
    const useUserCase = new UserCase();
    fastify.post< {Body:UserCreate }>('/', async (req, reply) => {
        const { name, email } = req.body
        try {
            const data = await useUserCase.create({ name, email });
            return reply.send(data);
        } catch (error) {
            reply.send(error);
        }
    });

    fastify.get('/', async (req, reply) => {
        return reply.send({ message: 'User route is working!' });
    });
}