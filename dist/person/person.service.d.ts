import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { PersonEntity } from "./person.entity";
export declare class PersonService extends TypeOrmCrudService<PersonEntity> {
    constructor(repo: any);
}
