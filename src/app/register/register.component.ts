import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    onSubmit() {
        // if (this.registerForm.valid) {
        //     if (this.registerForm.get('password').value === this.registerForm.get('repeatedPassword').value) {
        //         this.authService.register(this.registerForm.getRawValue()).subscribe(resp => {
        //             if(resp.status === NOT_UNIQUE_EMAIL_STATUS) {
        //                 this.registerForm.get('email').setErrors({notUnique: true});
        //             } else if(resp.status === NOT_UNIQUE_COMPANY_NAME) {
        //                 this.registerForm.get('companyName').setErrors({notUnique: true});
        //             } else {
        //                 if(resp.status === 'success') {
        //                     this.resetForm();
        //                     const navigationExtras: NavigationExtras = {
        //                         state: {
        //                             serviceResponse: {
        //                                 success: true,
        //                                 message: this.translateService.instant('Register.success'),
        //                             }
        //                         }
        //                     };

        //                     this.router.navigate(['login'], navigationExtras);
        //                 } else {
        //                     this.serviceResponse = {
        //                         success: false,
        //                         message: this.translateService.instant('Register.error'),
        //                     };
        //                 }
        //             }
        //         });
        //     } else {
        //         this.registerForm.get('repeatedPassword').setErrors({notEqual: true});
        //     }
        // } else {
        //     (Object as any).values(this.registerForm.controls).forEach(control => {
        //         control.markAsTouched();
        //     });
        // }
    }
}
