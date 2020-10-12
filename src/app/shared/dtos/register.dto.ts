export class RegisterDtoImpl {
    name: string;
    password: string;
    matchingPassword: string;
    role: string;

    constructor(init?: RegisterDtoImpl) {
        Object.assign(this, init);
    }
}
