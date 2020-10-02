export interface LoginDto {
    username: string;
    password: string;
}

export class LoginDtoImpl implements LoginDto {
    username: string;
    password: string;

    constructor(init?: LoginDtoImpl) {
        Object.assign(this, init);
    }
}
