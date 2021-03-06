import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { RegisterDtoImpl } from '../shared/dtos/register.dto';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    loading = false;

    constructor( 
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
    ) {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            passwordGroup: this.formBuilder.group({
                password: ['', Validators.required],
                matchingPassword: ['', Validators.required]
            }, { validators: this.checkPasswords }),
            role: ['', Validators.required]
        });
    }

    ngOnInit(): void {
    }

    onRegister() {
        if(this.registerForm.valid) {
            if(this.registerForm.get('passwordGroup').get('password').value === this.registerForm.get('passwordGroup').get('matchingPassword').value) {
                this.loading = true;
                const values = this.registerForm.value;

                const dto: RegisterDtoImpl = new RegisterDtoImpl();
                dto.name = values.name;
                dto.password = values.passwordGroup.password;
                dto.matchingPassword = values.passwordGroup.matchingPassword;
                dto.role = values.role;
                this.authService.register(dto).subscribe(res => {
                    console.log(res);
                    this.router.navigate(['']);
                    this.loading = false;
                }, resErr => {
                    console.log(resErr);
                    if(resErr.error.text.includes('There is an account with that username')) {
                        this.registerForm.get('name').setErrors({userExists: true});
                    }
                    else {
                        console.log(resErr);
                    }
                    this.loading = false;
                })
            }
            else {
                this.registerForm.get('matchingPassword').setErrors({notEqual: true});
            }
        }
    }

    //nie poakzywalo komunikatu, jak umiesz to szybko zmien na uzywanie swojej funkcji
    checkPasswords(group: FormGroup) {
        let pass = group.get('password').value;
        let confirmPass = group.get('matchingPassword').value;

        return pass === confirmPass ? null : { notSame: true }     
    }
}
