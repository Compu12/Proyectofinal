import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendEmailComponent } from './auth/send-email/send-email.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

import { MainComponent } from './main/main.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductosComponent } from './productos/productos.component';
import { CafeComponent } from './cafe/cafe.component';
import { GalletasComponent } from './galletas/galletas.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verification-email', component: SendEmailComponent, },
  {
    path: 'main', component: MainComponent,
    children: [
      
      {
        path: 'productos', component: ProductosComponent,
        children: [
          { path: 'cafe', component: CafeComponent },
          { path: 'galletas', component: GalletasComponent,
            //routerLink[/productos/galletas]
          }
        ]

      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
