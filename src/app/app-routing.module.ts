import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CreateComponent } from './create/create.component';

const routes: Routes = [
    {
        path:'',
        component: HomeComponent
    },
    {
        path:'about/:id',
        component: AboutComponent
    },
    {
        path:'form',
        component: CreateComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }