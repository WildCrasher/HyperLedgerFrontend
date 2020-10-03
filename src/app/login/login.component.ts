import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            name: ['', [Validators.required]],
            password: ['', Validators.required],
        });
    }

    onLogin() {
        if (this.loginForm.valid) {
            this.authService.login(this.loginForm.value).subscribe(resp => {
                localStorage.setItem('auth_key', resp['auth_key']);
                this.router.navigate(['add-thesis']);
            }, (err) => {
                //TODO
                console.log('ERROR');
            });
        }
    }
}
