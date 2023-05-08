import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {MathComponent} from "./math/math.component";
import {UkrainianComponent} from "./ukrainian/ukrainian.component";
import {MaterialsComponent} from "./materials/materials.component";
import {BlogComponent} from "./blog/blog.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'math', component: MathComponent },
  { path: 'materials', component: MaterialsComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'ukrainian', component: UkrainianComponent },
  { path: '**', component: NotFoundComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
