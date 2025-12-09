export interface User{
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface UserCreate{
    name: string;
    email: string;
}

export interface UserRepository {
    create(data: UserCreate): Promise<User>;
    update(data: UserCreate): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    //delete(id: string): Promise<User>;
}