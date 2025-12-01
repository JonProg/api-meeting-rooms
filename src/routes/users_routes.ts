import type { FastifyInstance, FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";


const usersRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {

  app.get('/users', async (request : FastifyRequest, reply : FastifyReply) => {
    return { message: "Listando usuários" };
  });
  

  app.post('/users', {
        schema: {
            body: {
                type: "object",
                required: ["name", "email", "password"],
                properties: {
                    name: { type: "string" },
                    email: { type: "string", format: "email" },
                    password: { type: "string", minLength: 6 }
                }
            }
        }
    }, async (request : FastifyRequest, reply : FastifyReply) => {

    const data = request.body as {
        name : string,
        email : string,
        password : string
    };

    return {
      message: "Usuário criado com sucesso!",
      user: data
    };
  });
};

export default usersRoutes;
