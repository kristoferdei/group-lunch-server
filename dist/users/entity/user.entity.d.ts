export declare class UsersEntity {
    id: string;
    username: string;
    fullName: string;
    password: string;
    email: string;
    createdOn?: Date;
    updatedOn?: Date;
    hashPassword(): Promise<any>;
}
