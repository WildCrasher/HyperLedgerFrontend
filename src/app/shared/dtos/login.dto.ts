export interface LoginDto {
    email: string;
    password: string;
}

export class LoginDtoImpl implements LoginDto {
    email: string;
    password: string;

    constructor(init?: LoginDtoImpl) {
        Object.assign(this, init);
    }
}
