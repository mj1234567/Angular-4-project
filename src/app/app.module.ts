import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Angualr fire 2 imports
import { AngularFireModule } from  'angularfire2';
import { AngularFireDatabase } from  'angularfire2/database';
import { AngularFireAuth } from  'angularfire2/auth';

//Component imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { AddClientComponent } from './components/add-client/add-client.component';
import { EditClientComponent } from './components/edit-client/edit-client.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';

//Service imports
import {ClientService} from './services/client.service'

const appRoutes : Routes = [
 {path :'', component : DashboardComponent},
 {path: 'login', component: LoginComponent},
 {path: 'register', component: RegisterComponent}
];

export const firebaseConfig = {
    apiKey: "AIzaSyD8DK0VkRpGV7DRBTafyNTqtCinO6mtXPg",
    authDomain: "clientpanel-905c3.firebaseapp.com",
    databaseURL: "https://clientpanel-905c3.firebaseio.com",
    storageBucket: "clientpanel-905c3.appspot.com",
    messagingSenderId: "834121929487"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
