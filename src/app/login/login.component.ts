import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    onLogin() {
        // if (this.loginForm.valid) {
        //     this.authService.login(this.loginForm.value).subscribe(resp => {

        //         localStorage.setItem('xsgmkhr7ysm8svrds6355kc9k72t5htd', (resp.agreements_accepted).toString());
        //         localStorage.setItem('auth_key', resp['auth_key']);
        //         if(resp.last_login) {
        //             this.router.navigateByUrl('/dashboard');
        //         } else {
        //             const navigationExtras: NavigationExtras = {
        //                 state: {
        //                     serviceResponse: {
        //                         success: true,
        //                         message: this.translateService.instant('Login.firstLogin'),
        //                     }
        //                 }
        //             };

        //             this.router.navigate(['user'], navigationExtras);
        //         }
        //     }, (err) => {
        //         this.loginError = true;
        //     });
        // }
    }
}
