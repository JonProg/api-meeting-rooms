export interface Room{
    id: string;
    name: string;
    capacity: number;
    resources: string[];
    isAvailable: boolean;
}