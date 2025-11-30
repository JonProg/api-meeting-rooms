import Fastify from 'fastify'
//import cors from '@fastify/cors'

const app = Fastify({ logger: true })

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


