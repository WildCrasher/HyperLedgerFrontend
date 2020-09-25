export interface RegisterDto {
    email: string;
    password: string;
}

export class RegisterDtoImpl implements RegisterDto {
    email: string;
    password: string;

    constructor(init?: RegisterDtoImpl) {
        Object.assign(this, init);
    }
}
