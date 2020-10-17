import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;

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
            this.loading = true;
            this.authService.login(this.loginForm.value).subscribe(resp => {
                localStorage.setItem('auth_key', resp['auth_key']);
                this.router.navigate(['thesis-add']);
                this.loading = false;
            }, (err) => {
                //TODO
                console.log('ERROR', err);
                this.loading = false;
            });
        }
    }
}
