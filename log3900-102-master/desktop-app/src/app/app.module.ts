import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { AuthScreenComponent } from './screens/auth-screen/auth-screen.component';
import { DrawingScreenComponent } from './screens/drawing-screen/drawing-screen.component';
import { AlbumScreenComponent } from './screens/album-screen/album-screen.component';
import { AccountScreenComponent } from './screens/account-screen/account-screen.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './modules/material';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: AuthScreenComponent },
  { path: 'home', component: HomeScreenComponent },
  { path: 'drawing-screen', component: DrawingScreenComponent },
  { path: 'account-screen', component: AccountScreenComponent },
  { path: 'albums-screen', component: AlbumScreenComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    AuthScreenComponent,
    DrawingScreenComponent,
    AlbumScreenComponent,
    AccountScreenComponent,
    HomeScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MaterialModule,
    FontAwesomeModule,
  ],
  exports: [MaterialModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
