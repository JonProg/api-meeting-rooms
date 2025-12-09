import type { User, UserCreate, UserRepository } from "../interfaces/user.interface.js";
import { prisma } from "../database/prismas-client.js";

class UserRepositoryPrisma implements UserRepository {
    async create(data: UserCreate): Promise<User> {
        const result  = await prisma.user.create({
            data: {
                name: data.name,
                email: data.email
            }
        })
        return result;
    }
    async findByEmail(email: string): Promise<User | null> {
        const result = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        return result || null;
    }

    async update(data: UserCreate): Promise<User> {}
}

export { UserRepositoryPrisma };