import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { RegisterDtoImpl } from './register.dto';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm: FormGroup

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
            role: ['']
        });
    }

    ngOnInit(): void {
    }

    onRegister() {
        if(this.registerForm.valid) {
            const values = this.registerForm.value;

            const dto: RegisterDtoImpl = new RegisterDtoImpl();
            dto.name = values.name;
            dto.password = values.passwordGroup.password;
            dto.matchingPassword = values.passwordGroup.matchingPassword;
            dto.role = values.role;
            
            this.authService.register(dto).subscribe(res => {
                console.log(res);
                this.router.navigate(['']);
            }, error => {
                console.log(error);
            })
        }
    }

    checkPasswords(group: FormGroup) {
        let pass = group.get('password').value;
        let confirmPass = group.get('matchingPassword').value;

        return pass === confirmPass ? null : { notSame: true }     
    }
}
