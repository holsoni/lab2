import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftNavBarComponent } from './left-nav-bar/left-nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MathComponent } from './math/math.component';
import { UkrainianComponent } from './ukrainian/ukrainian.component';
import { MaterialsComponent } from './materials/materials.component';
import { BlogComponent } from './blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterLink} from "@angular/router";
import { SalaryPipe } from './salary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftNavBarComponent,
    FooterComponent,
    MathComponent,
    UkrainianComponent,
    MaterialsComponent,
    BlogComponent,
    HomeComponent,
    NotFoundComponent,
    SalaryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
