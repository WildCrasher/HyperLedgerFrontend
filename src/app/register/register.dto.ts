export interface RegisterDto {
    username: string;
    password: string;
}

export class RegisterDtoImpl implements RegisterDto {
    username: string;
    password: string;

    constructor(init?: RegisterDtoImpl) {
        Object.assign(this, init);
    }
}
