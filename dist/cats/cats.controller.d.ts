import { CreateCatDto } from './dtos/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
export declare class CatsController {
    private catsService;
    constructor(catsService: CatsService);
    create(body: CreateCatDto): Partial<Cat>;
    findAll(): Promise<Cat[]>;
}
