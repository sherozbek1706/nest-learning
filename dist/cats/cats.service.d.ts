import { Cat } from './interfaces/cat.interface';
export declare class CatsService {
    create(body: Partial<Cat>): Partial<Cat>;
    findAll(): {
        name: string;
        breed: string;
        age: number;
    }[];
}
