import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OtfoundComponent } from './otfound/otfound.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';

const routes: Routes = [
  {path:'', redirectTo:'home',pathMatch:'full', title:'Home'},
  {path:'home', component:HomeComponent , title:'Home'},
  {path:'about', component:AboutComponent, title:'About'},
  {path:'contact', component:ContactComponent, title:'Contact'},
  {path:'protfolio', component:ProtfolioComponent, title:'protfolio'},
  {path:'**',component:OtfoundComponent, title:'Not Found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
