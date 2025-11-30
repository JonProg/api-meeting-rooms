import type { FastifyInstance, FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";

const usersRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {

  fastify.get('/users', async (request : FastifyRequest, reply : FastifyReply) => {
    return { message: "Listando usuários" };
  });

  fastify.post('/users', async (request : FastifyRequest, reply : FastifyReply) => {
    return { message: "Criando usuário" };
  });

};

export default usersRoutes;
