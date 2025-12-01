import Fastify from 'fastify'
import usersRoutes from './routes/users_routes.js';
//import cors from '@fastify/cors'

const app = Fastify({ logger: true })
app.register(usersRoutes, {prefix:'/api'})

const start = async () => {
    //await app.register(cors)

    try{
        await app.listen({ port:3333 });
        console.log('HTTP server running!')
    }catch(err){
        process.exit(1)
    }
}

start();


