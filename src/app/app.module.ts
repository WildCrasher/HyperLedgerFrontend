import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { ThesesListModule } from './theses-list/theses-list.module';
import { ThesisAssignmentsModule } from './thesis-assignments/thesis-assignments.module';
import { ThesesSupervisorModule } from './theses-supervisor/theses-supervisor.module';
import { ThesisDetailsModule } from './thesis-details/thesis-details.module';
import { AuthInterceptor } from './shared/interceptors/auth-interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        RegisterModule,
        ThesesListModule,
        ThesisDetailsModule,
        ThesisAssignmentsModule,
        ThesesSupervisorModule,
        HttpClientModule,
        NgbModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
