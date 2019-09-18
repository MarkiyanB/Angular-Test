import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

const routes =[
  //{path: '', component: MainComponent },
  {path: 'registration', component: RegistrationComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RegistrationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
